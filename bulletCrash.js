function bulletCrash(p1,p2) {
    if (p2.x = p1.x < (p1.width + p2.width)/2) {

        p1.velocityX = 0;

        var deformation = 0.5 * speed * weight * speed / (thickness * thickness * thickness);

        if (deformation < 10) {

            p2.shapeColor = "green";
        }

        if (deformation > 10) {

            p2.shapeColor = "red";
        }

    }
}