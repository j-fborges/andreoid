


 import * as THREE from '../three.js/build/three.module.js';
 import { GLTFLoader } from '../three.js/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from '../three.js/examples/jsm/loaders/RGBELoader.js';


//-------------------------------------------------------------------------------vvvvvv--------SLIDES-------------vvvvvvvvvvvvvvvvvvvvv----------------------------------




//--------------------------------------------------------------------------------- VARIAVEL "MOBILE" CHECA SE O NAVEGADOR É MOBILE-------------------------------------
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

var mobile = window.mobileCheck();
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// FPSCOUNTER--------------------------------------------- APAGAR QUANDO TUDO ESTIVER PRONTO--------- FPSCOUNTER (FPS TEM QUE ESTAR EM 60)---------------------------
//(function(){  let trgt = document.getElementById("ID3D"); var script=document.createElement('script');script.onload=function(){var stats=new Stats();trgt.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';trgt.appendChild(script);})()
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

        var model = new THREE.Scene();
        var cabeça, corpo, braçoEsquerdo, braçoDireito, maoEsquerda, maoDireita, vidro, rosto, olhoEsquerdo, olhoDireito, boca, baseAntena, baseCaboAntena, caboAntena, esferaAntena;
        
        
        var spotLight, spotLight2, spotLight3, spotLight4;
        
        const light = new THREE.AmbientLight( 0x404040, 4.0 );
        
        var clock = new THREE.Clock();

        let loc = document.getElementById("ID3D");
        let loc1 = document.getElementById("modelControls");

        let fHeight = loc.offsetHeight;
        let fWidth = loc.offsetWidth;
        let maxObjWidth = 800;

        let winSize = window.innerWidth;
        let winSizeP;
        let winSizeF;

        if(loc.offsetWidth >= maxObjWidth){
          fWidth = maxObjWidth;
        }
        
        const loader = new GLTFLoader();
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 40, fWidth/ fHeight, 10, 30 );
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'high-performance' });
        var animPlayable = true;
        var timePoint;
        var action2, clips;
        
        if(mobile == true){ renderer.precision = "lowp"; } else { renderer.precision = "highp"; }

        renderer.setClearColor(0xffffff, 0);
        var mixer;



        
        



        renderer.setSize( fWidth*1.6, fHeight*1.6, window.devicePixelRatio );
        renderer.setPixelRatio(devicePixelRatio);


        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.95;
				renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.physicallyCorrectLights = true;
        renderer.shadowMap.enabled = true;
        
        
        const backLight = new THREE.AmbientLight( 0x027a88, 1.5 ); // soft white light
        scene.add( backLight );

        const texLoader = new THREE.TextureLoader();
        const shadowTexture = texLoader.load('./shadow.png');
        const shadowGeo = new THREE.PlaneGeometry(1, 1);

        const shadowMat = new THREE.MeshBasicMaterial({
          map: shadowTexture,
          transparent: true,  
          depthWrite: false,    
        });
        
        const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
        shadowMesh.position.y = 0.001;  // so we're above the ground slightly
        shadowMesh.rotation.x = Math.PI * -.5;

        shadowMesh.scale.set(2,2,2);
        



        const hdrEquirect = new RGBELoader().load( './park_parking_1k.hdr', function () {

					hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;

					
				} );
        


        

        const materialVidroLOW = new THREE.MeshPhongMaterial( {
					color: 0x70d9fc,
          transparent: true,
          emissive: 0x000000,
          reflectivity: 1.0,
          combine: THREE.MultiplyOperation,
	
          envMap: hdrEquirect,
					opacity: 0.0001,
					side: THREE.FrontSide,
				} );


        
        const materialVidro = new THREE.MeshPhysicalMaterial( {
					color: 0x787878,
					metalness: 0.6,
					roughness: 0.0,
          clearcoat: 0.10,
          thickness: 0.26,
          sheen: 0.100,
          sheenRoughness: 0.0,
          sheenColor: 0x0296a6,
          
          
          reflectivity: 1.0,
					ior: 1.0,
		
					envMap: hdrEquirect,
          
					envMapIntensity: 0.10,
					transmission: 1.0, 
					specularIntensity: 0.10,
					specularColor: 0x21417f,
					opacity: 0.3,
					side: THREE.FrontSide,
					transparent: true
				} );
      


        const materialRostoFundoLOW = new THREE.MeshLambertMaterial( {
					color: 0xffffff,

          emissive: 0xffffff,
					emissiveIntensity: 0.0,
					opacity: 1.0,
					side: THREE.FrontSide,
				} );
        
        
        
        const materialRostoFundo = new THREE.MeshPhysicalMaterial( {
          color: 0xffffff,
          emissive: 0xffffff,
          emissiveIntensity: 20.2,

					metalness: 0.0,
					roughness: 1.0,

					side: THREE.FrontSide,
					
				} );
        
        
        const materialRostoLOW = new THREE.MeshLambertMaterial( {
					color: 0xe19300,

          emissive: 0xe19300,
					emissiveIntensity: 1.0,
					opacity: 1.0,
					side: THREE.FrontSide,
				} );
        
        
        const materialRosto = new THREE.MeshPhysicalMaterial( {
          color: 0xe4b101,
          emissive: 0xffaa0d,
          emissiveIntensity: 1.2,

					metalness: 0.0,
					roughness: 1.0,

					side: THREE.FrontSide,
					
				} );
        
        
        
        const materialCorpo = new THREE.MeshPhysicalMaterial( {
          color: 0x0562d3,

					metalness: 0.65,
					roughness: 0.55,
          ior: 0.3,
          reflectivity: 0.0,
          sheen: 0.8,
          sheenRoughness: 0.3,
          sheenColor: 0x0296a6,
          clearcoat: 0.0,
          clearcoatRoughness: 0.9,
          specularIntensity: 1.0,
					specularColor: 0xff3333,

					envMapIntensity: 1.0,
					side: THREE.FrontSide,
					
				} );
        

        
        const materialCorpoLOW = new THREE.MeshPhongMaterial( {
					color: 0x022653,
					specular: 0x0157f8,
					reflectivity: 0.94,
          shininess: 0.50,
          combine: THREE.AddOperation,

					side: THREE.FrontSide,
					
				} );
        
        
        const materialBraço = new THREE.MeshPhysicalMaterial( {
          color: 0xff4d00,

					metalness: 0.0,
					roughness: 0.35,
          ior: 0.3,
          reflectivity: 1.0,
          sheen: 1.0,
          sheenRoughness: 0.4,
          sheenColor: 0x0296a6,
          clearcoat: 0.7,
          clearcoatRoughness: 0.4,
          specularIntensity: 1.0,
					specularColor: 0xff3333,

					envMapIntensity: 1.0,
					
					side: THREE.FrontSide,
					
				} );
        
        
        const materialBraçoLOW = new THREE.MeshPhongMaterial( {
					color: 0xff4d00,
					specular: 0xfff31c,
					reflectivity: 0.0,
          shininess: 0.30,
          combine: THREE.AddOperation,

					side: THREE.FrontSide,
					
				} );
        
        
        const materialMao = new THREE.MeshPhysicalMaterial( {
          color: 0x51e4ff,
					//color: 0x208fff,
          //color: 0x0538c0,
          //color: 0x0c96e9,
					metalness: 0.6,
					roughness: 0.85,
          ior: 0.3,
          reflectivity: 1.0,
          sheen: 1.0,
          sheenRoughness: 0.9,
          sheenColor: 0x0296a6,
          clearcoat: 1.0,
          clearcoatRoughness: 0.0,
          specularIntensity: 1.0,
					specularColor: 0xff3333,

					envMapIntensity: 1.0,
					
					side: THREE.FrontSide,
					
				} );
        

        const materialMaoLOW = new THREE.MeshPhongMaterial( {
					color: 0x208fff,
					specular: 0xffffff,
					reflectivity: 0.94,
          shininess: 0.50,
          combine: THREE.AddOperation,


					side: THREE.FrontSide,
					
				} );

        
        const materialCabeça = new THREE.MeshPhysicalMaterial( {
          color: 0x7d7039,
					//color: 0x208fff,
          //color: 0x0538c0,
          //color: 0x0c96e9,
					metalness: 0.0,
					roughness: 0.75,
          ior: 0.3,
          reflectivity: 0.0,
          sheen: 1.0,
          sheenRoughness: 0.3,
          sheenColor: 0x0296a6,
          clearcoat: 0.99,
          clearcoatRoughness: 0.36,
          specularIntensity: 1.0,
					specularColor: 0xff3333,

					envMapIntensity: 1.0,
					
					side: THREE.FrontSide,
					
				} );
        

        const materialCabeçaLOW = new THREE.MeshPhongMaterial( {
					color: 0x7d7039,
					specular: 0xffffff,
					reflectivity: 0.94,
          shininess: 0.99,
          combine: THREE.AddOperation,

					side: THREE.FrontSide,
					
				} );

        
        const materialCabo = new THREE.MeshPhysicalMaterial( {
          color: 0xff922f,
					//color: 0x208fff,
          //color: 0x0538c0,
          //color: 0x0c96e9,
					metalness: 0.6,
					roughness: 0.35,
          ior: 0.3,
          reflectivity: 1.0,
          sheen: 1.0,
          sheenRoughness: 0.4,
          sheenColor: 0x0296a6,
          clearcoat: 0.7,
          clearcoatRoughness: 0.4,
          specularIntensity: 1.0,
					specularColor: 0xff3333,

					envMapIntensity: 1.0,
					
					side: THREE.FrontSide,
					
				} );
        

        const materialCaboLOW = new THREE.MeshPhongMaterial( {
					color: 0xe16b00,
					specular: 0xffffff,
					reflectivity: 0.0,
          shininess: 0.70,
          combine: THREE.AddOperation,

					side: THREE.FrontSide,
					
				} );

        
        const materialEsfera = new THREE.MeshPhysicalMaterial( {
          color: 0x006b9f,
					//color: 0x208fff,
          //color: 0x0538c0,
          //color: 0x0c96e9,
					metalness: 0.2,
					roughness: 0.25,
          ior: 0.3,
          reflectivity: 0.0,
          sheen: 1.0,
          sheenRoughness: 0.9,
          sheenColor: 0x0296a6,
          clearcoat: 0.0,
          clearcoatRoughness: 0.8,
          specularIntensity: 1.0,
					specularColor: 0xff3333,

					envMapIntensity: 1.0,

					side: THREE.FrontSide,
					
				} );
        

        const materialEsferaLOW = new THREE.MeshPhongMaterial( {
					color: 0x007570,
					specular: 0x18ddf3,
					reflectivity: 0.0,
          shininess: 0.99,
          combine: THREE.AddOperation,
					side: THREE.FrontSide,
					
				} );

        

        


        loc.appendChild( renderer.domElement );
       
        
        
        //loader.load( "andreoidBlender.glb", function ( gltf ) {
          loader.load( "./andreoidBlender_WEB_1.glb", function ( gltf ) {
          model = gltf.scene;
          const scenes = gltf.scenes;
          
          console.log(model);
        

         vidro = model.children[0].children[4].children[2];
         rosto = model.children[0].children[4].children[0];
         olhoDireito = model.children[0].children[4].children[0].children[1];
         olhoEsquerdo = model.children[0].children[4].children[0].children[2];
         boca = model.children[0].children[4].children[0].children[0];
         corpo = model.children[0];
         cabeça = model.children[0].children[4];
         braçoDireito = model.children[0].children[2];
         braçoEsquerdo = model.children[0].children[3];
         maoDireita = model.children[0].children[2].children[0];
         maoEsquerda = model.children[0].children[3].children[0];
         baseAntena = model.children[0].children[4].children[1];
         baseCaboAntena = model.children[0].children[4].children[1].children[0];
         caboAntena = model.children[0].children[4].children[1].children[0].children[0];
         esferaAntena = model.children[0].children[4].children[1].children[0].children[0].children[0];


         model.children[1].add(shadowMesh);
            
         console.log(model);
         spotLight = new THREE.SpotLight( 0x096bff, 50.0, 0, 0.3, 0.35,  1.1 );

				
				spotLight.position.set( 10, 10+4, 20-4 );
        spotLight.target = corpo;
				spotLight.castShadow = true;

        //spotLight.shadow.mapSize.width = 1024;
        //spotLight.shadow.mapSize.height = 1024;
        
        spotLight.shadow.mapSize.width = 512;
        spotLight.shadow.mapSize.height = 512;

        spotLight.shadow.camera.near = .01;
        spotLight.shadow.camera.far = 50;
        spotLight.shadow.camera.fov = 60;

				scene.add( spotLight );

        spotLight2 = new THREE.SpotLight( 0xf22400, 80.0, 40, 0.2, 0.3,  1.2 );

				
				spotLight2.position.set( -5, 15+4, 10-4 );
        spotLight2.target = cabeça;
				spotLight2.castShadow = true;

        //spotLight2.shadow.mapSize.width = 1024;
        //spotLight2.shadow.mapSize.height = 1024;
        spotLight2.shadow.mapSize.width = 512;
        spotLight2.shadow.mapSize.height = 512;
        
        spotLight2.shadow.camera.near = .01;
        spotLight2.shadow.camera.far = 50;
        spotLight2.shadow.camera.fov = 60;

				scene.add( spotLight2 );


        spotLight3 = new THREE.SpotLight( 0xffaa0d, 16.0, 2, 0.5, 1.00,  2 );

				
				spotLight3.position.set( -.3, 0.1, 0 );
        rosto.add(spotLight3);
        spotLight3.target = vidro;
				spotLight3.castShadow = true;

        //spotLight3.shadow.mapSize.width = 1024;
        //spotLight3.shadow.mapSize.height = 1024;
        spotLight3.shadow.mapSize.width = 512;
        spotLight3.shadow.mapSize.height = 512;
        
        spotLight3.shadow.camera.near = .01;
        spotLight3.shadow.camera.far = 50;
        spotLight3.shadow.camera.fov = 60;

				//scene.add( spotLight3 );

        spotLight4 = new THREE.SpotLight( 0xeaaf00, 100.0, 40, 0.2, 0.8,  1.0 );

				
				spotLight4.position.set( 25, 3+4, -9-4 );
        spotLight4.target = baseCaboAntena;
				spotLight4.castShadow = true;

        //spotLight4.shadow.mapSize.width = 2048;
        //spotLight4.shadow.mapSize.height = 2048;
        spotLight4.shadow.mapSize.width = 512;
        spotLight4.shadow.mapSize.height = 512;
        
        spotLight4.shadow.camera.near = .01;
        spotLight4.shadow.camera.far = 50;
        spotLight4.shadow.camera.fov = 60;

				scene.add( spotLight4 );

          
          vidro.castShadow = true;
          //vidro.receiveShadow = true;
         cabeça.castShadow = true;
         cabeça.receiveShadow = true;
         corpo.receiveShadow = true;
         corpo.castShadow = true;
         braçoDireito.castShadow = true;
         braçoDireito.receiveShadow = true;
         braçoEsquerdo.castShadow = true;
         braçoEsquerdo.receiveShadow = true;
         maoEsquerda.castShadow = true;
         maoEsquerda.receiveShadow = true;
         maoDireita.castShadow = true;
         maoDireita.receiveShadow = true;
         baseAntena.castShadow = true;
         baseAntena.receiveShadow = true;
         baseCaboAntena.castShadow = true;
         baseCaboAntena.receiveShadow = true;
         caboAntena.castShadow = true;
         caboAntena.receiveShadow = true;
         esferaAntena.castShadow = true;
         esferaAntena.receiveShadow = true;
         

          if(mobile==true){

            vidro.material = materialVidroLOW;
            rosto = materialRostoFundoLOW;
            olhoEsquerdo.material = materialRostoLOW;
            olhoDireito.material = materialRostoLOW;
            boca.material = materialRostoLOW;
            
            cabeça.material = materialCabeçaLOW;
            corpo.material = materialCorpoLOW;
            braçoDireito.material = materialBraçoLOW;
            braçoEsquerdo.material = materialBraçoLOW;

            maoDireita.material = materialMaoLOW;
            maoEsquerda.material = materialMaoLOW;
            baseAntena.material = materialMaoLOW;
            baseCaboAntena.material = materialMaoLOW;

            caboAntena.material = materialCaboLOW;
            esferaAntena.material = materialEsferaLOW;

          } else { 

            vidro.material = materialVidro;
            rosto.material = materialRostoFundo;
            olhoEsquerdo.material = materialRosto;
            olhoDireito.material = materialRosto;
            boca.material = materialRosto;
            
            cabeça.material = materialCabeça;
            corpo.material = materialCorpo;
            braçoDireito.material = materialBraço;
            braçoEsquerdo.material = materialBraço;

            maoDireita.material = materialMao;
            maoEsquerda.material = materialMao;
            baseAntena.material = materialMao;
            baseCaboAntena.material = materialMao;

            caboAntena.material = materialCabo;
            esferaAntena.material = materialEsfera;
            
          }
          

         
         

          
          

         //model.position.x = -4;
         model.position.z = +2;
         //model.rotation.y -= 2.7;
         model.rotation.y -= 1.9;
	        scene.add( model );
          

            const anim = gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;

           
            console.log(anim);
            console.log(model);
            console.log(scenes);
            

            mixer = new THREE.AnimationMixer( model );
            clips = gltf.animations;

            
            const clip = THREE.AnimationClip.findByName( clips, 'iddleFloat' );
            THREE.AnimationUtils.makeClipAdditive( clip );
            const action = mixer.clipAction( clip );
            action.loop = THREE.LoopRepeat;
            action.play();


            const clip2 = THREE.AnimationClip.findByName( clips, 'iddleWonder1' );
            THREE.AnimationUtils.makeClipAdditive( clip2 );

            action2 = mixer.clipAction( clip2 );
            action2.loop = THREE.LoopOnce;
            action2.play();
            action.clampWhenFinished = true;


            

            
            action2.setEffectiveWeight(1.0);

            const clip3 = THREE.AnimationClip.findByName( clips, 'piscar1' );
            THREE.AnimationUtils.makeClipAdditive( clip3 );

            const action3 = mixer.clipAction( clip3 );
            action3.loop = THREE.LoopRepeat;
            action3.play();
            action3.setEffectiveWeight(1.0);
           


            
            
            //console.log(action);
            

        },
        
        function (xhr) {

            console.log(( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
         function ( error ) {

	      console.error( 'errorAAAAAAA' );

        } );
        

        


scene.add( light );

//camera.position.x = 4;
//camera.lookAt(-5,-2,1);
camera.fov = +1*35;


//----------------------------------------------------------APAGAR ABAIXO QUANDO O ANGULO E A POSICAO DA IMAGEM ESTIFEREM DEFINIDAS-----------------  

import { OrbitControls } from '../three.js/examples/jsm/controls/OrbitControls.js';
const controls = new OrbitControls(camera, renderer.domElement );
const gridHelper = new THREE.GridHelper( 100, 100 );



scene.add( gridHelper );


 
  
camera.position.z = 15.84;
camera.position.y = 7.45;
camera.position.x = 4.17;
camera.far = 100;
camera.updateProjectionMatrix()

console.log(camera);
function animate() {
  requestAnimationFrame( animate );


  //----------------------------------------------------------APAGAR AS DUAS PROXIMAS LINHAS QUANDO ESTIVER TUDO PRONTO------------------------------
  controls.update();
 // if( panelSettings.cameraLookAt == true) { camera.lookAt(panelSettings.x,panelSettings.y,panelSettings.z); }
  //-------------------------------------------------------------------------------------------------------------------------------------------------

  

  
  
  

  const dt = clock.getDelta();
  
  

  
  if (mixer !== null) {
    mixer.update(dt);
    
  };

  let tar = (model.children[0].position.y);
  
  
    shadowMesh.material.opacity = THREE.MathUtils.lerp(.9, .05, tar);
   

    

    
    if(animPlayable == true && action2.isRunning() == false){
      timePoint = clock.elapsedTime + (Math.random() * 16) + 8;
      
      animPlayable = false;
      
    }
  
    if(clock.elapsedTime > timePoint && action2.isRunning() == false){
   
      action2.stop();
      action2.play();
      animPlayable = true;
    }

    //model.children[1].rotation.y -= 0.005;
    winSizeP = window.innerWidth;

    window.onresize = () => {

      winSize = window.innerWidth;

      winSizeF = winSizeP - winSize;

      if(loc.offsetWidth >= maxObjWidth){
        fWidth = maxObjWidth;
      }

      camera.aspect = fWidth/ fHeight;
      
      renderer.setSize(fWidth*1.7, fHeight*1.7, window.devicePixelRatio);
      camera.position.x += (winSizeF*0.04);
      //camera.rotation.x += (winSizeF*0.04);
 

      camera.updateProjectionMatrix();
  }
   
    
  
  renderer.render( scene, camera );
  
}
animate();


//-----------------------------------------------------------------------------------------------^^^^--THREE.js--^^^^----------------------------------------------------------^-
