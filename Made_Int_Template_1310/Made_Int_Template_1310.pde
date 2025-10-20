// Images
PImage img01; // mask 1 (letter A)
PImage pattern1; // texture 1


// Font
PFont myfont;// our font




///////////////////////////////////////////
void setup(){
 size(1000,1000); // size of our sketch in pixels
 background(0); // initial color of our background 
 colorMode(HSB,360,100,100,100); // We use HSB Mode  
 
 // we load our masks our tile images
 pattern1 = loadImage("pattern-07-1.png");  
 
 // we load our masks
 img01 = loadImage("alpha-01.jpg");
 img01.resize(1000,1000);
 
 
} // end of the setup function



void draw(){  
  
  if(keyPressed && key == ' '){    


  }
  
  
  if(keyPressed && key == 'e'){    

    

  }
    
  if(keyPressed && key == 'r'){    


    
  }
 
  if(keyPressed && key == 't'){

    

  }
  
  // TEXT WITH ALPHA
  if(keyPressed && key == 'y'){

    
    

  }
   
 
  if(keyPressed && key == 'u') {
    
      background(0,100,0); // we draw a black background
      int tiles = 50; // let's choose the number of tiles
      float tileSize = width/tiles; // responsive size (depending of the tile's number)
      for (int x =0; x < tiles; x++) { // we create a grid in the x axis thanks to this first loop
      for (int y = 0; y < tiles; y++) { // we create a grid in the y axis thanks to this second loop
      
        int tile_posX = int(x*tileSize);// let's create a variable in order to compute the position of each tile. We multiply by the tile size in order to cover the width
        int tile_posY = int(y*tileSize);// idem for the y positions
        
        PImage tile_img = img01; // we choose the image we want to use as a tile
        color c = tile_img.get(tile_posX, tile_posY); // let's analyze on our image the color of the pixel at these specific positions
        float size = map(brightness(c),0,100,tileSize,0); // we convert the brightness into a size for each tile
       
        int pattern_select = round(random(1,3)); //  we choose randomly a number between 1 and 10
        if(pattern_select == 1){  image(pattern1,tile_posX, tile_posY, size, size); } // case 1

      } // end of the first loop
     } // end of the second loop
  }

    
} // end of the draw function
