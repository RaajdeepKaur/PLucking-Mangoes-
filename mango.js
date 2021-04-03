class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        this.image = loadImage("Plucking mangoes/mango.png");
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius)
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
    }
}