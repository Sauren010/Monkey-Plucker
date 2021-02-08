class Stone{
constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world, this.body);
    this.image=loadImage("stone.png");
}
    display(){
        var pos =this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,40,40)
       //ellipseMode(RADIUS)
       //ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}