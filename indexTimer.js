//elise
const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
   //callback methods
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            'stroke-dashoffset',
            (perimeter * timeRemaining) / duration - perimeter
        );
    },
    onComplete() {
        console.log('time just completed')

    }
});

//this^ will also invoke start() automatically when the application is loaded in the browser
//in general we want 'this' to be equal to the instance of the calss that we create bc 'this' is howo we refer to different instance variables
//timer.start() will give us an object --> a reference to the instance class of timer 
//but the eventListener for start() will give us the button meaning 'this' is different 
//bind does not call the fxn right away but rather it creates a new fxn that can be called in the futture

//goal of start() is to start tick()