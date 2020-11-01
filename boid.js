class boid{
    constructor(x,y,velx,vely){
        this.x = x;
        this.y = y;
        this.velx = velx;
        this.vely = vely;
        
    }
    update(boids, dir, center){
        let closest = null;
        let ShortD = 50;
        let dirX = 0;
        let dirY = 0;

        let cenX = 0;
        let cenY = 0;
        boids.forEach(element => {
            dirX = dirX + element.velx;
            dirY = dirY + element.vely;

            cenX = cenX + element.x;
            cenY = cenY + element.y
            if(element.x === this.x){
            } else {
                let dist = Math.sqrt(Math.pow(element.x - this.x, 2) + Math.pow(element.y - this.y, 2))
                if(dist < ShortD){
                    closest = element;
                }
            }
        });
        if(closest){
            if(closest.x < this.x){
                this.velx = this.velx + 0.2
            } else {
                this.velx = this.velx - 0.2 
            }
            if(closest.y < this.y){
                this.vely = this.vely + 0.2
            } else {
                this.vely = this.vely - 0.2
            }
        } else {
            dirX = (dirX / boids.length) + Math.random()*2 - 1;
            dirY = dirY / boids.length + Math.random()*2 - 1;
            if(dirX <= this.velx){
                this.velx = this.velx - 0.2
            } else {
                this.velx = this.velx + 0.2 
            }
            if(dirY <= this.vely){
                this.vely = this.vely - 0.2
            } else {
                this.vely = this.vely + 0.2
            }
            cenX = cenX / boids.length;
            cenY = cenY / boids.length;
            if(cenX <= this.x){
                this.velx = this.velx - 0.2
            } else {
                this.velx = this.velx + 0.2 
            }
            if(cenY <= this.y){
                this.vely = this.vely - 0.2
            } else {
                this.vely = this.vely + 0.2
            }


        }
        if(this.velx > 4){
            this.velx = 4;
        } else if(this.velx < -4){
            this.velx = -4;
        }
        if(this.vely > 4){
            this.vely = 4;
        } else if(this.vely < -4){
            this.vely = -4;
        }

        if(this.x <= 0 || this.x >= displayWidth){
            this.velx = this.velx * -1;
        }
        if(this.y <= 0 || this.y >= displayHeight){
            this.vely = this.vely * -1;
        }
        this.x = this.x + this.velx;
        this.y = this.y + this.vely;

    }
    show(){
        circle(this.x,this.y, 10);
        line(this.x,this.y, this.x + this.velx * 5, this.y + this.vely * 5);
    }
}