function setup(){
    canvas = createCanvas(1280, 960);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    stroke(255, 215, 0);
    fill(255, 215, 0);
    rect(30, 30, 640, 30);
    rect(30, 30, 30, 480);
    rect(30, 480, 640, 30);
    rect(640, 30, 30, 480);
    image(video, 200, 140, 320, 240);
    
}
function take_snapshot(){
    save("Framework.png");
}