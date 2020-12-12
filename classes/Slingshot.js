class Slingshot{
    constructor(body,point,color){
        var options = {
            bodyA: body,
            pointB: point,
            length: 30,
            stiffness: 0.04
        };
        this.pointB = point;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.color = color;
    }


    display(){
        if(this.sling.bodyA){
            var A = this.sling.bodyA.position;
            var B = this.pointB;

            strokeWeight(3.258);
            stroke(this.color);
            line(A.x,A.y,B.x,B.y);
        }
    }


    fly(){
        this.sling.bodyA = null;
    }
}