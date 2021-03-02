console.log('FLAPPY BIRD');

function createSky(skyHeight, skyWidth) {
    let sky = document.createElement('div');
    sky.classList.add('sky')
    sky.style.backgroundColor = '#87ceeb';
    sky.style.minHeight = skyHeight + 'px';
    sky.style.minWidth = skyWidth + 'px';
    sky.style.position = "absolute";
    return sky;
}

function createEarth(earthHeight, skyHeight, earthWidth) {
    let earth = document.createElement('div');
    earth.classList.add('earth')
    earth.style.backgroundColor = '#455b33';
    earth.style.minHeight = earthHeight + 'px';
    earth.style.minWidth = earthWidth + 'px';
    earth.style.position = "absolute";
    earth.style.top = skyHeight + 'px';
    return earth;
}

function createPipe(pipeHeight, pipeWidth, skyHeight, skyWidth) {

    let pipe = document.createElement('div');
    pipe.classList.add('pipe');
    pipe.style.minWidth = pipeWidth + 'px';
    pipe.style.maxWidth = pipeWidth + 'px';
    pipe.style.position = 'absolute';
    pipe.style.left = skyWidth + 'px';

    let pipeUpEnd = Math.random() * (skyHeight * 0.5 - skyHeight / ROW_COUNT) + skyHeight / ROW_COUNT
    let pipeUp = document.createElement('div');
    pipeUp.classList.add('pipeUp');
    pipeUp.style.backgroundColor = '#00c503';
    pipeUp.style.minHeight = pipeUpEnd + 'px';
    pipeUp.style.minWidth = pipeWidth + 'px';
    pipeUp.style.display='inline-block';

    let windowHeight = Math.ceil(Math.random() * (skyHeight * 0.5 - skyHeight / ROW_COUNT) + skyHeight / ROW_COUNT);
    let window = document.createElement('div')
    window.classList.add('window')
    window.style.minHeight = windowHeight + 'px';

    let pipeDown = document.createElement('div');
    pipeDown.classList.add('pipeDown');
    pipeDown.style.backgroundColor = '#00c503';
    if (skyHeight - windowHeight - pipeUpEnd < 0) {
        pipeDown.style.minHeight = 0 + 'px';
    } else {
        pipeDown.style.minHeight = skyHeight - windowHeight - pipeUpEnd + 'px';
    }
    pipeDown.style.minWidth = pipeWidth + 'px';
    pipeDown.style.display='inline-block';

    pipe.append(pipeUp, window, pipeDown)
    return pipe;
}

function placePipes() {
    if (pipeDistance > Math.ceil(Math.random() * (pipeWidth * COL_COUNT - pipeWidth * 0.75) + pipeWidth * 0.75)) {
        pipeDistance = 0

        let pipe = createPipe(pipeHeight, pipeWidth, skyHeight, viewPortWidth)
        gameContent.append(pipe);
    }
    pipeDistance++;
    requestAnimationFrame(placePipes);
}

function moveWorld() {

    let pipe = document.querySelectorAll('.pipe');
    pipe.forEach((unit) => {

        let pipeProps = unit.getBoundingClientRect();

        if (pipeProps.right <= 0) {
            unit.remove();
        }

        unit.style.left = pipeProps.left - MOVE_SPEED + 'px';
    });

    requestAnimationFrame(moveWorld);
}

const ROW_COUNT = 10;
const COL_COUNT = 14;
const MOVE_SPEED = 2;

let viewPortHeight = window.innerHeight;
let viewPortWidth = window.innerWidth;
let earthHeight = viewPortHeight / ROW_COUNT;
let skyHeight = viewPortHeight - earthHeight;
let pipeWidth = viewPortWidth / COL_COUNT;
let pipeHeight = skyHeight;
let pipeDistance = 0
let sky = createSky(skyHeight, viewPortWidth);
let earth = createEarth(earthHeight, skyHeight, viewPortWidth);

let gameContent = document.createElement('div');
gameContent.append(sky, earth);

requestAnimationFrame(placePipes);
requestAnimationFrame(moveWorld);

document.body.append(gameContent)