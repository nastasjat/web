var bdaysArr = [];

bdaysArr[1] = {
    name: 'Jem',
    date: '30/11/2023',
};

bdaysArr[2] = {
    name: 'Ania',
    date: '22/11/2023',
    phone: '+380975558025',
};

bdaysArr[3] = {
    name: 'Ira',
    date: '25/11/2023',
};


bdaysArr[4] = {
    name: 'Andrii',
    date: '18/11/2023',
    phone: '+380685547961',
};

bdaysArr[5] = {
    name: 'Oksana',
    date: '21/11/2023',
    phone: '+380683457986',
};

var html = "";

function calculateDaysLeft(birthday) {
    var today = new Date();
    var bdayComponents = birthday.split('/');
    var bdayDate = new Date(today.getFullYear(), bdayComponents[1] - 1, bdayComponents[0]);

    var timeDiff = Math.abs(today.getTime() - bdayDate.getTime());
    var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24) - 1);
    return daysLeft;
}

function generateOutput(item, i, array) {
    var bday = item['date'];
    var daysLeft = calculateDaysLeft(bday);
    var message = "";

    if (daysLeft == 2) {
        html = html + "<tr>"; 
        message = "Надіслати листівку!";
    } else if (daysLeft == 0) {
        html = html + "<tr>"; 
        message = "Подзвонити привітати!";
    }

    if (!item.phone) {
        html = html + "<tr'>"; 
        item['phone'] = "<span style='color: #ff8742;'>Немає номеру тел.</span>";
    }

    for (var key in item) {
        html = html + "<td>" + item[key] + "</td>";
    }
    html = html + "<td>" + message + "</td>";
    html = html + "</tr>"
}

function result() {
    html="<table class='styled-table'>";
    html=html+"<tr><td>Ім'я</td>"+"<td>Дата народження</td><td>Номер телефону</td><td>Повідомлення</td></tr>";
    bdaysArr.forEach(generateOutput);
    html=html+"</table>";
    document.getElementById('result').innerHTML=html;
}
