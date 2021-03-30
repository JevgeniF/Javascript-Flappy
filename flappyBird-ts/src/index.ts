import UiElements from "./models/uielements";
import mainView from "./views/mainview";
import gameView from "./views/gameview";
import statsView from "./views/statsview";
import startView from "./views/startview";
import GameController from "./controllers/game-controller";
import StatController from "./controllers/stat-controller";
import ScoreBoard from "./models/scoreboard";

let ui = new UiElements();

let view = mainView();
let game_view = gameView();
let stats_view = statsView(ui)
let start_view = startView(ui, gameControlClick);

let gameController = new GameController()
let statController = new StatController()
let scoreBoard = new ScoreBoard()


let sky = ui.sky();
let ground = ui.ground();

view.append(sky, ground, start_view)
document.body.append(view)

function gameControlClick(e: any) {

    switch (e.target.id) {
        case 'game':
            view.removeChild(start_view);
            view.append(game_view)
            gameController.counter(ui);
            setTimeout(function () {
                gameController.start(game_view, ui, scoreBoard)
            }, 2500)
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    location.reload();
                    return false;
                }
            });
            break;
        case 'stats':
            console.log('stats')
            view.removeChild(start_view);
            view.append(stats_view);
            statController.getStats(stats_view, ui, scoreBoard)
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    location.reload();
                    return false;
                }
            });
            break;
    }
}