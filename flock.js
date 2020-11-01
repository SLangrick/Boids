class flock{
    constructor(x , y, number){
        this.group = [];
        for(let i = 0; i < number; i ++){
            this.group.push(new boid(x + Math.random() * 10,y + Math.random() * 10, 1,1))
        }

    }
    show(){
        this.group.forEach( element => {
            element.show();
        });

    }
    update(){
        this.group.forEach( element => {
            element.update(this.group);
        });

    }
}