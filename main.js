

import * as THREE from '../three.min/three.module.js';
const scene = new THREE.Scene();


const fov = 90;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 2000;


const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 15);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const container = document.getElementById("threejs-container");

container.appendChild(renderer.domElement);
renderer.setClearColor(0xFFFFFF);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("../GPSWeb/Imagges/Chpic.jpg", (texture) => {
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  const circleShape = new THREE.Shape();
  circleShape.moveTo(0, 0); 
  circleShape.absarc(0, 0, 4, 0, Math.PI * 2, false); 
  
  
  const radius = 4;  

  const segments = 50;  
  
  const geometry = new THREE.CircleGeometry( radius, segments );
  const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  
  function animate() {
    requestAnimationFrame(animate);
    
    plane.rotation.y += 0.01; 
    renderer.render(scene, camera); 
  }
  animate(); 
});



// import * as THREE from '../three.min/three.module.js';

// // Scene setup
// const scene = new THREE.Scene();

// // Camera setup
// const fov = 90;
// const aspect = window.innerWidth / window.innerHeight;
// const near = 0.1;
// const far = 2000;
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.set(0, 0, 15);

// // Renderer setup
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// const container = document.getElementById("threejs-container");
// container.appendChild(renderer.domElement);
// renderer.setClearColor(0xDDDDDD);
// // Texture loading
// const textureLoader = new THREE.TextureLoader();
// textureLoader.load('../GPSWeb/Imagges/Chpic.jpg', (texture) => {
//     texture.minFilter = THREE.LinearFilter;
//     texture.magFilter = THREE.LinearFilter;

//     // Circle geometry creation
//     const radius = 4;
//     const segments = 32; // Adjust as needed
//     const shape = new THREE.Shape();
//     shape.moveTo(0, radius);
//     shape.absarc(0, 0, radius, 0, Math.PI * 2, false);

//     // Extrude settings
//     const extrudeSettings = {
//         depth: 1, // Adjust depth as needed
//         bevelEnabled: false, // Disable bevel for a simple extrusion
//     };

//     // Create geometry by extruding the shape
//     const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

//     // Apply UV mapping
//     const uvs = [];
//     const positions = geometry.attributes.position.array;
//     const vertexCount = positions.length / 3;

//     for (let i = 0; i < vertexCount; i++) {
//         const x = positions[i * 3];
//         const y = positions[i * 3 + 1];

//         const u = (x / (2 * radius)) + 0.5;
//         const v = (y / (2 * radius)) + 0.5;

//         uvs.push(u, v);
//     }

//     geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

//     // Material setup with the loaded texture
//     const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

//     // Mesh creation and positioning
//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     // Animation loop
//     function animate() {
//         requestAnimationFrame(animate);

//         // Rotate the mesh along the y-axis
//         mesh.rotation.y += 0.01;

//         // Render the scene with the camera
//         renderer.render(scene, camera);
//     }

//     // Start the animation loop
//     animate();
// });
