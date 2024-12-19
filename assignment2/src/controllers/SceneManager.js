import * as THREE from 'three';

class SceneManager {
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.set(0, 5, 20);
    }

    animate(updateCallback) {
        const render = () => {
            requestAnimationFrame(render);
            updateCallback();
            this.renderer.render(this.scene, this.camera);
        };
        render();
    }
}

export { SceneManager };
