import * as THREE from 'three';
import debounce from 'lodash.debounce';

import AdditiveShader from './shaders/Additive';
import ASCIIShader from './shaders/ASCII';
import RippleShader from './shaders/Ripple';
import ScanShader from './shaders/Scan';
import VertexLitParticle from './shaders/VertexLitParticle';
import VolumetricLightScattering from './shaders/VolumetricLightScattering';
import VolumetricLightCylinder from './shaders/VolumetricLightCylinder';

let mainScene: THREE.Scene,
  mainCamera: THREE.PerspectiveCamera,
  backLight: THREE.PointLight,
  fillLight: THREE.PointLight,
  keyLight: THREE.PointLight,
  geometry: THREE.BoxGeometry,
  renderer: THREE.WebGLRenderer,
  reqAnimID: number,
  resizeRenderer: () => void;

const ROOT_SELECTOR = 'heroScene';
const RESIZE_DEBOUNCE = 32;

export const setupScene = () => {
  const GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader')
    .GLTFLoader;
  const EffectComposer = require('three/examples/jsm/postprocessing/EffectComposer')
    .EffectComposer;
  const ShaderPass = require('three/examples/jsm/postprocessing/ShaderPass')
    .ShaderPass;
  const RenderPass = require('three/examples/jsm/postprocessing/RenderPass')
    .RenderPass;

  mainScene = new THREE.Scene();

  const rootElem = document.getElementById(ROOT_SELECTOR);

  mainCamera = new THREE.PerspectiveCamera(
    20,
    rootElem.clientWidth / rootElem.clientHeight,
    0.1,
    20,
  );
  mainCamera.position.z = 8;

  // Point Lights
  backLight = new THREE.PointLight(0x00aaff, 4, 0);
  backLight.position.set(-5, 5, -5);
  mainScene.add(backLight);

  fillLight = new THREE.PointLight(0x00aaff, 1.7, 0);
  fillLight.position.set(-5, 0, 5);
  mainScene.add(fillLight);

  keyLight = new THREE.PointLight(0xff00ff, 3, 0);
  keyLight.position.set(5, 0, 0);
  mainScene.add(keyLight);

  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(rootElem.clientWidth, rootElem.clientHeight);
  rootElem.appendChild(renderer.domElement);

  // Load 3D Model
  const loader = new GLTFLoader();
  const modelFile = '/static/3d/coll-garvey-face-scan.glb';

  const modelContainer = new THREE.Group();
  mainScene.add(modelContainer);

  loader.load(
    modelFile,
    gltf => {
      modelContainer.add(gltf.scene);
    },
    undefined,
    console.error,
  );

  // ASCII Effect

  const FONT_MAP_SIZE = new THREE.Vector2(64, 64);
  const FONT_CHAR_SIZE = new THREE.Vector2(8, 8);

  const fontLoader = new THREE.TextureLoader();
  const fontFile = '/static/images/font.png';
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

  const finalComposer = new EffectComposer(renderer);

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

  finalComposer.addPass(asciiPass);

  // Handle Window Resize
  resizeRenderer = () => {
    renderer.setSize(rootElem.clientWidth, rootElem.clientHeight);
    mainCamera.aspect = rootElem.clientWidth / rootElem.clientHeight;
    mainCamera.updateProjectionMatrix();
  };
  window.addEventListener('resize', debounce(resizeRenderer, RESIZE_DEBOUNCE));

  const clock = new THREE.Clock();

  function renderScene() {
    const delta = clock.getDelta();

    // modelContainer.rotation.y += delta * 0.5;

    renderer.setRenderTarget(lowResRenderTarget);
    renderer.render(mainScene, mainCamera);

    renderer.setRenderTarget(null);
    finalComposer.render();

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
