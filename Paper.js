class Paper{

  constructor(x,y,w,h){
    
    var option = {
            isStatic:false,
            restitution:0.7,
            density:1,
            
      

            
    }

    this.body = Bodies.rectangle(x,y,w,h,option);
    World.add(world,this.body);
    this.w=w;
    this.h=h;
    this.image=loadImage("paper.png");
  }

  display(){
   push();
   translate(this.body.position.x,this.body.position.y);
   rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,25,25);
   pop();
  }


}
