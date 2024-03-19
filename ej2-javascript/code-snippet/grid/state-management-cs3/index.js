ej.base.enableVersionBasedPersistence(true);

var button1 = new ej.buttons.Button({ content: 'Version 1' });
button1.appendTo('#Version1');

var button2 = new ej.buttons.Button({ content: 'Version 2' });
button2.appendTo('#Version2');

var button3 = new ej.buttons.Button({ content: 'Version 3' });
button3.appendTo('#Version3');

document.getElementById('Version1').addEventListener('click', function () {
    clickHandler('v.1');
});

document.getElementById('Version2').addEventListener('click', function () {
    clickHandler('v.2');
});

document.getElementById('Version3').addEventListener('click', function () {
    clickHandler('v.3');
});

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    allowReordering: true,
    allowGrouping: true,
    enablePersistence: true,
    ej2StatePersistenceVersion: 'v.0',
    height: 315,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
});
grid.appendTo('#Grid');

function clickHandler(version) {
    grid.ej2StatePersistenceVersion = version;
    var persistedGridSettings = window.localStorage.getItem('gridOrderDetails' + grid.ej2StatePersistenceVersion);
    if (persistedGridSettings) {
        grid.setProperties(JSON.parse(persistedGridSettings));
        document.getElementById('message').innerText  = 'Grid state restored to ' + version;
    } else {
        var gridData = grid.getPersistData();
        window.localStorage.setItem('gridOrderDetails' + grid.ej2StatePersistenceVersion, gridData);
    }
}