class Paper{
    constructor(x,y,radius){
        var options= {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        }
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y,radius/2,options);
      World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;		
		push()
		translate(pos.x, pos.y);
		imageMode(CENTER)
		strokeWeight(3);
		fill(255,0,255)
		image(this.image,0,0,this.radius*2, this.radius*2);
		pop()
    }
}