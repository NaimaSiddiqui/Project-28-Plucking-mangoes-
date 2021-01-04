class Tree{
constructor(x,y){
    var options={
        isStatic: false
    }
    this.x=x;
    this.y=y;
    this.image=loadImage("images/tree.png")
    this.body=Bodies.rectangle(x,y,options) 
    World.add(world,this.body);

}

display(){
    imageMode(CENTER);
    image(this.image,this.x,this.y,400,500);
}
}