let MENU = 0;
let timer = 12;

let ding

let select


//these variables are for the hit the target game
var x = 250;
var y = 300;
var d = 40;
var targetx = 300;
var targety = 300;
var score2 = 0;

//these variables are for the collect the cookies game
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score1 = 0;

//these variables are for the Color Matching game
var score3=0;

//these variables are for the Catch the Balls game
var screen = 0;
var why=-20;
var ex=200;
var speed = 2;
var CatchScore= 0;

function preload(){
  ding = loadSound("ding.mp3")
  select = loadSound("select.mp3")
   image1 = loadImage("cookie.png");
}


function setup() {
  createCanvas(500, 600);
}

function draw() {
  print(mouseX, mouseY)
  background(135,206,235);
  
  //App Name Box
  noStroke();
  fill(173,216,230);
  ellipse(250,100,200,100);
  fill(0,0,0);
  textFont('Comic Sans MS');
  textSize(32);
  text("APP NAME", 170, 110);
  
  //START BUTTON
  fill(173,216,230);
  ellipse(250,300,200,100);
  fill(0,0,0);
  textFont('Comic Sans MS');
  textSize(35);
  text("Start", 200, 310);
  
  
  //bubbles
  fill(172,216,230);
  ellipse(120,190,30,20);
  ellipse(40,600,60,70);
  ellipse(80,80,30,40);
  ellipse(300,400,80,40);
  ellipse(300,10,40, 20);
  ellipse(300,600,20,23);
  ellipse(80,80,30,40);
  ellipse(200,500,80,40);
  ellipse(400,450,10,40);
  ellipse(80,390,20,20);
  

  
  //MENU 1 (GAMES SELECTION)
  if (MENU == 1) {
    background(135,206,235)
    stroke(0);
    
    //GAME#1 BUTTON
    fill(173,216,230);
    rect(50, 100, 150, 150);
    fill(0);
    textSize(20)
    text('Collect the', 70, 160)
    text('Cookies', 85, 200)
    
    //GAME#2 BUTTON
    fill(173,216,230);
    rect(280, 100, 150, 150);
    fill(0);
    textSize(20)
    text('Catch the', 305, 160)
    text('Balls', 315, 200)
    
    //GAME#3 BUTTON
    fill(173,216,230);
    rect(50, 350, 150, 150);
    fill(0);
    textSize(20)
    text('Color', 100, 415)
    text('Matching', 80, 450)
    
    //GAME #4 BUTTON
    fill(173,216,230);
    rect(280, 350, 150, 150)
    fill(0);
    textSize(20)
    text('Hit the', 320, 420)
    text('Target', 320, 450)
    
    //BACK BUTTON FUNCTION
    fill(173,216,230);
    rect(375, 15, 110, 40)
    fill(0);
    textSize(30)
    text('Back', 390, 45)
  }  
  
  
  
//GAME #1 FUNCTIONS(COLLECT THE COOKIES)
if (MENU == 3) {

  background(135,206,235)
  textSize(30)
  fill(0);
  levelOne();
  text (("Score : " + score1), width/2, 580);
  stroke(0);


function levelOne(){
  text ("Grab The Cookies!", width-400, height-540);
  text ("Collect 15 to win!", width-400, height-500);
  text ("(Hover over cookie)", width-430, height-460);

  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (distToBall < ballSize/1.5) {
    ballx = random(width);
    bally = random(height);
    score1 = score1 + 1;
    if(ding.isPlaying() == false){
        ding.play()
        
        
      }
    
  }

  if (score1 >= 15) {
  text (("Good Job You Win!"), width-380, height-250);
}


  image(image1, ballx, bally, 40, 40)
}


  //BACK BUTTON FUNCTION
    fill(173,216,230);
    rect(375, 15, 110, 40)
    fill(0);
    textSize(30)
    text('Back', 390, 45)
}
  
  
//GAME #2 FUNCTIONS(CATCH THE BALLS)
  if (MENU == 4) {
    
    
  if(screen == 0){
    background(135,206,235)
        textSize(30)
        fill (255,255,255)
        text('Catch the Bubble!', width / 3.5, height / 2)
        text('click to start', width / 3, height / 2 + 40);
        reset();
  }
    else if(screen == 1){
  background(135,206,235)
  fill (255,255,255)
  text("Score = " + CatchScore, 30,50)
  fill (255,255,255)
  ellipse(ex,why,20,20)
  fill (255,255,255)

  rect(mouseX,height-70,70,30)
    why+= speed;
  if(why>height){
      screen =2
     }
  if(why>height-10 && ex>mouseX-10 && ex<mouseX+75){
      why=-20
    speed+=.5
    CatchScore += 1
  }
    if(why==-20){
      pickRandom();
  }
  }
    else if(screen==2){
      background(135,206,235)
        fill (255,255,255)
        text('GAME OVER', width / 3, height / 2.5)
        text("SCORE = " + CatchScore, width / 3, height / 2.1)
        text('Click to Play Again!', width / 3.8, height / 2 + 28);
        fill(135,206,235)
  }


function pickRandom(){
    ex= random(20,width-20)
}

function reset(){
      CatchScore=0;
      speed=2;
      why=-20;
}
  
  //BACK BUTTON FUNCTION
    fill(173,216,230);
    rect(375, 15, 110, 40)
    fill(0);
    textSize(30)
    text('Back', 390, 45)
    
}
  
  //GAME #3 FUNCTIONS (COLOR MATCHING)
  if (MENU == 5) {
  
  background(135,206,235)
  textSize(30)
  fill(0);
  text('Choose the color red', 100, 90)
  text('(Hover over the choice)', 80, 135)

  stroke(0);
  fill(255, 0, 0);
  rect(80, 170, 150, 150); // red box
  fill(0, 255, 0);
  rect(280, 170, 150, 150); // green box
  fill(0, 0, 255);
  rect(80, 370, 150, 150); // blue box
  fill(255);
  rect(280, 370, 150, 150); // white box

 //RED BOX INTERACTION
   if (mouseX > 80 && mouseX < 230 && mouseY > 170 && mouseY < 320) {
    score3 = 1;
     }
    if (1==score3) {
    fill(173,216,230);
    rect(70, 320, 400, 40); 
    fill(0);
    text (("Good! Now Hover over Blue"), 80, 350);
    }

//BLUE BOX INTERACTION
    if (mouseX > 80 && mouseX < 230 && mouseY > 370 && mouseY < 520) {
    score3 = 2;
     }
    if (2==score3) {
    fill(173,216,230);
    rect(70, 320, 420, 40); 
    fill(0);
    text (("Good! Now Hover over White"), 80, 350);
    }

//WHITE BOX INTERACTION
    if (mouseX > 280 && mouseX < 430 && mouseY > 370 && mouseY < 520) {
    score3 = 3;
     }
    if (3==score3) {
    fill(173,216,230);
    rect(70, 320, 420, 40); 
    fill(0);
    text (("Good! Now Hover over Green"), 80, 350);
    }

//GREEN BOX INTERACTION
    if (mouseX > 280 && mouseX < 430 && mouseY > 170 && mouseY < 320) {
    score3 = score3+1;
     }
    if (score3>4) {
    fill(173,216,230);
    rect(70, 320, 380, 40); 
    fill(0);
    text (("You Win!"), 180, 350);
    }

  //BACK BUTTON FUNCTION
    fill(173,216,230);
    rect(375, 15, 110, 40)
    fill(0);
    textSize(30)
    text('Back', 390, 45)
}
  
  
  
  //GAME #4 FUNCTIONS (Hit the Target)
  if (MENU == 6) {
 
  background(135,206,235)
  textSize(30)
  fill(0);
  text('Hit the square', 140, 80)
  text('Get 5 to win!', 150, 120)
  text('(Move with arrow keys', 87, 160)
  text('and over the square)', 100, 210)
  text(timer, width/2, height/2);
  stroke(0);
  
  if (keyIsPressed){
    if(keyCode == LEFT_ARROW){
      x = x - 3;
    }
    else if(keyCode == RIGHT_ARROW){
      x = x + 3;
    }
    else if(keyCode == UP_ARROW){
      y = y - 3;
    }
    else if(keyCode == DOWN_ARROW){
      y = y + 3;
    }
    
  if (x+(d/2) >= width || x-(d/2) == 0){
    x = 250;
    y = 300;
  }
  if (y+(d/2) >= height || y-(d/2) == 0){
    x = 250;
    y = 300;
  }
  
  }  
  
  fill(150,150,150);
  ellipse(x,y,d,d)
  square(targetx, targety, 40)
  
  levelOne();
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    background(255,0,0);
    text("GAME OVER", width/2, height*0.7);
    
    
  }
  
  
    
  function levelOne(){
    fill(0);
    text("Score: " + score2, width/2, height - 15)
    var distToBall = dist(targetx, targety, x, y);
    if (distToBall < 40){
      targetx = random(width);
      targety = random(height);
      score2 = score2 + 1;
      if(ding.isPlaying() == false){
        ding.play()
        
        
      }
      
    }
    if (score2 >= 5) {
  text (("Good Job You Win!"), width-380, height-250);
      timer = 10;;
}
    
  }
  
  //BACK BUTTON FUNCTION
    fill(173,216,230);
    rect(375, 15, 110, 40)
    fill(0);
    textSize(30)
    text('Back', 390, 45)
}
  
}
  



