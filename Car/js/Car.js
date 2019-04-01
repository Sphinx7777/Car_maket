var buttonStartCar = document.querySelector('.startCar');
var engineStatus = document.querySelector('.engineStatus');
var gearBoxStatus = document.querySelector('.gearBoxStatus');
var intervalClean;
buttonStartCar.addEventListener('click', buttonStartClick);

function buttonStartClick() {
    engineStart();
}
function engineStart() {
    var randomStart = Math.random();

    if (randomStart > 0.5) {
        engineStarted();
        gearBoxStart();
    } else {
        engineNotStarted();
    }
}
function engineStarted() {
    engineStatus.innerHTML = 'Car have started';
    gearBoxStatus.innerHTML = '1';
    buttonStartCar.classList.add('hide');
    console.log('Car have started');
    planeCrashed();
}

function engineNotStarted() {
    engineStatus.innerHTML = 'Car don\'t started. Tray again';
    console.log('Car don\'t started. Tray again');
}
function planeCrashed() {
    setTimeout(crashedCar, 3000);
    console.log('Plane crash car 3 sec.')
}
function crashedCar() {
    engineStatus.innerHTML = 'Engine crashed. Car stopped';
    buttonStartCar.classList.remove('hide');
    gearBoxStatus.innerHTML = 'N';
    window.clearInterval(intervalClean);

    console.log('Crash Car');
}
function gearBoxStart() {
    var gearBoxValue = '1';
    gearBoxStatus.innerHTML = gearBoxValue;
    function gearBoxIncrements() {
        if (gearBoxValue < 5) {
            gearBoxValue++;
            gearBoxStatus.innerHTML = gearBoxValue;
        }
    }
    intervalClean = setInterval(gearBoxIncrements, 1000);
}

