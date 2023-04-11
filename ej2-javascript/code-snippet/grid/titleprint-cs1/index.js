ej.grids.Grid.Inject(ej.grids.Page,  ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    beforePrint: beforePrint,
    toolbar: ['Print'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 220
});
grid.appendTo('#Grid');

function beforePrint(args) {
    var div = document.createElement("Div") 
        div.innerHTML = "Title here"
        div.style.textAlign = 'center';
        div.style.color = 'red';
        div.style.padding = '10px 0';
        div.style.fontSize = '25px';
        args.element.insertBefore(div, args.element.childNodes[0]);
}

