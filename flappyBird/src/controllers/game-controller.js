export default class GameController {

    constructor() {
    }

    start(gameView, ui) {

        let isGame = true;
        let score = 0;
        let currentScore = ui.scoreScreen()
        let endGame = ui.endGame()
        gameView.append(currentScore)

        let animationSpeed = 3;
        let gravity = 0.3;

        let bird = ui.bird();
        gameView.append(bird);
        let birdProps = bird.getBoundingClientRect();

        function move() {
            if (isGame === false) {
                gameView.append(endGame)
                let curScore = [{'currentScore': score}]
                let json = JSON.stringify(curScore)
                localStorage.setItem("currentScore", json)
                return;
            }

            let pipes = document.querySelectorAll('.pipes')
            pipes.forEach((e) => {
                let pipesProps = e.getBoundingClientRect()

                if (pipesProps.right <= 0) {
                    e.remove()
                }
                e.style.left = pipesProps.left - animationSpeed + 'px';

                if (
                    pipesProps.right < birdProps.left &&
                    pipesProps.right +
                    animationSpeed >= birdProps.left) {
                    score += 1;
                    currentScore.innerHTML = score.toString();
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