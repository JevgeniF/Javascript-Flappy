import UiElements from "../models/uielements";
import ScoreBoard from "../models/scoreboard";

export  default class StatController {

    getStats(statsView: any, ui: UiElements, scoreBoard: ScoreBoard) {

        if (scoreBoard.third != null) {
            let birdC = ui.bird()
            birdC.style.left = innerWidth / 2 - innerWidth / ui.colCount * 0.5 / 2 + 'px';
            birdC.style.top = '50%'
            statsView.append(birdC)
            let keys = []
            for (let k in scoreBoard.third) {
                if (scoreBoard.third.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
            let scoreC = ui.statScore()
            scoreC.style.top = '53%'
            scoreC.innerHTML = keys[0] + ': ' + scoreBoard.third[keys[0]]
            statsView.append(scoreC)
        }
        if (scoreBoard.second != null) {
            let birdB = ui.bird()
            birdB.style.left = innerWidth / 2 - innerWidth / ui.colCount * 0.5 / 2 + 'px';
            birdB.style.top = '35%'
            statsView.append(birdB)
            let keys = []
            for (let k in scoreBoard.second) {
                if (scoreBoard.second.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
            let scoreB = ui.statScore()
            scoreB.style.top = '38%'
            scoreB.innerHTML = keys[0] + ': ' + scoreBoard.second[keys[0]]
            statsView.append(scoreB)
        }
        if (scoreBoard.first != null) {
            let birdA = ui.bird()
            birdA.style.left = innerWidth / 2 - innerWidth / ui.colCount * 0.5 / 2 + 'px';
            birdA.style.top = '20%'
            statsView.append(birdA)
            let keys = []
            for (let k in scoreBoard.first) {
                if (scoreBoard.first.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
            let scoreA = ui.statScore()
            scoreA.style.top = '23%'
            scoreA.innerHTML = keys[0] + ': ' + scoreBoard.first[keys[0]]
            statsView.append(scoreA)
        }

        let message = ui.gameOverMessage()
        statsView.append(message)
    }

}