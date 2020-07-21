class Dustbin {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.body.shapeColor="red";
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x,pos.y, this.width, this.height);
    }
  };
  