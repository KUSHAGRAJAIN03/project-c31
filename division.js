class division{
    constructor(x,y,w,h){
        var options = {
            isStatic: true

        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);


        }
        display()
        {
            var position = this.body.position;
            rectMode(CENTER);
            fill(255,255,255);
            rect(position.x,position.y,this.w,this.h);


        }
    }

