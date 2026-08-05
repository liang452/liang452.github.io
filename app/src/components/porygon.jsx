import { useEffect, useRef } from "react";
import p5 from "p5";

export default function Porygon() {
    const sketchRef = useRef();
    const sketch = (p) => {
        let time = 0;  // keep track of the "time"

        p.setup = () => {
            // size (800, 800, P3D);  // use 3D here
            // noStroke(); 
            p.createCanvas(800, 800, p.WEBGL);
            p.noStroke();  
        }

        //
        p.draw =()=> {
            resetMatrix();  // set the transformation matrix to the identity

            background(255, 255, 255);  // clear the screen

            // set up for perspective projection
            perspective (PI * 0.333, 1.0, 0.01, 1000.0);

            // place the camera in the scene
            camera (0.0, 0.0, 85.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0);
            
            // create an ambient light source
            ambientLight (102, 102, 102);

            // create two directional light sources
            lightSpecular (204, 204, 204);
            directionalLight (102, 102, 102, -0.7, -0.7, -1);
            directionalLight (152, 152, 152, 0, 0, -1);


            push();
            
            ambientMaterial(100, 100, 200);
            specularMaterial(10, 10, 10);
            shininess(1.0);

            translate(0, 0, 0);
            

            rotate(-time, 0.0, 0.1, 0.0);

            
            normal(0, 0, 1);
            
            drawModel(p, 0, 0, 0);
            
        
            pop();
            
            time += 0.02;
        }

        // Process key press event
        void keyPressed()
        {
            if (key == 's' || key =='S') {
                save ("image_file.jpg");
                println ("Screen shot saved in JPG file.");
            }
        }

        function drawModel(p,x, y, z) {
            // face
            p.fill(219, 66, 120);
            p.push();
            p.translate(0, -11, z);
            p.scale(1, 1, 1.3);
            p.box(15);
            p.pop();
            
            p.push();
            p.scale(1, 1, 0.8);
            beak(p, x, y-18.5, z+12);
            p.pop()
            
            eyes(p, -7.8, -8, z+2, false);
            eyes(p, 7.8, -8, z+2, true);
            
            body(p, x, y-5, z);
            wheels(p, x+10, y+5, -7);
            wheels(p, x-17, y+5, -7);  
            
            tail(p, x, y+12, -20);
        }

        function body(p, x, y, z) {
            let w1=15;
            let w2=25;
            let h =13;
            let z_diff=10;
            // front trapezoid
            p.fill(50, 170, 190);
            quad(x, y, z, 10,w1, w2, h);
            
            // lower trapezoid
            p.push()
            p.translate(0, 16, 0);
            p.scale(1, -1, 1); 
            quad(x, y, z, 10, w1, w2, h);
            p.pop()
            
            // right triangle
            p.beginShape();
            p.vertex(x+(w1/2), y, z);
            p.vertex(x+(w2*0.35), y+(0.5*h), z-3);
            p.vertex(x+(w2/2), y+h, z+z_diff);
            p.endShape();
            
            p.beginShape();
            p.vertex(x-(w1/2), y, z);
            p.vertex(x-(w2*0.35), y+(0.5*h), z-3);
            p.vertex(x-(w2/2), y+h, z+z_diff);
            p.endShape();
            
            // bottom trapezoids
            p.fill(219, 66, 120);
            
            p.push()
            p.rotateY(p.radians(90));
            p.beginShape(QUADS);
            p.vertex(x+24, y+h, z-(w2/2)+5); // back
            p.vertex(x+20, y+2*h, z-(w2/2)+5);// back 2
            p.vertex(x, y+2*h, z-(w2/2)+5);
            p.vertex(x-10, y+h, z-(w2/2));
            //p.vertex(x+24, y+h, z-(w2/2)+5); // back
            //p.vertex(x+20, y+2*h, z-(w2/2)+8.5);// back 2
            //p.vertex(x, y+2*h, z-(w2/2)+5);
            //p.vertex(x-10, y+h, z-(w2/2));
            p.endShape();
            p.pop()
            
            p.push()
            p.rotateY(p.radians(90));
            p.beginShape(QUADS);
            p.vertex(x+24, y+h, z+(w2/2)-5); // back
            p.vertex(x+20, y+2*h, z+(w2/2)-5);// back 2
            p.vertex(x, y+2*h, z+(w2/2)-5);
            p.vertex(x-10, y+h, z+(w2/2));
            p.endShape();
            //quad(x+z_diff-2.5, y+h, z+(w2/2), -5, 35, 15, h);
            p.pop()
            
            // side top polygons
            p.beginShape();
            p.vertex(x+(w1/2), y, z);
            p.vertex(x+(w2*0.35), y+(0.5*h), z-3);
            p.vertex(x+(w2/2), y+h, z+z_diff);
            p.vertex(z+(w2/2)-5, y+h, z-24); // back bot
            p.vertex(x+(w1/2)-1, y+10, z-25); // back top
            p.endShape();
            
            p.beginShape();
            p.vertex(x-(w1/2), y, z);
            p.vertex(x-(w2*0.35), y+(0.5*h), z-3);
            p.vertex(x-(w2/2), y+h, z+z_diff);
            p.vertex(z-(w2/2)+5, y+h, z-24);
            p.vertex(x-(w1/2)+1, y+10, z-25); // back top
            p.endShape();
            
            // top quad
            quad(p, x, y, z, -25, w1, w1-2, 10);
            // back quad 1
            quad(p, x, y+(h*0.76), z-25, 1, w1-2, w1, 3.2);
            // back quad 2
            quad(p, x, y+h, z-24, 4, w1, w1, h);
            
            // bottom?
            quad(p, x, y+(2*h), z, -20, w1, w1, 0); // react
        
        
        }

        function eyes(p,  x,  y,  z, right) {
            p.fill(255);
            p.beginShape();
            p.beginShape();
            p.vertex(x, y, z-0.5);
            p.vertex(x, y-2.5, z-3.5);
            p.vertex(x, y-5, z-3);
            p.vertex(x, y-7, z);
            p.vertex(x, y-5, z+3);
            p.vertex(x, y-1.5, z+2.5);
            p.endShape();
            
            p.fill(0);
            let new_x = 0.0;
            if (right) {
                new_x = x+0.1;
            } else{
                new_x = x-0.1;
            }
            
            p.beginShape(QUADS);
            p.vertex(new_x, y-3, z+0.5);
            p.vertex(new_x, y-4, z+0.5);
            p.vertex(new_x, y-4, z-0.5);
            p.vertex(new_x, y-3, z-0.5);
            p.endShape();
            
            p.endShape();
        
        }

        function beak( x,  y,  z) {
            p.beginShape(QUADS);
            // trapezoid
            quad(p, x, y, z, 7.5, 15, 8, 7.5);
            p.endShape();
            
            // right side
            p.beginShape();
            p.vertex(x+7.5, y, z); // top right
            p.vertex(x+7.5, y+15, z); // back corner
            p.vertex(x+4, y+15, z+7.5); // bottom corner
            p.vertex(x+4, y+7.5, z+7.5); //corner
            p.endShape();
            
            // back of beak
            quad(p, x, y, z, 0, 15, 15, 15);
            //p.vertex(x+15, y, -10);
            //p.vertex(x, y, -10); // top left
            //p.vertex(x, y+15, -10);
            //p.vertex(x+15, y+15, -10);

            // bottom 
            quad(p, x, y+15, z, 7.5, 15, 8, 0);
            
            //left side
            p.beginShape();
            p.vertex(x-7.5, y, z); // top right
            p.vertex(x-7.5, y+15, z); // back corner
            p.vertex(x-4, y+15, z+7.5); // bottom corner
            p.vertex(x-4, y+7.5, z+7.5); //corner
            p.endShape();
            
            // left side
            p.fill (50, 170, 190);
            p.beginShape();
            p.vertex(x-4, y+15, z+7.5); // bottom left
            p.vertex(x-1.5, y+15, z+15); // top right
            p.vertex(x-4, y+7.5, z+7.5); // top left
            p.endShape();
            
            // right side
            
            p.beginShape();
            p.vertex(x+4, y+15, z+7.5); // bottom left
            p.vertex(x+1.5, y+15, z+15); // top right
            p.vertex(x+4, y+7.5, z+7.5); // top left
            p.endShape();
            
            // top
            quad(p, x, y+7.5, z+7.5, 7.5, 8.5, 3, 7.5);
            //blue bottom
            quad(p, x, y+15, z+7.5, 7.5, 8, 3, 0);
        }

        function wheels(p,  x,  y,  z) {
            p.fill (50, 170, 190);
            p.beginShape();
            
            let z1 = 18;
            let z2 = 12;
            
            // front
            p.beginShape(QUADS);
            p.vertex(x, y, z);  // top left
            p.vertex(x+7, y, z); // top right
            p.vertex(x+7, y+12, z+z1); // bottom right
            p.vertex(x, y+12, z+z1); // bottom left
            p.endShape();
            
            p.beginShape(QUADS);
            p.vertex(x, y+12, z+z1);
            p.vertex(x+7, y+12, z+z1);
            p.vertex(x+7, y+15, z+z1);
            p.vertex(x, y+15, z+z1);
            p.endShape();
            
            // inside triangle
            p.beginShape();
            p.vertex(x, y+12, z+z1);
            p.vertex(x, y+15, z+z1);
            p.vertex(x, y+15, z-z2);
            p.vertex(x, y+12, z-z2);
            p.vertex(x, y, z);
            p.endShape();
            
            // back slanted
            p.beginShape(QUADS);
            p.vertex(x, y+12, z-z2); // bottom
            p.vertex(x, y, z); // top
            p.vertex(x+7, y, z); // top
            p.vertex(x+7, y+12, z-z2); // bottom
            p.endShape();
            
            // back quad
            p.beginShape(QUADS);
            p.vertex(x, y+12, z-z2);
            p.vertex(x+7, y+12, z-z2);
            p.vertex(x+7, y+15, z-z2);
            p.vertex(x, y+15, z-z2);
            p.endShape();
            
            // bottom
            p.beginShape(QUADS);
            p.vertex(x, y+15, z-z2);
            p.vertex(x, y+15, z+z1);
            p.vertex(x+7, y+15, z+z1);
            p.vertex(x+7, y+15, z-z2);
            p.endShape(QUADS);
            
            // outside shape
            p.beginShape();
            p.vertex(x+7, y, z);
            p.vertex(x+7, y+12, z+z1);
            p.vertex(x+7, y+15, z+z1);
            p.vertex(x+7, y+15, z-z2);
            p.vertex(x+7, y+12, z-z2);
            p.endShape();
            
            
            p.endShape();
        }

        function tail(p, x,  y,  z) {
        
            // front of tail
            quad(p, x, y, z, -25, 5, 3, -15);
            
            // side
            p.beginShape();
            p.vertex(x+2.5, y, z); // base
            p.vertex(x+1.5, y-15, z-25); // back near
            p.vertex(x+1.5, y-13, z-27); // back far
            p.vertex(x+2.5, y+7, z-3); // base 2
            p.vertex(x+2.5, y+7, z);
            p.endShape();
            
            // other side
            // side
            p.beginShape();
            p.vertex(x-2.5, y, z);   // base
            p.vertex(x-1.5, y-15, z-25);
            p.vertex(x-1.5, y-13, z-27);
            p.vertex(x-2.5, y+7, z-3); // base 2
            p.vertex(x-2.5, y+7, z);
            p.endShape();
            
            // tip
            quad(p, x, y-13, z-27, 2, 3, 3, -2);
            
            // back of tail
            quad(p, x, y+7, z-3, -24, 5, 3, -20);
            
            //bottom panel
            quad(p, x, y+7, z, -3, 3, 3, 0);
        
        }

        function quad(p, x,  y,  z,  z_diff,  w1,  w2,  h) {
            p.beginShape(QUADS);
            p.vertex(x-w1/2, y, z);
            p.vertex(x+w1/2, y, z);
            p.vertex(x+(w2/2), y+h, z+z_diff);
            p.vertex(x-(w2/2), y+h, z+z_diff);
            p.endShape();
        }
    }
}