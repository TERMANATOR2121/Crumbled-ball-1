class Ball {
constructor(x, y,radius) {
    var options = {
        'restitution':1,
        'friction':0.3,
        'density':0.6,
        'isStatic':false

    }

    this.x=x;
    this.y=y;
    this.radius=radius;
    this.body = Bodies.circle(this.x, this.y,this.radius, options);
    World.add(world, this.body);
  }
  display(){

    push();
    //translate(this.body.position.x, this.body.position.y);
    fill (255, 0, 255);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    pop();
  }
}