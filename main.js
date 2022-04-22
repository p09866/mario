function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1200,336);
	video = createCapture(VIDEO);
	video.size(600,300);
	poseNet = ml5.poseNet(video , modelloaded);
	canvas.parent('canvas')
	instializeInSetup(mario);
}

function draw() {
	game()
}

function modelloaded(){
	console.log("poseNet model has been loaded correctly")
}






