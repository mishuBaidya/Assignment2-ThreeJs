import * as THREE from 'three';

class Lights {
    constructor(scene) {
        this.scene = scene;
    }

    addAmbientLight() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambientLight);
    }

    addPointLight(x, y, z, intensity) {
        const pointLight = new THREE.PointLight(0xffffff, intensity);
        pointLight.position.set(x, y, z);
        this.scene.add(pointLight);
    }

}

export { Lights };
