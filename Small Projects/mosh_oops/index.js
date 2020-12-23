
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     draw: function () {
//         console.log("draws");
//     }
// };

// circle.draw()

// factory function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log("factory draws");
        }
    };
}
const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    // console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log("construction draw")
    }
}
const another = new Circle(1);


// Stopwatch
function StopWatch() {

    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stop watch already started')
        
        running = true;

        startTime = new Date();
    };

    this.stop = function () {
        if (!running)
            throw new Error("Stop watch is not started yet")

        running = false;

        endTime = new Date();

        const second = (endTime.getTime() - startTime.getTime())/1000;
        duration += second;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function(){ return duration}
    })
}

let sw = new StopWatch()

console.log(sw.start())