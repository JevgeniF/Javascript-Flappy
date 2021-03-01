console.log('CAR-DRIVE');

function animate(rowIndex) {
    setTimeout(() => {
        let child = content.lastElementChild;
        if (child != null) {

            let pathPosition = 7;

            if (content.firstElementChild != null) {
                pathPosition = Number(content.firstElementChild.dataset.pathPosition);
                let pathChange = Math.random() * (PATH_WIDTH - 2);
                pathChange = Math.ceil(Math.random() * 2 - 1.5) * pathChange;
                if (pathPosition + pathChange > 0 && pathPosition + pathChange < COL_COUNT - PATH_WIDTH) {
                    pathPosition = pathPosition + pathChange;
                }
            }

            let rowElem = createRow(rowHeight, rowIndex, pathPosition, PATH_WIDTH)

            child.remove();
            content.prepend(rowElem);
            rowIndex++;
            if (rowIndex < 500) {
                animate(rowIndex);
            }
        }
    }, 50)
}

function createRow(rowHeight, rowId, pathPosition, pathWidth) {
    let rowElem = document.createElement('div');
    rowElem.classList.add('row-' + rowId);

    rowElem.style.minHeight = rowHeight + 'px';
    rowElem.style.maxHeight = rowHeight + 'px';

    rowElem.dataset.pathPosition = pathPosition;

    for (let colIndex = 0; colIndex < COL_COUNT ; colIndex++) {
        let colElem = document.createElement('div');
        colElem.classList.add('id-row-'+rowId+'-col-'+colIndex);
        if (colIndex < pathPosition) {
            colElem.style.backgroundColor = '#FF0000'
        } else if (colIndex >= pathPosition + pathWidth) {
            colElem.style.backgroundColor = '#0000FF'
        } else {
            colElem.style.backgroundColor = '#ffffff'
        }
        colElem.style.minWidth = colWidth + 'px';
        colElem.style.display='inline-block';
        colElem.style.minHeight = rowHeight + 'px';
        rowElem.append(colElem);
    }
    return rowElem;
}

const ROW_COUNT = 40;
const COL_COUNT = 20;

const PATH_WIDTH = 5;

let viewPortHeight = window.innerHeight
let viewPortWidth = window.innerWidth

let rowHeight = viewPortHeight / ROW_COUNT;
let colWidth = viewPortWidth / COL_COUNT;

let content = document.createElement('div');

for (let index = 0; index < ROW_COUNT; index++) {
    let pathPosition = 7;

    if (content.firstElementChild != null) {
        pathPosition = Number(content.firstElementChild.dataset.pathPosition);
        let pathChange = Math.random() * (PATH_WIDTH - 2);
        pathChange = Math.ceil(Math.random() * 2 - 1.5) * pathChange;
        pathPosition = pathPosition + pathChange;
    }

    let rowElem = createRow(rowHeight, index, pathPosition, PATH_WIDTH)
    content.append(rowElem)
}

document.body.append(content);

let rowIndex = 100;
animate(rowIndex);


