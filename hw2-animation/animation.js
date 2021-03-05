

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var images =[];
images.length=13;

//adding all pictures into a array.
for( var i=1; i< images.length;i++){
    images[i]=new Image();
    images[i].src='tile'+i.toString()+'.png';

   
   
}

  ctx.fillStyle =  "#ffd9b3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);// set up background to peach color 


  
var i=1;
setInterval(function(){
    i++;
    if(i>=13){
        i=1;
    }

    //keep loop over these 13 pictures in a interval rate as 80.
    ctx.drawImage(images[i],300,100,500,500);
    
    //the takling bubble from character A.
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(220, 110, 120, 80);
      
    ctx.beginPath();
    ctx.moveTo(385, 230);
    ctx.lineTo(220, 105);
    ctx.lineTo(220, 125);
    ctx.fill();
    ctx.font = '12px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('How are you today?', 235, 150);
    
     //the takling bubble from character B.
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(630, 320, 120, 70);
    
    ctx.beginPath();
    ctx.moveTo(700, 410);
    ctx.lineTo(630, 315);
    ctx.lineTo(630, 345);
    ctx.fill();
    
    ctx.font = '12px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('I am so happy today!', 640, 350);

    
    

},80);
