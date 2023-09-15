
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowResizing: true,
    pageSettings: { pageCount: 5 },
    columns: [
        { 
            field: 'OrderID', 
            headerText: 'Order ID', 
            textAlign: 'Right', 
            width: 120, 
            headerTemplate: '#orderID' 
        },
        {
            headerText: 'Order Details', 
            headerTemplate: '#orderDate', 
            columns: [
                { 
                    field: 'OrderDate', 
                    headerText: 'Order Date', 
                    textAlign: 'Right', 
                    width: 135, 
                    format: 'yMd', 
                },
                { 
                    field: 'Freight', 
                    headerText: 'Freight($)', 
                    textAlign: 'Right', 
                    width: 120, 
                    format: 'C2', 
                },
            ]
        },
        {
            headerText: 'Ship Details', 
            headerTemplate: '<div> <span>Ship Details</span><span>(<i class="fa fa-truck"></i>)</span></div>',
            columns: [
                { 
                    field: 'ShippedDate', 
                    headerText: 'Shipped Date', 
                    textAlign: 'Right', 
                    width: 145, 
                    format: 'yMd',
                },
                { 
                    field: 'ShipCountry', 
                    headerText: 'Ship Country', 
                    width: 140, 
                },
            ]
        }
    ]
});
grid.appendTo('#Grid');
let dropdownData = ['Order Details', 'Order Information'];
let dropdownList = new ej.dropdowns.DropDownList({
    value: 'Order Details',
    popupHeight: '200px',
    dataSource: dropdownData,
});
dropdownList.appendTo('#orderdate');