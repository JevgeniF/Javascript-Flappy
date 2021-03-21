export default function statsView(uiElements, eventHandler) {

    let content = document.createElement('div');
    content.id = "stats";

    let name = uiElements.statsName();
    content.append(name)

    return content
}