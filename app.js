let car=document.getElementById("car");
let backwheel=document.querySelector(".back-wheel");
let frontwheel=document.querySelector(".front-wheel");
let trafficlight=document.querySelector(".traffic-light");
let lights=trafficlight.querySelectorAll(".light");

let carSpeed = 3;
let moving = true;
let lightDurations = [3000, 1000, 5000];
let currentLight = 2;

function moveCar(){
    if(moving){
        let carLeft = parseInt(window.getComputedStyle(car).left, 10);
        car.style.left = carLeft + carSpeed + "px";

        if(carLeft > window.innerWidth){
            car.style.left = "-100px"
        }
    }
    requestAnimationFrame(moveCar);
}

function pauseWheelRotation(){
    backwheel.style.animationPlayState = "pause";
    frontwheel.style.animationPlayState = "pause";
}

function resumeWheelRotation(){
    backwheel.style.animationPlayState = "running";
    frontwheel.style.animationPlayState = "running";
}

function changeLight(){
    lights[currentLight].classList.remove("active");
    currentLight = (currentLight + 1) % lights.length ;
    lights[currentLight].classList.add("active");

    if(lights[currentLight].classList.contains('red')){
        moving = false;
        pauseWheelRotation();
    }
    else if(lights[currentLight].classList.contains('green')){
        moving = true;
        resumeWheelRotation();
    }
    
    setTimeout(changeLight, lightDurations[currentLight])
}

lights[currentLight].classList.add("active");

setTimeout(changeLight, lightDurations[currentLight])

requestAnimationFrame(moveCar);