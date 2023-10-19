ej.grids.Grid.Inject(ej.grids.Page);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  pageSettings: { pageSize: 10 },
  actionComplete: actionComplete,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150,textAlign: 'Right' },
    { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
  ],
  height: 315,
});
grid.appendTo('#Grid');

let mod;
let value;

let dropdownData = [
  { text: 'Select row index' },
  { text: '1', value: '1' },
  { text: '2', value: '2' },
  { text: '30', value: '30' },
  { text: '80', value: '80' },
  { text: '110', value: '110' },
  { text: '120', value: '120' },
  { text: '210', value: '210' },
  { text: '310', value: '310' },
  { text: '410', value: '410' },
  { text: '230', value: '230' }
];

let dropdown = new ej.dropdowns.DropDownList({
  value:'Select row index' ,
  popupHeight: '240px',
  width: 170,
  dataSource: dropdownData,
  change: valueChange,
});
dropdown.appendTo('#dropdown');

function actionComplete(args)
{
  if (args.requestType === "paging") {
    grid.selectRow(mod);
  }
}

function valueChange(args)
{
  value = +args.value;
    mod = (value - 1) % 10;
    let page = Math.ceil(value / 10);

    if (page === 1) {
      if (grid.pagerModule.pagerObj.currentPage != 1) {
        grid.pagerModule.goToPage(1);
      }
      grid.selectRow(mod);
    }
    else {
      grid.pagerModule.goToPage(page);
      if (grid.pagerModule.pagerObj.currentPage == page) {
        grid.selectRow.mod;
      }
    }
}