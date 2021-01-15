class Box
{

    constructor(xpos,ypos, width1, height1)
  {

    var options = {
        'restitution':0.8,
        'friction':1
        }
   this.body = Bodies.rectangle(xpos,ypos,width1,height1, options);
   this.width = width1;
   this.height = height1;

   this.visibility = 255;


   World.add(world,this.body);


  }
    

display()
{
    // var position = this.body.position;

   

     if(this.body.speed<3)
  {
    //  super.display();

    rectMode(CENTER)    
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }

  else
  {
    World.remove(world,this.body);
    push();
    tint(255,this.visibility);
    this.visibility = this.visibility-10;
    pop();
}
}
score()
{
   if(this.visibility<0 && this.visibility>-105)
  {
    console.log(this.visibility);
    score = score+1;
  }

}
}


