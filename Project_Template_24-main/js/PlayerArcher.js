class PlayerArcher {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };

        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/playerArcher.png");

        World.add(world, this.body);

        Matter.Body.setAngle(this.body, -PI/2);
    }
    display() {
        var position = this.body.position;
        var angle = this.body.angle;

        if(move === "UP" && PlayerArcher.body.angle < 1.77) {
            angleValue = 0.1;
        } else {
            angleValue = -0.1;
        }

        if(move === "DOWN" && PlayerArcher.body.angle > 1.47) {
            angle.value = -0.1;
        } else {
            angleValue = 0.1;
        }

        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}