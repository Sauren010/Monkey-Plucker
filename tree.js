class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.tree = loadImage('tree.png');
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(pos.x, pos.y, this.width, this.height);
    }
  };