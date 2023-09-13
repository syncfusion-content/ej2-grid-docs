var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right',
    },
    {
      field: 'CustomerID',
      headerText: 'Customer ID',
      headerTemplate: ` <div>
          <span class="e-icon-userlogin"></span> 
          Customer ID
          </div>`,
      width: 140,
    },
    {
      field: 'Freight',
      headerText: 'Freight',
      width: 120,
      headerTemplate: ` <div id='Freight'></div>`,
    },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 240,
      format: 'yMd',
      headerTemplate: `<div><span id='OrderDate'></span>
      <label id='headerText' style='margin-left:8px'>Order Date</label>
      </div>`,
    },
  ],
});
grid.appendTo('#Grid');

var dropdownData = ['Freight', 'Shipment', 'Cargo'];

let dropDown = new ej.dropdowns.DropDownList({
  value: 'Freight',
  popupHeight: '200px',
  dataSource: dropdownData,
});
dropDown.appendTo('#Freight');


var switchObj = new ej.buttons.Switch({
  headerText: 'Order Date',
  change: change,
});
switchObj.appendTo('#OrderDate');

function change(args) {
  headerText = args.checked ? 'Purchase Date' : 'Order Date';
  document.getElementById('headerText').innerHTML = headerText;
}
