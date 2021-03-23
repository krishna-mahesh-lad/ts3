class Slingshot{
    constructor(bodyA, pointB, length, stiffness) {
        var options = {
           bodyA:bodyA,
            pointB:pointB,
            length:length,

            stiffness:stiffness
        }
        this.slingshot = Constraint.create(options)
        World.add(world, this.slingshot)
        

      }
      attach(polygonBody){
        this.slingshot.bodyA=polygonBody
        }
fly(){
  this.slingshot.bodyA=null;
}

      display(){
        

        if(this.slingshot.bodyA){
      var  pos1=this.slingshot.bodyA.position
     var   pos2=this.slingshot.pointB
       
        push();
       





  strokeWeight(3)
stroke(49, 22, 8)

line(pos1.x, pos1.y, pos2.x, pos2.y)
line(pos1.x, pos1.y, pos2.x, pos2.y)


        pop();
        } 
      }
}