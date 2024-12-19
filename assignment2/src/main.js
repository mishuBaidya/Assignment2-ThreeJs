
import { SceneManager } from "./controllers/SceneManager.js";
import { SolarSystem } from "./controllers/SolarSystem.js";
import { CameraControls } from "./controllers/CameraControls.js";
import { Lights } from "./controllers/Lights.js";

// Renderer setup
const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);

// Add Lights
const lights = new Lights(sceneManager.scene);
lights.addAmbientLight();
lights.addPointLight(0,0,0,200);

// Create Solar System
const solarSystem = new SolarSystem(sceneManager.scene);
solarSystem.createSystem();

// Camera Controls
const cameraControls = new CameraControls(sceneManager.camera);
cameraControls.init();

// Start rendering
sceneManager.animate(() => {
    solarSystem.update(); // Update solar system animations
});
