export default class uiElements {

    constructor() {
        this.rowCount = 12;
        this.colCount = 14;
        this.groundHeight = innerHeight/this.rowCount;
        this.skyHeight = innerHeight - this.groundHeight;
        this.name();
        this.footer();
        this.gameButton();
        this.statButton();
        this.bird();
        this.sky();
        this.ground();
    }

    name() {
        let name = new Image();
        name.classList.add('name');
        name.src = './name.png'
        name.style.height = innerHeight / this.rowCount * 5 + 'px';
        name.style.width = innerWidth * 0.8 + 'px';
        name.style.position = 'fixed';
        name.style.top = '8%'
        name.style.left = '8%'

        return name;
    }

    footer() {
        let footer = new Image();
        footer.classList.add('footer');
        footer.src = './footer.png'
        footer.style.height = innerHeight / this.rowCount * 3 + 'px';
        footer.style.width = innerWidth * 0.45 + 'px';
        footer.style.position = 'fixed';
        footer.style.top = '75%'
        footer.style.left = '30%'

        return footer;
    }

    statButton() {
        let statButton = new Image();
        statButton.id = 'stats';
        statButton.src = './stats.png'
        statButton.style.height = 75 + 'px';
        statButton.style.width = 175 + 'px';
        statButton.style.position = 'fixed';
        statButton.style.top = '60%'
        statButton.style.left = '65%'

        return statButton;
    }

    gameButton() {
        let gameButton = new Image();
        gameButton.id = 'game';
        gameButton.src = './start.png'
        gameButton.style.height = 75 + 'px';
        gameButton.style.width = 175 + 'px';
        gameButton.style.position = 'fixed';
        gameButton.style.top = '60%'
        gameButton.style.left = '27%'

        return gameButton;
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
}