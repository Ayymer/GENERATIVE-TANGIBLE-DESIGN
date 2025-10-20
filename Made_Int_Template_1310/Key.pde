boolean interfaceVisible = true;
boolean animationMode;

void keyReleased(){
  
  // SPACE BAR FOR ERASE EVERYTHING
  if(key == ' '){
      background(0,100,0);
  }
   
  if(key == 'c'){
    saveFrame("capture-######.png");
  }
  
}
