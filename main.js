song_dj_sound = "";
Stay_song="";
leftWristX= 0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreRightWrist=0;
scoreLeftWrist=0;
song_name = "";
song_dj_name = "";
song_stay_name= "";

function preload()
{
    song_dj_sound= loadSound("music.mp3");
    Stay_song= loadSound("ZEDD_Stay.mp3")
}

function setup() {
    canvas =  createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('poses', gotPoses);
}

function modelloaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    image(video,0,0,600,500);

    fill("teal");
    stroke("teal");

    song_dj_name= song_dj_sound.isPlaying();
    console.log(song_name);

    

    if(scoreLeftWrist > 0.2){

   
    circle(leftWristX,leftWristY,20);
    Stay_song.stop();
        if(song_name== false){
            song_dj_sound.play();
        }
        else{
            console.log("Song Name: DJ SONG");
            document.getElementById("song").innerHTML = "Song name = Dj sound"
        }
}

if(scoreLeftWrist > 0.2){

   
    circle(rightWristX,rightWristY,20);
    song_dj_sound.stop();
        if(song_name== false){
            Stay_song.play();
        }
        else{
            console.log("Song Name: Stay");
            document.getElementById("song").innerHTML = "Song name = Stay"
        }
}
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    console.log("song is played");
}

function gotPoses(results) 
{
    if(results.length > 0) {
console.log(results);

scoreRightWrist= results[0].pose.keypoints[10].score;
scoreLeftWrist=results[0].pose.keypoints[9].score;
console.log("scoreleftwrist= "+ scoreLeftWrist);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("LeftWristX= " + leftWristX + "LeftWristY= " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("RightWristX= " + rightWristX + "RightWristY= " + rightWristY);

    }
}