//ALL FUNCTIONS BELOW ARE INTERACTIVE BUTTON FUNCTIONS (BASICALLY ALL THE BUTTONS FOR THE MENUS AND STUFF)

function mouseClicked() {
  
  //CATCH THE BALL MOUSECLICKED FUNCTIONS
  if(screen==0){
      screen=1
  }else if(screen==2){
      screen=0
  }
  
  //MENU 0 BUTTON FUNCTIONS
  if (MENU == 0) {
    if (mouseX > 150 && mouseX < 350 && mouseY > 250 && mouseY < 350) {
        MENU = 1;
      }  
    }
  
  
  //MENU 1 BUTTON FUNCTIONS
  if (MENU == 1) {
    if (mouseX > 380 && mouseX < 500 && mouseY > 20 && mouseY < 60) {
        MENU = 0;
      }  
    else if (mouseX > 50 && mouseX < 200 && mouseY > 100 && mouseY < 250){
        MENU = 3;
      }
    else if (mouseX > 300 && mouseX < 430 && mouseY > 100 && mouseY < 250){
        MENU = 4;
      }
    else if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 500){
        MENU = 5;
      }
    else if (mouseX > 300 && mouseX < 430 && mouseY > 350 && mouseY < 500){
        MENU = 6;
      }
  }  
  
  
  //MENU 3 BUTTON FUNCTIONS
  if (MENU == 3) {
    if (mouseX > 380 && mouseX < 500 && mouseY > 20 && mouseY < 60) {
        MENU = 1;
      }  
    }
  
  //MENU 4 BUTTON FUNCTIONS
  if (MENU == 4) {
    if (mouseX > 380 && mouseX < 500 && mouseY > 20 && mouseY < 60) {
        MENU = 1;
      }  
    }
  
  //MENU 5 BUTTON FUNCTIONS
  if (MENU == 5) {
    if (mouseX > 380 && mouseX < 500 && mouseY > 20 && mouseY < 60) {
        MENU = 1;
        score3=0;
      }    
    }
  
  //MENU 6 BUTTON FUNCTIONS
  if (MENU == 6) {
    if (mouseX > 380 && mouseX < 500 && mouseY > 20 && mouseY < 60) {
        MENU = 1;
      }  
  }
}
