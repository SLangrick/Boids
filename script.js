let f = null;

function setup() {
    createCanvas(displayWidth, displayHeight);
    f = new flock(200,200, 4)
    
    f.update()
    //f.update()
}

function draw() {
    background(200);
    f.show()
    f.update()

}

