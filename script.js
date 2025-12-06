// THREE.js scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

// Create multiple floating cubes
const cubes = [];
for(let i=0; i<15; i++){
  const geometry = new THREE.BoxGeometry(Math.random()*0.5 + 0.2, Math.random()*0.5 + 0.2, Math.random()*0.5 + 0.2);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffea });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set((Math.random()-0.5)*10, (Math.random()-0.5)*6, (Math.random()-0.5)*10);
  scene.add(cube);
  cubes.push(cube);
}

camera.position.z = 5;

// Animation
function animate(){
  requestAnimationFrame(animate);
  cubes.forEach(cube => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  });
  renderer.render(scene, camera);
}
animate();

// Handle resize
window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
