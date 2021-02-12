var gameState=0;
var database,playerCount;
var game,player,form;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    
    drawSprites();
}

