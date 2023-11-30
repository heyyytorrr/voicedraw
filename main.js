x=0;
y=0;

drawCircle="";
drawRect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML="O Sistema está ouvindo. por favor, Fale";
    recognition.start();
}

recognition.onresult=function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="A Fala foi reconhecida como: "+content;

    if(content=="círculo") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Desenhando um Círculo";
        drawCircle="set";
    }

    if(content=="retângulo") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Desenhando um Retângulo";
        drawRect="set";
    }
}

function setup() {
    Canvas=createCanvas(900,600);
}

function draw() {
if(drawCircle=="set") {
    radius=Math.floor(Math.random()*100)
    circle(x,y,radius);
    document.getElementById("status").innerHTML="Círculo Desenhado";
    drawCircle="";
}

if(drawRect=="set") {
    rect(x,y,70, 50);
    document.getElementById("status").innerHTML="Retângulo Desenhado";
    drawRect="";
}
}