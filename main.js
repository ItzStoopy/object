img="";
status1="";
objects=[];
function preload()
{
    img=loadImage('busy city.jpg');
}
function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetecter = ml5.object('cocossd', modelLoaded);
document.getElementById("status").innerHTML= "Status: Detecting Objects or wasting your time";
}

function draw(){
image(img,0,0,640,420);
if (status1 !="")
{
for (i=0; i < objects.length; i++)
{
document,getElementById("status").innerHTML="Status1 :Object Detected baba grill";
fill("#ff800c");
percent = floor(objects[i].confidence*100);
text(objects[i].label+" " + percent+"%", objects[i].x,objects[i].y);
noFill();
stroke("ff800c")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}

function modelLoaded(){
console.log("Model Loaded goofy cat")
status1=true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects= results;
}