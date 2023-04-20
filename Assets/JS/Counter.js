// This JavaScript file controls the behavior of the counter

// Here you set the labels for the counters
let labelOne = "Customers"
let labelTwo = "Complete Creations"
let labelThree = "Jobs Completed"

// Here you set the amount the counters finish at
let maxOne = 32
let maxTwo = 49
let maxThree = 187

// Here you set the speed for the counters in seconds
let speed = 1

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
let counterOne = document.getElementById('CounterOne');
let counterOneLabel = document.getElementById('CounterOneLabel');
let counterTwo = document.getElementById('CounterTwo');
let counterTwoLabel = document.getElementById("CounterTwoLabel");
let counterThree = document.getElementById('CounterThree');
let counterThreeLabel = document.getElementById('CounterThreeLabel');
counterOne.innerHTML = maxOne;
counterOneLabel.innerHTML = labelOne;
counterTwo.innerHTML = maxTwo;
counterTwoLabel.innerHTML = labelTwo;
counterThree.innerHTML = maxThree;
counterThreeLabel.innerHTML = labelThree;

const duration = speed * 175;
const frameSpeed = 1000 / 60;
const totalFrames = Math.round(duration / frameSpeed);
const easeOutQuad = t => t * (2 - t);
const animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);
    const counter = setInterval(()=>{
        frame++;
        const progress = easeOutQuad(frame/totalFrames);
        const currentCount=Math.round(countTo * progress);
        if(parseInt(el.innerHTML, 10) !== currentCount){
            el.innerHTML = currentCount;
        }
        if(frame===totalFrames){
            clearInterval(counter);
        }
    },duration);
}

const runAnimations = () => {
    const countUpEls = document.querySelectorAll('.home_counter');
    countUpEls.forEach(animateCountUp)
}