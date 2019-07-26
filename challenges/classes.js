// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(boxProps) {
        this.length = boxProps.length;
        this.width = boxProps.width;
        this.height = boxProps.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cubeSize) {
        super(cubeSize);
        this.length = cubeSize;
        this.width = cubeSize;
        this.height = cubeSize;        
    }
    cubeVolume() {
        return Math.pow(this.length, 3);
    }
    cubeArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker(100);
console.log(cube);
console.log(cube.cubeVolume());
console.log(cube.cubeArea());
console.log(cube.surfaceArea());