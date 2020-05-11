import debounce from 'lodash.debounce';
import * as THREE from 'three';
import config from '../data/config';
import ASCIIShader from './shaders/ASCII';

let mainScene: THREE.Scene,
  mainCamera: THREE.PerspectiveCamera,
  backLight: THREE.PointLight,
  fillLight: THREE.PointLight,
  keyLight: THREE.PointLight,
  renderer: THREE.WebGLRenderer,
  reqAnimID: number,
  frustumHeight: number,
  frustumWidth: number,
  frustumHeightHalf: number,
  frustumWidthHalf: number,
  resizeRenderer: () => void;

const ROOT_SELECTOR = 'heroScene';
const RESIZE_DEBOUNCE = 32;

export const setupScene = () => {
  const GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader')
    .GLTFLoader;
  const DRACOLoader = require('three/examples/jsm/loaders/DRACOLoader')
    .DRACOLoader;
  const EffectComposer = require('three/examples/jsm/postprocessing/EffectComposer')
    .EffectComposer;
  const ShaderPass = require('three/examples/jsm/postprocessing/ShaderPass')
    .ShaderPass;

  mainScene = new THREE.Scene();

  const rootElem = document.getElementById(ROOT_SELECTOR);

  mainCamera = new THREE.PerspectiveCamera(
    20,
    rootElem.clientWidth / rootElem.clientHeight,
    0.1,
    16,
  );
  mainCamera.position.z = 9;

  // Point Lights
  backLight = new THREE.PointLight(0x262bff, 12, 0);
  backLight.position.set(-5, 5, -5);
  mainScene.add(backLight);

  fillLight = new THREE.PointLight(0xf25f4c, 8, 0);
  fillLight.position.set(-5, 0, 5);
  mainScene.add(fillLight);

  keyLight = new THREE.PointLight(0xffffff, 6, 0);
  keyLight.position.set(5, 0, 0);
  mainScene.add(keyLight);

  // Renderer
  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize(rootElem.clientWidth, rootElem.clientHeight);
  renderer.setClearColor(0x000000, 0);
  rootElem.appendChild(renderer.domElement);

  // Load 3D Model
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(`${config.staticPath}3d/draco/`);

  loader.setDRACOLoader(dracoLoader);

  const modelContainer = new THREE.Group();
  mainScene.add(modelContainer);

  loader.load(
    `${config.staticPath}3d/cg-face-scan2-optimized.glb`,
    gltf => {
      modelContainer.add(gltf.scene);
    },
    xhr => {
      // console.log(`${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
    },
    console.error,
  );

  const composer = new EffectComposer(renderer);

  // ASCII Effect
  const FONT_MAP_SIZE = new THREE.Vector2(64, 64);
  const FONT_CHAR_SIZE = new THREE.Vector2(8, 8);

  const fontLoader = new THREE.TextureLoader();
  const fontFile = `${config.imagesPath}collin-font5.png`;
  const tFont = fontLoader.load(fontFile);
  tFont.minFilter = THREE.NearestFilter;
  tFont.magFilter = THREE.NearestFilter;

  function getLowResSize() {
    const charCountPrecise = [
      rootElem.clientWidth / FONT_CHAR_SIZE.x,
      rootElem.clientHeight / FONT_CHAR_SIZE.y,
    ];

    const charCountCeil = charCountPrecise.map(Math.ceil);

    return {
      charCountPrecise,
      charCountCeil,
    };
  }

  const startingSizeData = getLowResSize();
  const lowResRenderTarget = new THREE.WebGLRenderTarget(
    startingSizeData.charCountCeil[0] * 2,
    startingSizeData.charCountCeil[1] * 2,
  );

  const lowResDepthTexture = new THREE.DepthTexture(0, 0);
  lowResDepthTexture.type = THREE.UnsignedShortType;
  lowResRenderTarget.depthTexture = lowResDepthTexture;

  const asciiPass = new ShaderPass(ASCIIShader());
  asciiPass.uniforms.tLowRes.value = lowResRenderTarget.texture;
  asciiPass.uniforms.tDepth.value = lowResDepthTexture;
  asciiPass.uniforms.cameraNear.value = mainCamera.near;
  asciiPass.uniforms.cameraFar.value = mainCamera.far;
  asciiPass.uniforms.tFont.value = tFont;

  const fontCountX = FONT_MAP_SIZE.x / FONT_CHAR_SIZE.x;
  const fontCountY = FONT_MAP_SIZE.y / FONT_CHAR_SIZE.y;

  asciiPass.uniforms.fontCharTotalCount.value =
    Math.floor(fontCountX) * Math.floor(fontCountY);

  asciiPass.uniforms.fontCharSize.value.set(1 / fontCountX, 1 / fontCountY);

  asciiPass.uniforms.fontCharCount.value.set(fontCountX, fontCountY);

  function updateAsciiRenderSize() {
    const size = getLowResSize();

    asciiPass.uniforms.renderCharSize.value.set(
      1 / size.charCountPrecise[0],
      1 / size.charCountPrecise[1],
    );

    asciiPass.uniforms.renderCharCount.value.set(
      size.charCountPrecise[0],
      size.charCountPrecise[1],
    );

    lowResRenderTarget.setSize(
      size.charCountCeil[0] * 2,
      size.charCountCeil[1] * 2,
    );
  }

  updateAsciiRenderSize();

  composer.addPass(asciiPass);

  // Mouse Tracking
  const pointerPositionNormalized = new THREE.Vector2(0, 0);

  function pointermove(e: PointerEvent) {
    pointerPositionNormalized.set(
      e.clientX / rootElem.clientWidth,
      e.clientY / rootElem.clientHeight,
    );
  }
  document.addEventListener('pointermove', pointermove);

  // Handle Window Resize
  resizeRenderer = () => {
    renderer.setSize(rootElem.clientWidth, rootElem.clientHeight);
    mainCamera.aspect = rootElem.clientWidth / rootElem.clientHeight;
    mainCamera.updateProjectionMatrix();
    updateAsciiRenderSize();
  };
  window.addEventListener('resize', debounce(resizeRenderer, RESIZE_DEBOUNCE));

  const clock = new THREE.Clock();

  function updateFrustumValues() {
    frustumHeight =
      2.0 *
      mainCamera.position.z *
      Math.tan(mainCamera.fov * 0.5 * THREE.MathUtils.DEG2RAD);

    frustumWidth = frustumHeight * mainCamera.aspect;

    frustumHeightHalf = frustumHeight / 2;
    frustumWidthHalf = frustumWidth / 2;
  }
  updateFrustumValues();

  function renderScene() {
    const delta = clock.getDelta();

    modelContainer.rotation.y = pointerPositionNormalized.x - 0.5;
    modelContainer.rotation.x = (pointerPositionNormalized.y - 0.5) / 3;

    renderer.setRenderTarget(lowResRenderTarget);
    renderer.render(mainScene, mainCamera);

    renderer.setRenderTarget(null);
    composer.render();

    reqAnimID = requestAnimationFrame(renderScene);
  }
  renderScene();
};

export function destroyScene() {
  cancelAnimationFrame(reqAnimID);
  window.removeEventListener(
    'resize',
    debounce(resizeRenderer, RESIZE_DEBOUNCE),
  );
  mainScene.dispose();
  renderer.dispose();
}
