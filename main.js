song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 600,500);

    Fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        if(rightWristY >0 && rightWristY <= 100)
        {
            document.getElementById("speed").innerHTML = speed = "0.5x";
            song.rate(0.5);
        }
        else if(rightWristY >100 && rightWristY <= 200)
        {
            document.getElementById("speed").innerHTML = speed = "1x";
            song.rate(1);
        }
        else if(rightWristY >200 && rightWristY <= 300)
        {
            document.getElementById("speed").innerHTML = speed = "1.5x";
            song.rate(1.5);
        }
        else if(rightWristY >300 && rightWristY <= 400)
        {
            document.getElementById("speed").innerHTML = speed = "2x";
            song.rate(2);
        }
        else if(rightWristY >400)
        {
            document.getElementById("speed").innerHTML = speed = "2.5x";
            song.rate(2.5);
        }

        if(scoreleftWrist > 0.2)
        {
            circle(rightWristX, rightWristY, 20);
            InNumberleftWristY = Number(leftWristY);
            new_leftWristY = floor(InNumberleftWristY *2);
            leftWristY_divide_1000 = new_leftWristY/1000;
            document.getElementById("volume").innerHTML = " volume = " + leftWristY_divide_1000;
            song.setVolume(leftWristY_divide_1000);
        }
    }
}
function preload(){
    song = loadSound("Jaan Hai Meri(PagalWorld.com.se).mp3")
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("PoseNet Is Intialized");

}
function gotPoses(results){
    if(results.length > 0);
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristy );

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristy );
    }

}