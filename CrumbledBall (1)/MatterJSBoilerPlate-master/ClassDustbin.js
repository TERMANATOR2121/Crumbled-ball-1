class Dustbin{
    constructor(x, y,width,height) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(this.x, this.y,this.width,this.height, options);
        World.add(world, this.body);
      }
      display(){

        push();
        //translate(this.body.position.x, this.body.position.y);
        fill ("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
      }
}
