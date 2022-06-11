const scene = new THREE.Scene();



// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(200, 500, 300);
scene.add(dirLight);

// Set up camera
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
    cameraWidth / -2, // left
    cameraWidth / 2, // right
    cameraHeight / 2, // top
    cameraHeight / -2, // bottom
    0, // near plane
    1000 // far plane
);
camera.position.set(200, 200, 200);
camera.lookAt(0, 10, 0);

// var helper = new THREE.CameraHelper(dirLight.shadow.camera);
// var helper = new THREE.CameraHelper(camera);
// scene.add(helper);

// const gridHelper = new THREE.GridHelper(80, 8);
// scene.add(gridHelper);

// const axesHelper = new THREE.AxesHelper(80);
// scene.add(axesHelper);

// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const car = createCar();
scene.add(car);

renderer.setAnimationLoop(() => {
    car.rotation.y -= 0.007;
    renderer.render(scene, camera);
});

document.body.appendChild(renderer.domElement);