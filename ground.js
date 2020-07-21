class Ground {
    constructor() {
      var options = {
          isStatic:true,
          'density':1.0
      }
      this.body = Bodies.rectangle(400,690,800,20,options);
      
      this.width = 800;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x,pos.y, this.width, this.height);
    }
  };
  