nosex=0;
nosey=0;
mariox=325
marioy=325
img="";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img=loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1200,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600,300);
	poseNet = ml5.poseNet(video , modelloaded);
	poseNet.on('pose',gotposes);
}

function draw() {
	game()
	background("#D3D3D3");
	if(nosex<300){
		mariox=mariox-1;
	}
	if(nosex>300){
		mariox=mariox+1;
	}
	if(nosey<150){
		marioy=marioy-1;
	}
	Image(img,mariox,marioy,40,70)
}

function modelloaded(){
	console.log("poseNet model has been loaded correctly")
}

function gotposes(results){
	if(results.length>0){
		console.log(results);
		nosex=results[0].pose.nose.x
		nosey=results[0].pose.nose.y
	}
}




