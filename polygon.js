class Polygon{
    constructor (x, y, radius, maxSides){
        var options = {
            'restitution':0.8,
            'friction':1.0
            
        }
    
    this.body=Matter.Bodies.circle(x, y, radius ,[options], [maxSides]);
    this.radius=radius;
    
    this.maxSides=maxSides;
    World.add(world, this.body);
    
    }
    display(){
        
        var pos = this.body.position
        var angle = this.body.angle;
    
    push();
    fill("red")
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    
    rectMode(CENTER)
    
    circle(0, 0, this.radius, this.maxSides)
    pop();
    
    }
    }