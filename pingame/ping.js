class Vec
{
    
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}

class Rect
    {
        constructor(w,h){
            this.pos = new Vec;
            this.size = new Vec(w,h);
        }
    }

class Ball extends Rect
{
    constructor(){
        super(20,20);
        this.Vel = new Vec;
    }
}


class Player extends Rect
    {
        constructor(){
            super(20,100);
            this.score = 0;
        }
    }

const Canvas = document.getElementById('pong');
const context = Canvas.getContext("2d");

const ball = new Ball();
console.log(ball);

var velocity =200;

ball.Vel.x = velocity;
ball.Vel.y = velocity;


const ennemy = new Player();
ennemy.pos.x = Canvas.width - 40;
ennemy.pos.y = Canvas.height/2 - 50;

const player = new Player();
player.pos.x = 20;
player.pos.y = Canvas.height/2 - 50;

let LastTime;
function CallBack(millis){
    if(LastTime){
        update((millis - LastTime) /1000);
    }
    LastTime = millis;
    requestAnimationFrame(CallBack);
}


function update(dt){
    ball.pos.x += ball.Vel.x * dt;
    ball.pos.y += ball.Vel.y * dt;
   
    
   

    // we will start by adding the background
    context.fillStyle = "#000";
    context.fillRect(0,0,Canvas.width,Canvas.height);
    
     // let's add the center line
    context.fillStyle = "#fff";
    context.fillRect((Canvas.width)/2,0,4,Canvas.height);
    
    // let's add some text
    context.fillStyle = "#fff";
    context.font = "80px Arial";
    context.fillText(player.score,Canvas.width/4 - 30,80);

    
    context.fillStyle = "#fff";
    context.font = "80px Arial";
    context.fillText(ennemy.score,Canvas.width*0.75 - 30,80);
    
    // we will make a ball
    context.fillStyle = "#fff";
    context.fillRect(ball.pos.x,ball.pos.y,ball.size.x,ball.size.y);
    // we will make the player
    context.fillStyle = "#fff";
    context.fillRect(player.pos.x,player.pos.y,player.size.x,player.size.y);
    
    // we will make the ennemi
    context.fillStyle = "#fff";
    context.fillRect(ennemy.pos.x,ennemy.pos.y,ennemy.size.x,ennemy.size.y);
    
     
    if((ball.pos.y + ball.size.y) > Canvas.height || ball.pos.y < 0){
        ball.Vel.y = - ball.Vel.y;
    }
    
    if((ball.pos.x + ball.size.x) > Canvas.width || ball.pos.x < 0){
        ball.Vel.x = - ball.Vel.x;
    }
    
    
    // set enemy score
    if(ball.pos.x <= 0){
        ennemy.score++;
    }
    //set player score
    if(ball.pos.x + 20 >= Canvas.width){
        player.score++;
    }
    
    
    if(ball.pos.x >= Canvas.width/2){
         if(ball.pos.y <= ennemy.pos.y ){
             ennemy.pos.y -=2;
         }else if(ball.pos.y >= ennemy.pos.y+100){
             ennemy.pos.y +=2;
         }
    }
   
    
    
    // now we will make the collistion between player and ball
    
    
    if((ball.pos.x + 20 ) >= (ennemy.pos.x) &&  (ball.pos.y >= ennemy.pos.y && ball.pos.y <= ennemy.pos.y + 100)){
        ball.Vel.x = - ball.Vel.x;
    }
    
    if((ball.pos.x ) <= (player.pos.x + 20) &&  (ball.pos.y >= player.pos.y && ball.pos.y <= player.pos.y + 100)  ){
        ball.Vel.x = - ball.Vel.x;
    }
  
    Canvas.addEventListener("mousemove", event => {
        player.pos.y = event.offsetY;
    });
      
    
    
    
}

CallBack();
