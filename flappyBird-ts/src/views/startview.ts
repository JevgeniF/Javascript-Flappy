import UiElements from "../models/uielements";

export default function startView(ui: UiElements, eventHandler: EventHandlerNonNull) {

    let content = document.createElement('div');
    content.id = "start";

    let name = ui.name();

    let bird = ui.bird();
    bird.style.left = innerWidth / 2 - innerWidth / ui.colCount * 0.5 / 2 + 'px';

    let gameButton = ui.gameButton()
    let statButton = ui.statButton()

    let footer = ui.footer();


    content.append(gameButton, statButton, name, bird, footer);
    gameButton.addEventListener('click', eventHandler);
    statButton.addEventListener('click', eventHandler);
    return content;
}