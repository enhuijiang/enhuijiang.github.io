

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var images =[];
images.length=13;

for( var i=1; i< images.length;i++){
    images[i]=new Image();
    images[i].src='tile'+i.toString()+'.png';

   
   
}

  ctx.fillStyle =  "#ffd9b3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);// background peach 

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(220, 110, 120, 80);
   
var i=1;
setInterval(function(){
    i++;
    if(i>=13){
        i=1;
    }


    ctx.drawImage(images[i],300,100,500,500);
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
    /*var j=220;
    while(j<6){
        j++;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(220, 110, 120, 80);
        
    }
     
     var j=220;
    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
        
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(j, 110, 120, 80);
        j=j+100;
    }*/
    
    

},80);
