class Computer {

    constructor(model, manufacturer, price) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.price = price;
    }

}

const computers = [
    new Computer("MacBook Air 13\"", "Apple", "40000 UAH"),
    new Computer("IdeaPad Slim 5", "Lenovo", "25000 UAH"),
    new Computer("Laptop 17-cn2001ua", "HP", "26000 UAH"),
    new Computer("TUF Gaming F15", "ASUS", "30500 UAH")
];

function showTable() {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    
    computers.forEach(computer => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = computer.model;
        cell2.textContent = computer.manufacturer;
        cell3.textContent = computer.price;
    });
}
