var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Center', headerTemplate: '#orderID' },
        {
            headerText: 'Order Details', headerTemplate: '#orderDate',
            columns: [
                { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 130, textAlign: 'Right', minWidth: 10, },
                { field: 'Freight', headerText: 'Freight($)', width: 120, format: 'C1', textAlign: 'Right', minWidth: 10, },
            ]
        },
        {
            headerText: 'Ship Details',
            headerTemplate: '<div> <span>Ship Details</span><span>(<i class="fa fa-truck"></i>)</span></div>',
            columns: [
                { field: 'ShippedDate', headerText: 'Shipped Date', format: 'yMd', textAlign: 'Right', width: 150, minWidth: 10, },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150, minWidth: 10, },
            ]
        }]
});
grid.appendTo('#Grid');
var dropdownData = ['Order Details', 'Order Information'];
var dropdownList = new ej.dropdowns.DropDownList({
    value: 'Order Details',
    popupHeight: '200px',
    dataSource: dropdownData,
});
dropdownList.appendTo('#orderdate');