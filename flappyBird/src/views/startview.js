export default function startView(uiElements, eventHandler) {

    let content = document.createElement('div');
    content.id = "start";

    let name = uiElements.name();

    let bird = uiElements.bird();
    bird.style.left = innerWidth / 2 - innerWidth / uiElements.colCount * 0.5 / 2 + 'px';

    let gameButton = uiElements.gameButton()
    let statButton = uiElements.statButton()

    let footer = uiElements.footer();


    content.append(gameButton, statButton, name, bird, footer);
    gameButton.addEventListener('click', eventHandler);
    statButton.addEventListener('click', eventHandler);
    return content;
}