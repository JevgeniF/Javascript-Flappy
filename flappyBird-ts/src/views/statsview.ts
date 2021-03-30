import UiElements from "../models/uielements";

export default function statsView(ui: UiElements) {

    let content = document.createElement('div');
    content.id = "stats";

    let name = ui.statsName();
    content.append(name)
    name.style.top = '5%'

    return content
}