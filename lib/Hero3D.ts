import * as THREE from 'three';
import debounce from 'lodash.debounce';

let mainScene: THREE.Scene,
  mainCamera: THREE.PerspectiveCamera,
  backLight: THREE.PointLight,
  fillLight: THREE.PointLight,
  keyLight: THREE.PointLight,
  geometry: THREE.BoxGeometry,
  material: THREE.MeshPhongMaterial,
  cube: THREE.Mesh,
  renderer: THREE.WebGLRenderer,
  reqAnimID: number,
  resizeRenderer: () => void;

const ROOT_SELECTOR = 'heroScene';
const RESIZE_DEBOUNCE = 32;

export const setupScene = () => {
  mainScene = new THREE.Scene();

  const rootElem = document.getElementById(ROOT_SELECTOR);

  mainCamera = new THREE.PerspectiveCamera(
    20,
    rootElem.clientWidth / rootElem.clientHeight,
    0.1,
    20,
  );
  mainCamera.position.z = 2;

  // Point Lights
  backLight = new THREE.PointLight(0x00aaff, 3, 20);
  backLight.position.set(-5, 5, -5);
  mainScene.add(backLight);

  fillLight = new THREE.PointLight(0x00aaff, 0.7, 20);
  fillLight.position.set(-5, 0, 5);
  mainScene.add(fillLight);

  keyLight = new THREE.PointLight(0xff00ff, 2, 20);
  keyLight.position.set(5, 0, 0);
  mainScene.add(keyLight);

  // Placeholder 3D Cube
  geometry = new THREE.BoxGeometry();
  material = new THREE.MeshPhongMaterial({color: 0xffffff});

  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(rootElem.clientWidth, rootElem.clientHeight);
  rootElem.appendChild(renderer.domElement);

  // Load 3D Model
  const GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader')
    .GLTFLoader;
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

    modelContainer.rotation.y += delta * 0.5;

    renderer.render(mainScene, mainCamera);

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
  geometry.dispose();
}
