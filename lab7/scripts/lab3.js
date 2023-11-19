function trim() {
    const divs = document.querySelectorAll(".div-with-text");
    
    for (const div of divs) {
        const text = div.textContent.trim(); 
        const trimmedText = text.slice(0, 10) + "...";

        div.textContent = trimmedText;
    }
}

function max() {
    const cells = document.querySelectorAll('.styled-table td');

    let max = -Infinity;
    let maxCell;

    cells.forEach(cell => {
        const cellValue = parseInt(cell.textContent);

        if (!isNaN(cellValue) && cellValue > max) {
            max = cellValue;
            maxCell = cell;
        }
    });

    // Highlight the cell with the maximum value
    if (maxCell) {
        maxCell.style.backgroundColor = 'red';
    }
}

