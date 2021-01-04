class Mango{
    constructor(x,y,r){
        var options={
            restitution: 0,
            friction: 1,
            density: 1.2,
            isStatic: true
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image=loadImage("images/mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options) 
        World.add(world,this.body);
       
    
    }
    
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r*2);
        pop();
       
    }
}