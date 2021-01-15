class SlingShot
{

    constructor(body1,point2)
    {

    var options = {
        bodyA:body1,
        pointB:point2,
        length:10,
        stiffness:0.03
    }

    this.chain = Constraint.create(options);

    World.add(world,this.chain);

        
}

display()
{
 
    if(this.chain.bodyA!==null)
    {
    
    var firstPosition = this.chain.bodyA.position
    var secondPosition = this.chain.pointB
    
        strokeWeight(3)
        stroke("#7F4120")
        line(firstPosition.x-15,firstPosition.y,secondPosition.x-30,secondPosition.y)
        // line(firstPosition.x-15,firstPosition.y,secondPosition.x+15,secondPosition.y)

    }
}
        

fly()
{
    console.log(this.chain);

    // Matter.Body.applyForce(this.chain.bodyA,{x:100,y:-100})
    
    this.chain.bodyA=null

    
    
}

attach(polygon3)
{
    this.chain.bodyA=polygon3;
}

}

