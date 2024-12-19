class CameraControls {
    constructor(camera) {
        this.camera = camera;
        this.moveSpeed = 0.2;
        this.zoomSpeed = 0.2;
    }

    init() {
        window.addEventListener("keydown", (event) => {
            switch (event.code) {
                case "ArrowUp": // Move camera up
                    this.camera.position.y += this.moveSpeed;
                    break;
                case "ArrowDown": // Move camera down
                    this.camera.position.y -= this.moveSpeed;
                    break;
                case "ArrowLeft": // Move camera left
                    this.camera.position.x -= this.moveSpeed;
                    break;
                case "ArrowRight": // Move camera right
                    this.camera.position.x += this.moveSpeed;
                    break;
                case "PageUp": // Zoom in
                    this.camera.position.z -= this.zoomSpeed;
                    break;
                case "PageDown": // Zoom out
                    this.camera.position.z += this.zoomSpeed;
                    break;
            }
        });
    }
}

export { CameraControls };
