class umbrella
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.body=Bodies.rectangle(x,y,width,height, options);
		this.width = width;
		this.height = height;
		 World.add(world, this.body);
		
	   this.man1 = loadImage("mam walking/walking_1.png");
	   this.man2 = loadImage(" mam walking/walking_2.png");
	   this.man3 = loadImage(" mam walking/walking_3.png");
	   this.man4 = loadImage(" mam walking/walking_4.png");
	   this.man5 = loadImage(" mam walking/walking_5.png");
	   this.man6 = loadImage(" mam walking/walking_6.png");
	   this.man7 = loadImage(" mam walking/walking_7.png");
	   this.man8 = loadImage(" mam walking/walking_8.png");
	}
	display()
	{
		push(); 
		    rectMode(CENTER);
			rect(this.body.position.x, this.body.position.y,this.width,this.height);
			imageMode(CENTER);
			image(this.man1,250,500,400,600); 
			/*image(this.man2,250,500,400,600);
			image(this.man3,250,500,400,600);
			image(this.man4,250,500,400,600);
			image(this.man5,250,500,400,600);
			image(this.man6,250,500,400,600);
			image(this.man7,250,500,400,600);
			image(this.man8,250,500,400,600);*/
		pop(); 	 
	}

}
