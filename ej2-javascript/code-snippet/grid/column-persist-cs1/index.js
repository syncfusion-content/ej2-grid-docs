var grid = new ej.grids.Grid({
    dataSource: data,
    enablePersistence: true,
    allowFiltering: true,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, headerTemplate: '#customertemplate' },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150, template: '#template'},
    ],
    height: 230
});
grid.appendTo('#Grid');

document.getElementById('restore').onclick = function () {
    savedProperties = JSON.parse(grid.getPersistData());
    var gridColumnsState = Object.assign([], grid.getColumns());
    savedProperties.columns.forEach(function (col) {
        var headerText = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['headerText'];
        var colTemplate = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['template'];
        var headerTemplate = gridColumnsState.find(function (colColumnsState) { return colColumnsState.field === col.field; })['headerTemplate'];
        col.headerText = 'Text Changed';
        col.template = colTemplate;
        col.headerTemplate = headerTemplate;
    });
    console.log(savedProperties);
    grid.setProperties(savedProperties);
};

