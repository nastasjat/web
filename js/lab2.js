function showApartmentInfo() {
    document.getElementById('info').innerHTML = "Номери квартир: від 1 до 108";
}

function showEntranceInfo() {
    document.getElementById('info').innerHTML = "Номери під'їздів: від 1 до 3";
}
        
function showFloorInfo() {
    document.getElementById('info').innerHTML = "Номери поверхів: від 1 до 9";
}

function hide() {
    document.getElementById('info').innerHTML = "";
}

function check() {
    var apartment = document.getElementById('apartment').value;
    var entrance = document.getElementById('entrance').value;
    var floor = document.getElementById('floor').value;

    var isValid = true;
    var errorMessage = '';

    if (entrance < 1 || entrance > 3) {
        isValid = false;
        errorMessage += 'Номер під\'їзду повинен бути від 1 до 3. ';
    } else {
        var apartmentStart = (entrance - 1) * 36 + 1 + (floor - 1) * 4;
        var apartmentEnd = apartmentStart + 3;

        if (apartment < apartmentStart || apartment > apartmentEnd) {
            isValid = false;
            errorMessage += 'Некоректний номер квартири для обраного поверху та під\'їзду. ';
        }
    }

    if (floor < 1 || floor > 9) {
        isValid = false;
        errorMessage += 'Номер поверху повинен бути від 1 до 9. ';
    }

    if (isValid) {
        document.getElementById('result').innerHTML = 'Введені дані коректні.';
    } else {
        document.getElementById('result').innerHTML = errorMessage;
    }
}