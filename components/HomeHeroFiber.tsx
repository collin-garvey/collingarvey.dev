import React, {Suspense, useEffect} from 'react';
import {Canvas, useLoader} from 'react-three-fiber';
import * as THREE from 'three';
import config from '../data/config';
import styles from './HomeHero.module.css';
const white = new THREE.Color(0xffffff);
let GLTFLoader;

const FaceScan = () => {
  const gltf = useLoader(
    GLTFLoader,
    `${config.staticPath}3d/coll-garvey-face-scan.glb`,
  );
  // @ts-ignore
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
};

const Loader = () => {
  return <span>Loading...</span>;
};

const HomeHeroFiber = () => {
  // useFrame(() => {
  //   // TODO
  // });

  useEffect(() => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    return () => {
      GLTFLoader = null;
    };
  }, []);

  return (
    <Canvas className={styles.threeScene} gl={{alpha: true}}>
      <pointLight position={[-5, 5, -5]} intensity={5} color={white} />
      <pointLight position={[-5, 0, 5]} intensity={7} color={white} />
      <pointLight position={[5, 0, 0]} intensity={3} color={white} />
      <Suspense fallback={null}>
        <FaceScan />
      </Suspense>
    </Canvas>
  );
};

export default HomeHeroFiber;
