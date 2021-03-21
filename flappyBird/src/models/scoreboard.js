export default class ScoreBoard {
    constructor() {
        this.first = JSON.parse(localStorage.getItem('first'))
        this.second = JSON.parse(localStorage.getItem('second'))
        this.third = JSON.parse(localStorage.getItem('third'))
        this.yours = JSON.parse(localStorage.getItem('yours'))
    }

    ifKingBirdy (gameView, ui, score) {
        let yourScoreStr = ui.yourScore()
        yourScoreStr.style.top = '35%'
        let yourScore = ui.statScore()
        yourScore.style.top = '40%'
        let inputText = ui.inputText()
        inputText.innerHTML = 'Hail the new King Birdy! Please enter your name:'
        inputText.style.top = '50%'
        let input = ui.inputWindow()
        input.style.top = '55%'
        yourScore.innerHTML = score
        localStorage.setItem('yours', score)
        
        let first = 0
        let second = 0
        let third = 0
        if (this.first) {
            for (let k in this.first) {
                if (first <= this.first[k]) {
                    first = this.first[k]
                };
            }
        }
        console.log(first)
        if (this.second) {
            for (let k in this.second) {
                if (second <= this.second[k]) {
                    second = this.second[k]
                };
            }
        }
        console.log(second)
        if (this.third) {
            for (let k in this.third) {
                if (third <= this.third[k]) {
                    third = this.third[k]
                };
            }
        }
        console.log(third)

        if (score != null) {
            if (score >= first) {
                console.log('first case')
                gameView.append(yourScoreStr, yourScore, inputText, input)
                addEventListener('click', (e) => {
                    if (e.target.id === 'add') {
                        let name = document.getElementById('input').value
                        let newScore = {}
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
                    if (e.target.id === 'add') {
                        let name = document.getElementById('input').value
                        let newScore = {}
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
                    if (e.target.id === 'add') {
                        let name = document.getElementById('input').value
                        let newScore = {}
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