let customAttributes = { class: 'orientationcss' };
var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 100,
      textAlign: 'Right',
    },
    {
      field: 'CustomerID',
      headerText: 'Customer ID',
      width: 120,
    },
    {
      field: 'Freight',
      customAttributes: customAttributes,
      width: 80,
      format: 'C2',
      textAlign: 'center',
    },
    {
      field: 'ShipCity',
      headerText: 'Ship City',
      width: 100,
      format: 'yMd',
    },
  ],
  pageSettings: { pageCount: 5 },
  created: setHeaderHeight,
});
customAttributes = { class: 'orientationcss' };
grid.appendTo('#Grid');
function setHeaderHeight() {
  var textWidth = document.querySelector('.orientationcss > div').scrollWidth;
  var  headerCell = document.querySelectorAll('.e-headercell');
  for (let i = 0; i < headerCell.length; i++) {
    // Assign the obtained textWidth as the height of the headerCell.
    headerCell.item(i).style.height = textWidth + 'px';
  }
}

