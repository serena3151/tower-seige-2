class Block{
  constructor(x, y, width, height) {
    this.image = loadImage("block.png");
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.Visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        pop();
      }
      var pos= this.body.position;
      image(this.image, this.body.position.x, this.body.position.y, 30, 40);
      imageMode(CENTER)
    }
}