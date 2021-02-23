
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

function circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    
    this.draw=function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0, Math.PI *2,false);
        ctx.strokeStyle='#b28fc7';
        ctx.stroke();   
    }
    this.update= function(){
        if(this.x+ this.radius > innerWidth || this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+ this.radius > innerHeight || this.y-this.radius<0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;     
        this.draw(); 
    }
}
var circleArray=[];

for(var i=0;i<50;i++){
    var radius=30;
    var x= Math.random()* (innerWidth-radius*2)+radius;
    var y= Math.random()* (innerHeight-radius*2)+radius;
    var dx=(Math.random()-0.5)*4;
    var dy=(Math.random()-0.5)*4;
    circleArray.push(new circle(x,y,dx,dy,radius)); 
}
var circle=new circle(200,200);
circle.draw();

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, innerWidth,innerHeight);
    
ctx.fillStyle = "#ebe8d1";
ctx.fillRect(0, 0, canvas.width, canvas.height);// background grey


ctx.fillStyle = "#ffb359";
ctx.fillRect(275,40,500,360);//rectangel orange
ctx.stroke();

ctx.font = 'bold 50px Cursive';
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.strokeText("Doraemon", 400, 100);// font Doraemon




ctx.beginPath();
ctx.fillStyle="#1fb3eb";
ctx.arc(525, 270, 110, 0.8, Math.PI * 0.8, true); // Outer face circle
ctx.moveTo(100, 75);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(525, 293, 100, 0.6, Math.PI * 0.8, true); // inner face circle
ctx.moveTo(100, 75);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle='#ff4d0d';
ctx.fillRect(436,335,180,20);// red tie 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.ellipse(500, 200,25, 17, 8, 0, Math.PI * 2);//left eye outline 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="black";
ctx.ellipse(508, 200,10, 7, 8, 0, Math.PI * 2);//left eye inline black
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.ellipse(511, 200,5, 2.5, 8, 0, Math.PI * 2);//left eye inline white 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.ellipse(535, 200,25, 17, 8, 0, Math.PI * 2);//right eye outline
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="black";
ctx.ellipse(527, 200,10, 7, 8, 0, Math.PI * 2);//right eye inline black
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.ellipse(523, 200,5, 2.5, 8, 0, Math.PI * 2);//right eye inline white 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#c82124";
ctx.arc(516, 222, 8, 50, Math.PI * 2, true);//nose outline red 
ctx.moveTo(80,0);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(519,220, 3, 50, Math.PI * 2, true); //nose inline white
ctx.moveTo(100, 75);
ctx.fill();

ctx.beginPath();
ctx.moveTo(516,228);// nose line
ctx.lineTo(516,310);
ctx.stroke();

ctx.beginPath();
ctx.arc(520, 260, 55, 2.8, Math.PI * 0.1, true); // mouth
ctx.moveTo(100, 75);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(506,250);// mouth hair left
ctx.lineTo(450,240);
ctx.moveTo(506,265);
ctx.lineTo(435,265);
ctx.moveTo(506,280);
ctx.lineTo(440,295);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(530,250);// mouth hair right
ctx.lineTo(590,240);
ctx.moveTo(530,265);
ctx.lineTo(599,265);
ctx.moveTo(530,280);
ctx.lineTo(610,295);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="#fff205";
ctx.arc(519, 345, 15, 0, Math.PI * 2, true); // yellow bell
ctx.moveTo(100, 75);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(519, 349, 4, 0, Math.PI * 2, true); // yellow bell black
ctx.moveTo(100, 75);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(519,349);// yellow bell black line
ctx.lineTo(519,359);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(505,339);// yellow bell black inner line
ctx.lineTo(533,339);

ctx.moveTo(505,342);// yellow bell black inner line
ctx.lineTo(533,342);
ctx.stroke();
    
    
    for(var i=0; i< circleArray.length;i++){
        circleArray[i].update();       
    }
    
}
animate();







