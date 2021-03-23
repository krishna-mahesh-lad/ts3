class BoxClass{
constructor (x, y, width, height){
    var options = {
        'restitution':0.4,
        'friction':0,
       
    }
    this.visibility=260

this.body=Bodies.rectangle(x, y, width, height);
this.width=width;

this.height=height;
World.add(world, this.body);

}
display(){
  
  //  console.log(this.body.speed)
    var pos = this.body.position
    var angle = this.body.angle;
    if(this.body.speed<10){
        push();
fill("green")
translate(this.body.position.x, this.body.position.y);
rotate(angle);

rectMode(CENTER)

rect(0, 0, this.height, this.width)
pop();
console.log(this.visibility)
}
       
        
        else{

            
            
            
          World.remove(world,this.body);
        
            push();
            this.visibility-=5
            //this.visibility=this.visibility-5;
            //tint(255,this.visibility);
            //translate(this.body.position.x, this.body.position.y);
            //rect(0, 0, this.height, this.width)
  
           
            pop();
           /* World.remove(world, this.body)
            push();
            this.visibility = this.visibility-5
            tint(255,this.visibility);
            
            pop();*/
         
        }



      }
      score(){
        if(this.visibility<0&&this.visibility>-1005){
          score+=1
          
        }
      }
}
