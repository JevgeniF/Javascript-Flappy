export default class uiElements {

    constructor() {
        this.rowCount = 12;
        this.colCount = 14;
        this.groundHeight = innerHeight / this.rowCount;
        this.skyHeight = innerHeight - this.groundHeight;


        this.name();
        this.footer();
        this.gameButton();
        this.statButton();
        this.bird();
        this.createPipe()
        this.sky();
        this.ground();
        this.scoreScreen();
        this.gameOver()
        this.statsName()
        this.inputText()
        this.inputWindow()
        this.crash()
        this.yourScore()
    }


    //start screen
    name() {
        let name = new Image();
        name.classList.add('name');
        name.src = './name.png'
        name.style.height = innerHeight / this.rowCount * 5 + 'px';
        let nameWidth = innerWidth * 0.8
        name.style.width = innerWidth * 0.8 + 'px';
        name.style.position = 'fixed';
        name.style.top = '8%'
        name.style.left = innerWidth / 2 - nameWidth / 2 + 'px'

        return name;
    }

    footer() {
        let footer = new Image();
        footer.classList.add('footer');
        footer.src = './footer.png'
        footer.style.height = innerHeight / this.rowCount * 3 + 'px';
        let footerWidth = innerWidth * 0.45
        footer.style.width = footerWidth + 'px';
        footer.style.position = 'fixed';
        footer.style.top = '75%'
        footer.style.left = innerWidth / 2 - footerWidth / 2 + 'px'

        return footer;
    }

    statButton() {
        let statButton = new Image();
        statButton.id = 'stats';
        statButton.src = './stats.png'
        statButton.style.height = innerHeight * 0.1 + 'px';
        statButton.style.width = innerWidth * 0.2 + 'px';
        statButton.style.position = 'fixed';
        statButton.style.top = '60%'
        statButton.style.right = '25%'

        return statButton;
    }

    gameButton() {
        let gameButton = new Image();
        gameButton.id = 'game';
        gameButton.src = './start.png'
        gameButton.style.height = innerHeight * 0.1 + 'px';
        gameButton.style.width = innerWidth * 0.2 + 'px';
        gameButton.style.position = 'fixed';
        gameButton.style.top = '60%'
        gameButton.style.left = '25%'

        return gameButton;
    }

    //game screen
    counter(string = "ready") {
        let counter = new Image();
        counter.classList.add('counter')
        counter.src = './' + string + '.png'
        let counterHeight = innerHeight / this.rowCount * 1
        counter.style.height = counterHeight + 'px';
        let counterWidth = innerWidth * 0.5
        counter.style.width = counterWidth + 'px';
        counter.style.position = 'fixed';
        counter.style.top = innerHeight / 2 - counterHeight / 2 + 'px'
        counter.style.left = innerWidth / 2 - counterWidth / 2 + 'px'

        return counter;
    }

    crash() {
        let crash = document.createElement('audio')
        crash.src = './crash.wav'
        crash.setAttribute("preload", "auto");
        crash.setAttribute("controls", "none");
        crash.style.display = 'none'

        return crash;
    }

    music() {
        let music = document.createElement('audio')
        music.src = './music.mp3'
        music.id = 'music'
        music.setAttribute("preload", "auto");
        music.setAttribute("controls", "none");
        music.style.display = 'none'

        return music;
    }

    bird() {
        let bird = new Image();
        bird.classList.add('bird');
        bird.src = './bird.png';
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                bird.src = './flappingBird.png';
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.key === ' ') {
                bird.src = './bird.png';
            }
        });
        let birdHeight = this.skyHeight / this.rowCount * 0.5
        bird.style.height = birdHeight + 'px';
        let birdWidth = innerWidth / this.colCount * 0.5
        bird.style.width = birdWidth + 'px';
        bird.style.position = 'fixed'
        bird.style.top = this.skyHeight / 2 - birdHeight / 2 + 'px'
        bird.style.left = 0 + 'px'

        return bird
    }

    createPipe() {
        let pipe = document.createElement('div');
        pipe.classList.add('pipes')
        let pipeWidth = innerWidth / this.colCount
        pipe.style.minWidth = pipeWidth + 'px';
        pipe.style.maxWidth = pipeWidth + 'px';
        pipe.style.position = 'absolute';
        pipe.style.left = innerWidth + 'px';
        let pipeUpEnd = Math.random() * (this.skyHeight * 0.5 - this.skyHeight / this.rowCount) + this.skyHeight / this.rowCount
        let pipeDownEnd;
        let pipeUp = new Image()
        pipeUp.src = './upperPipe.png'
        pipeUp.classList.add('pipe');
        pipeUp.style.minHeight = pipeUpEnd + 'px';
        pipeUp.style.maxHeight = pipeUpEnd + 'px';
        pipeUp.style.minWidth = pipeWidth + 'px';
        pipeUp.style.maxWidth = pipeWidth + 'px';
        pipeUp.style.display = 'inline-block';

        let windowHeight = Math.ceil(Math.random() * (this.skyHeight * 0.5 - this.skyHeight / this.rowCount) + this.skyHeight / this.rowCount);
        let window = document.createElement('div')
        window.classList.add('window')
        window.style.minHeight = windowHeight + 'px';

        let pipeDown = new Image()
        pipeDown.src = './lowerPipe.png'
        pipeDown.classList.add('pipe');
        if (this.skyHeight - windowHeight - pipeUpEnd < 0) {
            pipeDownEnd = 0;
        } else {
            pipeDownEnd = this.skyHeight - windowHeight - pipeUpEnd;
        }
        pipeDown.style.minHeight = pipeDownEnd + 'px';
        pipeDown.style.maxHeight = pipeDownEnd + 'px';
        pipeDown.style.minWidth = pipeWidth + 'px';
        pipeDown.style.maxWidth = pipeWidth + 'px';
        pipeDown.style.display = 'inline-block';

        pipe.append(pipeUp, window, pipeDown)
        return pipe;
    }

    sky() {
        let sky = new Image();
        sky.classList.add('sky');
        sky.src = './sky.png'
        sky.style.height = this.skyHeight + 'px';
        sky.style.width = innerWidth + 'px';
        sky.style.position = 'absolute';

        return sky;
    }

    ground() {
        let ground = new Image();
        ground.classList.add('ground');
        ground.src = './ground.png';
        ground.style.height = this.groundHeight + 'px';
        ground.style.width = innerWidth + 'px';
        ground.style.position = 'absolute';
        ground.style.top = this.skyHeight + 'px'

        return ground
    }

    gameOver() {
        let gameOver = new Image();
        gameOver.src = './gameOver.png'
        gameOver.classList.add('endGame')
        gameOver.style.height = innerHeight / this.rowCount + 'px';
        gameOver.style.width = innerWidth * 0.5 + 'px';
        gameOver.style.position = 'fixed';
        gameOver.style.left = innerWidth / 2 - (innerWidth * 0.5) / 2 + 'px'
        gameOver.style.top = '20%'

        return gameOver
    }

    gameOverMessage() {
        let gameOverMessage = new Image();
        gameOverMessage.src = './gameOverMessage.png'
        gameOverMessage.classList.add('endGameMessage')
        gameOverMessage.style.height = innerHeight / this.rowCount + 'px';
        gameOverMessage.style.width = innerWidth * 0.5 + 'px';
        gameOverMessage.style.position = 'fixed';
        gameOverMessage.style.left = innerWidth / 2 - (innerWidth * 0.5) / 2 + 'px'
        gameOverMessage.style.top = '80%'


        return gameOverMessage
    }

    scoreScreen() {
        let scoreScreen = document.createElement('div')
        scoreScreen.classList.add('score')
        scoreScreen.style.position = 'absolute';
        scoreScreen.style.top = '8%'
        scoreScreen.style.right = '8%'
        scoreScreen.style.zIndex = '100'
        scoreScreen.style.fontSize = innerHeight / this.rowCount + 'px';
        scoreScreen.style.color = '#FFFFFF'
        scoreScreen.innerHTML = '0';

        return scoreScreen;
    }

    //stats
    statsName() {
        let statsName = new Image();
        statsName.classList.add('statsName');
        statsName.src = './statsName.png'
        statsName.style.height = innerHeight / this.rowCount + 'px';
        statsName.style.width = innerWidth * 0.5 + 'px';
        statsName.style.position = 'fixed';
        statsName.style.top = '8%'
        statsName.style.left = innerWidth / 2 - innerWidth * 0.5 / 2 + 'px'

        return statsName;
    }

    yourScore() {
        let yourScore = new Image();
        yourScore.classList.add('yourScore');
        yourScore.src = './yourScore.png'
        yourScore.style.height = innerHeight / this.rowCount * 0.5 + 'px';
        yourScore.style.width = innerWidth * 0.2 + 'px';
        yourScore.style.position = 'fixed';
        yourScore.style.top = '8%'
        yourScore.style.left = innerWidth / 2 - innerWidth * 0.2 / 2 + 'px'

        return yourScore;

    }

    statScore() {
        let statScore = document.createElement('div')
        statScore.classList.add('score')
        statScore.style.position = 'absolute';
        statScore.style.top = '8%'
        statScore.style.left = innerWidth / 2 - innerHeight / this.rowCount / 2 + 'px'
        statScore.style.zIndex = '100'
        statScore.style.fontSize = innerHeight / this.rowCount + 'px';
        statScore.style.color = '#FFFFFF'
        statScore.innerHTML = '0';

        return statScore;
    }

    inputText() {
        let inputText = document.createElement('div')
        inputText.classList.add('inputText')
        inputText.style.color = '#ffffff'
        inputText.fontSize = innerHeight / this.rowCount * 2 + 'px'
        inputText.style.position = 'fixed';
        inputText.style.top = '16%'
        inputText.style.left = "40%"

        return inputText;
    }

    inputWindow() {
        let inputWindow = document.createElement('div')
        inputWindow.style.color = '#ffffff'
        inputWindow.classList.add('inputWindow')
        let input = document.createElement('input')
        input.type = 'text'
        input.id = 'input'

        let button = document.createElement('button')
        button.type = 'button'
        button.id = 'add'
        button.textContent = 'I\'m the KING'
        inputWindow.append(input, button)

        inputWindow.fontSize = innerHeight / this.rowCount + 'px'
        inputWindow.style.position = 'fixed';
        inputWindow.style.top = '24%'
        inputWindow.style.left = "42%"

        return inputWindow;
    }

}