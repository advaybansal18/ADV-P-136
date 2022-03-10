status="";
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video.createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}
function modelLoaded(){
    console.log("Cocossd is Initialized");
}