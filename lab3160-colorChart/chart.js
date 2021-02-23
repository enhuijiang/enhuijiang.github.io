
var fruit=[
    { name:"Apple", quantity:20,color:"red" },
    { name:"Orange", quantity:10,color:"orange" },
    { name:"Banana", quantity:15,color:"yellow" },
    { name:"Kiwi", quantity:3,color:"green" },
    { name:"Blueberry", quantity:5,color:"blue" },
    { name:"Grapes", quantity:8,color:"purple" }
];


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

    
     var draw =function (){
    
        var x=0;
        for (var i=0;i<fruit.length;i++){
  
        ctx.fillStyle = fruit[i].color;
        ctx.fillRect(x,500 - 20 * fruit[i].quantity, 100,500);
        ctx.stroke();
        
        ctx.font = ' 20px arial';
        ctx.fillStyle = "black";
        ctx.fillText(fruit[i].name,5+x,470);
        ctx.fillText(fruit[i].quantity, 5+x,490);
    
        x+=100;

    }
};

draw();
    
    
 





