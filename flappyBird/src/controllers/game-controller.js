export default class GameController {

    constructor() {
    }

    counter(ui) {
        let counter = ui.counter('ready');
        document.body.append(counter)
        setTimeout(function () {
            document.body.removeChild(counter)
        }, 1000)
        setTimeout(function () {
            counter = ui.counter('fly')
            document.body.append(counter)
        }, 1000)
        setTimeout(function () {
            document.body.removeChild(counter)
        }, 2000)
    }

    start(gameView, ui, scoreBoard) {

        let isGame = true;
        let score = 0;
        let currentScore = ui.scoreScreen()
        gameView.append(currentScore)
        let animationSpeed = 3;
        let gravity = 0.3;

        let bird = ui.bird();
        gameView.append(bird);
        let birdProps = bird.getBoundingClientRect();

        let music = ui.music()
        document.body.append(music)
        music.play().then(r => null)

        function move() {
            if (isGame === false) {
                let crash = ui.crash()
                document.body.append(crash)
                crash.play().then(r => null)
                music.pause()
                let endGame = ui.gameOver();
                let message = ui.gameOverMessage()
                scoreBoard.ifKingBirdy(gameView, ui, score)
                gameView.append(endGame, message)
                return;
            }

            let pipes = document.querySelectorAll('.pipes')
            pipes.forEach((e) => {
                let pipesProps = e.getBoundingClientRect()

                if (pipesProps.right <= 0) {
                    e.remove()
                    score += 1
                    currentScore.innerHTML = score.toString()
                }
                e.style.left = pipesProps.left - animationSpeed + 'px';

                if (
                    pipesProps.right < birdProps.left &&
                    pipesProps.right +
                    animationSpeed >= birdProps.left) {

                }

            });

            let obstacle = document.querySelectorAll('.pipe')
            obstacle.forEach((e) => {
                let obstacleProps = e.getBoundingClientRect()
                let birdProps = bird.getBoundingClientRect();

                if (
                    birdProps.left < obstacleProps.left + obstacleProps.width &&
                    birdProps.left + birdProps.width > obstacleProps.left &&
                    birdProps.top < obstacleProps.top + obstacleProps.height &&
                    birdProps.top + birdProps.height > obstacleProps.top
                ) {
                    isGame = false;
                    return;
                }
            });
            requestAnimationFrame(move)
        }

        requestAnimationFrame(move)

        let birdFlyHeight = 0;

        function birdFly() {
            if (isGame === false) {
                return;
            }
            birdFlyHeight = birdFlyHeight + gravity
            document.addEventListener('keydown', (e) => {
                if (e.key === ' ') {
                    birdFlyHeight = -5
                }
            });

            if (birdProps.top <= 0 ||
                birdProps.bottom >= innerHeight - innerHeight / ui.rowCount) {
                isGame = false
                return;
            }

            bird.style.top = birdProps.top + birdFlyHeight + 'px'
            birdProps = bird.getBoundingClientRect()

            requestAnimationFrame(birdFly)
        }

        requestAnimationFrame(birdFly)

        let pipeDistance = 0;

        function createPipe() {
            if (isGame === false) {
                return;
            }

            if (pipeDistance > Math.ceil(Math.random() * (innerWidth - innerWidth / ui.colCount * 0.9) + innerWidth / ui.colCount * 0.9)) {
                pipeDistance = 0

                let pipe = ui.createPipe()
                gameView.append(pipe)
            }
            pipeDistance++;
            requestAnimationFrame(createPipe)
        }

        requestAnimationFrame(createPipe)

        return isGame;
    }
}