import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import office from '../models/office.glb';

class Application {

    loader: GLTFLoader;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;

    constructor(){

        this.loader = new GLTFLoader();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild(this.renderer.domElement );

        // const widthFloor = 9;
        // const heightFloor = 9;
        // const geometryFloor = new THREE.PlaneBufferGeometry(widthFloor, heightFloor);
        // const material = new THREE.MeshBasicMaterial({
        //     map: loader.load('src/images/wall.jpg'),
        // });
        // const floor = new THREE.Mesh( geometryFloor, material );
        // scene.add(floor);

        // const geometry = new THREE.BoxGeometry();
        // const cube = new THREE.Mesh( geometry, material );
        // scene.add(cube);

        const light = new THREE.AmbientLight( 0x404040, 10 ); // soft white light
        this.scene.add(light);

        this.camera.position.z = 5;
        this.camera.position.y = 2;

        this.loader.load(office, (gltf) => {

            this.scene.add(gltf.scene);

        }, undefined, ( error ) => {

            console.error( error );

        } );


        this.animate();

        // this.renderer.render(this.scene, this.camera );
    }

    animate(){

        requestAnimationFrame(this.animate.bind(this) );
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);

    }
}

new Application();
