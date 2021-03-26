class Bob
{
	constructor(x,y,w,h)
	{
        var options={
            'restitution':1,
            'friction':0,
			'density':0.8,
			isStatic:false
        }
     this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
     
     this.body=Bodies.rectangle(this.x, this.y, this.w, this.h , options);
 		World.add(world, this.body);
    }
    display()
	{
			
			var groundPos=this.body.position;		
            
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
		fill(255,0,255);
			
			rect(0,0,this.w, this.h);
			pop()
			
	}

}