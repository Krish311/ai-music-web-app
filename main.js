song=""

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,  0, 600, 500);
}
function preload(){
    song = loadSound("dosti-from-rrr-amit-trivedi-128-kbps-sound.mp3");
}


function start(){
    
    song.start();
}