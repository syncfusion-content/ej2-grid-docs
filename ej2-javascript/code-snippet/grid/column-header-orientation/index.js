let customAttributes = { class: 'orientationcss' };
var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  created: setHeaderHeight,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 100,
    },
    {
      field: 'CustomerID',
      headerText: 'Customer ID',
      width: 120,
    },
    {
      field: 'Freight',
      textAlign: 'center',
      format: 'C2',
      customAttributes: customAttributes,
      width: 80,
    },
    {
      field: 'ShipCity',
      headerText: 'Ship City',
      width: 100,
      format: 'yMd',
    },
  ],
  height: 240, 
});
grid.appendTo('#Grid');

function setHeaderHeight() {
  var textWidth = document.querySelector('.orientationcss > div').scrollWidth;
  var  headerCell = document.querySelectorAll('.e-headercell');
  for (let i = 0; i < headerCell.length; i++) {
    // Assign the obtained textWidth as the height of the headerCell.
    headerCell.item(i).style.height = textWidth + 'px';
  }
}

