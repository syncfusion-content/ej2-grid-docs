var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, },
    {
      field: 'CustomerID', headerText: 'Customer ID', width: 140,
      headerTemplate: ` <div>
            <span class="e-icon-userlogin"></span> 
            Customer ID
            </div>`,
    },
    { field: 'Freight', headerText: 'Freight', format: "C", width: 120, headerTemplate: ` <div id='Freight'></div>`, },
    {
      field: 'OrderDate', headerText: 'Order Date', textAlign: "Right", width: 120, format: 'yMd',
      headerTemplate: `<div><span id='OrderDate'></span>
        <label id='headerText' style='margin-left:8px'>Order Date</label>
        </div>`
    },
  ],
  height: 315
});
grid.appendTo('#Grid');

var dropdownData = ['Freight', 'Shipment', 'Cargo'];

var dropDownColumn = new ej.dropdowns.DropDownList({
  value: 'Freight',
  popupHeight: '200px',
  dataSource: dropdownData,
});
dropDownColumn.appendTo('#Freight');


var toggleButton = new ej.buttons.Switch({
  headerText: 'Order Date',
  change: onSwitchToggle,
});
toggleButton.appendTo('#OrderDate');

function onSwitchToggle(args) {
  headerText = args.checked ? 'Purchase Date' : 'Order Date';
  document.getElementById('headerText').innerHTML = headerText;
}  