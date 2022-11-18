diferenca=0;
pulsoEsquerdo=0;
pulsoDireito=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(800, 90);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
function gotPoses(results) {
if (results.length>0){
    console.log(results);
    
    console.log(results);
   
pulsoEsquerdo=results[0].pose.leftWrist.x;
pulsoDireito=results[0].pose.rightWrist.x;
diferenca=floor(pulsoEsquerdo-pulsoDireito);
console.log(diferenca);
}
}
function modelLoaded() {
    console.log("poseNet foi inicializado");
}
function draw()
{
    background('#eead2d');
    document.getElementById("text_side").innerHTML="A largura e a altura serão "+diferenca+"px";
    textSize(diferenca);
    fill('#000000');
    stroke('#000000');
    text('Miguel', 50, 400);
}