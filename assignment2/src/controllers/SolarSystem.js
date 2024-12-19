import * as THREE from 'three';

class SolarSystem {
    constructor(scene) {
        this.scene = scene;
        this.textureLoader = new THREE.TextureLoader();
        this.earthGroup = new THREE.Group();
        this.moonGroup = new THREE.Group();
    }

    createSystem() {
        this.createSun();
        this.createEarth();
        this.createMoon();
        this.addEarthOrbitPath();
    }

    createSun() {
        const sunTexture = this.textureLoader.load(
            "../assets/sun.jpg"
        );
        const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
        this.scene.add(this.sun);
    }

    createEarth() {
        const earthTexture = this.textureLoader.load(
            "../assets/earth.jpg"
        );
        const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
        const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
        this.earth = new THREE.Mesh(earthGeometry, earthMaterial);
        this.earth.position.set(8, 0, 0);
        this.earthGroup.add(this.earth);
        this.sun.add(this.earthGroup); // Earth orbits around the Sun
    }

    createMoon() {
        const moonTexture = this.textureLoader.load(
            "../assets/moon.jpg"
        );
        const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });
        this.moon = new THREE.Mesh(moonGeometry, moonMaterial);
        this.moon.position.set(2, 0, 0);
        this.moonGroup.add(this.moon);
        this.earth.add(this.moonGroup); // Moon orbits around Earth
    }

    addEarthOrbitPath() {
        const orbitGeometry = new THREE.RingGeometry(7.9, 8.1, 64);
        const orbitMaterial = new THREE.MeshBasicMaterial({
            color: 0xaaaaaa,
            side: THREE.DoubleSide,
        });
        const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbit.rotation.x = Math.PI / 2;
        this.scene.add(orbit);
    }

    update() {
        // Earth rotation
        this.earth.rotation.y += 0.01;

        // Moon rotation
        this.moon.rotation.y += 0.01;

        // Earth orbit around Sun
        this.earthGroup.rotation.y += 0.005;

        // Moon orbit around Earth
        this.moonGroup.rotation.y += 0.02;
    }
}

export { SolarSystem };
