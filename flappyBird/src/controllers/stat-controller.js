export default class StatController {

    constructor() {
        this.currentScore = localStorage.getItem('currentScore')
        this.topTen = localStorage.getItem('topTen')
    }

    getStats(statsView, ui) {

        let score;
        if(this.currentScore != null) {
            score = JSON.parse(this.currentScore)[0]
            let keys = []
            for (let k in score) keys.push(k);
            score = score[keys[0]]
        }

        let playerName;

        if (this.topTen == null && this.currentScore != null) {
            let inputText = ui.inputText()
            inputText.innerHTML = 'You can get in top! Please enter your name:'
            statsView.append(inputText)
            let input = ui.inputWindow()
            statsView.append(input);
            addEventListener('click', (e) => {
                if (e.target.id === 'add') {
                    playerName = document.getElementById('input').value
                    let newTop = {}
                    newTop[0] = [playerName, score]
                    let json = JSON.stringify(newTop)
                    localStorage.setItem("topTen", json);
                    localStorage.removeItem('currentScore')
                }
            })
        } else {
            if (this.topTen != null) {
                let top = JSON.parse(this.topTen)
                let keys = []
                for (let k in top) keys.push(k);
                console.log(keys)
                console.log(top[keys[keys.length -1]][1])
                if (keys.length < 10 && score >= 0) {
                    if (score < top[keys[keys.length - 1]][1]) {
                        let inputText = ui.inputText()
                        inputText.innerHTML = 'You can get in top! Please enter your name:'
                        statsView.append(inputText)
                        let input = ui.inputWindow()
                        statsView.append(input);
                        addEventListener('click', (e) => {
                            if (e.target.id === 'add') {
                                playerName = document.getElementById('input').value
                                top[parseInt(keys[keys.length - 1]) + 1] = [playerName, score];
                                let json = JSON.stringify(top)
                                localStorage.setItem("topTen", json);
                                localStorage.removeItem('currentScore')
                            }
                        })
                    }
                }
            }
        }
    }

}