var grid = new ej.grids.Grid({
    dataSource: orderDetails,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
      ],
      rowHeight: 42,
      height: 280,
});
grid.appendTo('#Grid');

var smallHeightButton = new ej.buttons.Button({ cssClass: 'e-small' }, '#small');
var mediumHeightButton = new ej.buttons.Button({ cssClass: 'e-small' }, '#medium');
var bigHeightButton = new ej.buttons.Button({ cssClass: 'e-small' }, '#big');

document.getElementById('changeHeight').onclick=function(args)
{
 var heightRow={small: 20, medium: 40, big: 60};
  grid.rowHeight = (heightRow)[args.target.id];
}