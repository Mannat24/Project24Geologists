class Iron{
    constructor(x,y,height,width){
        var options={
            restitution:0.8,
            friction:3,
            density:30
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var posiron = this.body.position;
        fill ("red");
        rectMode(CENTER);
        rect(posiron.x, posiron.y, this.width, this.height);
    }
}