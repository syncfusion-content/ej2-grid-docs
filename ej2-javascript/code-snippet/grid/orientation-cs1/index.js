let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Center', customAttributes: { class: 'orientationcss' }, width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    created: setHeaderHeight,
    height: 240
});
grid.appendTo('#Grid');

function setHeaderHeight(args) {
    var textWidth = document.querySelector(".orientationcss > div").scrollWidth; // obtain the width of the headerText content.
    var headerCell = document.querySelectorAll(".e-headercell");
    for (var i = 0; i < headerCell.length; i++) {
        (headerCell.item(i)).style.height = textWidth + 'px'; // assign the obtained textWidth as the height of the headerCell.
    }
}

