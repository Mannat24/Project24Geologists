class Stone{
    constructor(x,y,width,height){
        {
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    }
    display(){
        var posstone= this.body.position;
        fill ("grey");
        rect(posstone.x, posstone.y, this.width, this.height);
    }

}