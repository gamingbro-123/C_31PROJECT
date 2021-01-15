class Polygon
{
  constructor(xpos,ypos,radius)
  {
      var options = {

        isStatic:false,

        'restitution':0.8,

        'friction':1,

        }

        this.body = Bodies.circle(xpos,ypos,radius);

        this.radius = radius;

        this.image = loadImage("polygon.png");

        World.add(world,this.body);
                  
      }

      display() 
      {
          imageMode(CENTER)
          image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
          

       
      }
  }
