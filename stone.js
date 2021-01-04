class Stone{
    constructor(x,y,r){
        var options={
            restitution: 0,
            friction: 1,
            density: 1.2,
            isStatic: false
        }
        this.r=r;
        
        this.image=loadImage("images/stone.png")
        this.body=Bodies.circle(x,y,r,options) 
        World.add(world,this.body);
       
    //send the code link in chat i ll check  ok
    
    }
    
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    
    }
    }