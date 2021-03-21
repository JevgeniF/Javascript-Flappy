export default function statsView(uiElements, eventHandler) {

    let content = document.createElement('div');
    content.id = "stats";

    let name = uiElements.statsName();
    content.append(name)
    name.style.top = '5%'

    return content
}