nose_x=0;
nose_y=0;
leftwrist_x=0;
rightwrist_x=0;
 diffrence=0;
function preload(){}
function setup(){
   webcam= createCapture(VIDEO);
   webcam.size(450,450);
   canvas=createCanvas(500,500);
   canvas.position(560,150);
posenet= ml5.poseNet(webcam,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
    background("#5595a0");
    fill("#18dbcd");
    stroke("#18dbcd");
    
    square(nose_x,nose_y,diffrence);
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function gotPoses(results){        //console.log(results)

    if(results.length>0){
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y;
        console.log("nose_x="+nose_x);
        console.log("nose_y="+nose_y);
        leftwrist_x=results[0].pose.leftWrist.x;
        rightwrist_x=results[0].pose.rightWrist.x;
        diffrence=leftwrist_x-rightwrist_x;

    }
}