// Declares a new scene
const scene = new THREE.Scene();

// new gemotry - red cube - 1 1 1 is the size that you want. 
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Create a new material
const material = new THREE.MeshBasicMaterial({ color: 0xE4F20E });
// Now we instantiation the mesh 
const cube = new THREE.Mesh(geometry, material);
// Adds the mesh to the scene
scene.add(cube);

// Have you make the camera to see the mesh 
// Have to declare field of view (FOV) and the apsect ratio - the width and height of the render
const sizes = {
    width: 800,
    height: 600
};
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
// Position the camera
camera.position.z = 3;
scene.add(camera);

// Provide a render so you can see the scene through your camera POV... this will be rendered into a canvas
// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
// Resize the render
renderer.setSize(sizes.width, sizes.height);

// Frist render - provide a scene and a camera
renderer.render(scene, camera);
