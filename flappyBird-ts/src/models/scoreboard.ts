import UiElements from "./uielements";

export default class ScoreBoard {
    first: any;
    second: any;
    third: any;
    private yours: any;

    constructor() {
        this.first = JSON.parse(<string>localStorage.getItem('first'))
        this.second = JSON.parse(<string>localStorage.getItem('second'))
        this.third = JSON.parse(<string>localStorage.getItem('third'))
        this.yours = JSON.parse(<string>localStorage.getItem('yours'))
    }

    ifKingBirdy (gameView: any, ui: UiElements, score: number) {
        let yourScoreStr = ui.yourScore()
        yourScoreStr.style.top = '35%'
        let yourScore = ui.statScore()
        yourScore.style.top = '40%'
        let inputText = ui.inputText()
        inputText.innerHTML = 'Hail the new King Birdy! Please enter your name:'
        inputText.style.top = '50%'
        let input = ui.inputWindow()
        input.style.top = '55%'
        yourScore.innerHTML = String(score)
        localStorage.setItem('yours', String(score))

        let first = 0
        let second = 0
        let third = 0
        if (this.first) {
            for (let k in this.first) {
                if (this.first.hasOwnProperty(k)) {
                    if (first <= this.first[k]) {
                        first = this.first[k]
                    }
                }
            }
        }
        console.log(first)
        if (this.second) {
            for (let k in this.second) {
                if (this.second.hasOwnProperty(k)) {
                    if (second <= this.second[k]) {
                        second = this.second[k]
                    }
                }
            }
        }
        console.log(second)
        if (this.third) {
            for (let k in this.third) {
                if (this.third.hasOwnProperty(k)) {
                    if (third <= this.third[k]) {
                        third = this.third[k]
                    }
                }
            }
        }
        console.log(third)

        if (score != null) {
            if (score >= first) {
                console.log('first case')
                gameView.append(yourScoreStr, yourScore, inputText, input)
                addEventListener('click', (e) => {
                    // @ts-ignore
                    if (e.target.id === 'add') {
                        // @ts-ignore
                        let name = document.getElementById('input').value
                        let newScore = {}
                        // @ts-ignore
                        newScore[name] = score;
                        let json = JSON.stringify(newScore)
                        if (first > 0) {
                            localStorage.setItem('third', JSON.stringify(this.second))
                            localStorage.setItem('second', JSON.stringify(this.first))
                        }
                        localStorage.setItem("first", json);
                        localStorage.removeItem('yours')
                    }
                })
                return;
            }
            if (score >= second) {
                console.log('second case')
                gameView.append(yourScoreStr, yourScore, inputText, input)
                addEventListener('click', (e) => {
                    // @ts-ignore
                    if (e.target.id === 'add') {
                        // @ts-ignore
                        let name = document.getElementById('input').value
                        let newScore = {}
                        // @ts-ignore
                        newScore[name] = score;
                        let json = JSON.stringify(newScore)
                        if (second > 0) {
                            localStorage.setItem('third', JSON.stringify(this.second))
                        }
                        localStorage.setItem("second", json);
                        localStorage.removeItem('yours')
                    }
                })
                return;
            }
            if (score >= third) {
                console.log('third case')
                gameView.append(yourScoreStr, yourScore, inputText, input)
                addEventListener('click', (e) => {
                    // @ts-ignore
                    if (e.target.id === 'add') {
                        // @ts-ignore
                        let name = document.getElementById('input').value
                        let newScore = {}
                        // @ts-ignore
                        newScore[name] = score;
                        let json = JSON.stringify(newScore)
                        localStorage.setItem("third", json);
                        localStorage.removeItem('yours')
                    }
                })
                return;
            }
        }
    }
}