  
class Launcher{
	constructor(body,anchor)
	{
		
		var options={ bodyB:body,			 
			pointA:anchor, 
			stiffness:0.04, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyB=body;
	}

	fly()
	{ 
		console.log("Fly")
		this.launcher.body=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyB.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}