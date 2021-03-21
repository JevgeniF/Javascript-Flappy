import mainView from "./views/mainview";
import uiElements from "./models/uielements";
import startView from "./views/startview";
import GameController from "./controllers/game-controller";
import gameView from "./views/gameview";
import statsView from "./views/statsview";
import StatController from "./controllers/stat-controller";

let ui = new uiElements();

let view = mainView();
let game_view = gameView();
let stats_view = statsView(ui, gameControlClick)
let start_view = startView(ui, gameControlClick);

let gameController = new GameController()
let statController = new StatController()


let sky = ui.sky();
let ground = ui.ground();

view.append(sky, ground, start_view)
document.body.append(view)

function gameControlClick(e) {
    switch (e.target.id) {
        case 'game':
            view.removeChild(start_view);
            view.append(game_view)
            setTimeout(function () {
                gameController.start(game_view, ui)
            }, 3000)

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    view.removeChild(game_view)
                    game_view = gameView()
                    view.append(start_view)
                }
            });
            break;
        case 'stats':
            console.log('stats')
            view.removeChild(start_view);
            view.append(stats_view);
            statController.getStats(stats_view, ui)

            break;
    }
}