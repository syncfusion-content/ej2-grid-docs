var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120 },
    { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2' },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 120 },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      type: 'date',
      format: 'yMd',
      width: 120
    },
  ],
});
grid.appendTo('#Grid');

let columnDescriptions = {
  'Order ID': 'A unique number assigned to each order.',
  'Freight': 'The cost of shipping the order.',
  'Ship Name':
    'The name of the person or company who will receive the shipment.',
  'Ship Country': 'The country to which the shipment will be sent.',
  'Order Date': 'The date when the order was placed.',
};

var tooltip = new ej.popups.Tooltip({
  beforeRender: beforeRender,
  target: '.e-headertext',
});
tooltip.appendTo('#tooltip');

function beforeRender(args) {
  const description = columnDescriptions[args.target.innerText];
  if (description) {
    tooltip.content = args.target.innerText + ': ' + description;
  }
}
