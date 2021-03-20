import mainView from "./views/mainview";
import uiElements from "./ui/uielements";
import startView from "./views/startview";

let ui = new uiElements();
let view = mainView();
let start = startView(ui, gameControlClick);


let sky = ui.sky();
let ground = ui.ground();

view.append(sky, ground, start)
document.body.append(view)

function gameControlClick(e) {
    switch (e.target.id) {
        case 'game':
            console.log('game')
            break;
        case 'stats':
            console.log('stats')
            break;
    }
}