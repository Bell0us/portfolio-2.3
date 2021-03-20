const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereBufferGeometry(1, 64, 64);

const texture = new THREE.TextureLoader().load('../img/moon_1024.jpg')
const material = new THREE.MeshBasicMaterial({
    color: 0x141414,
    map: texture,
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
};

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

animate();