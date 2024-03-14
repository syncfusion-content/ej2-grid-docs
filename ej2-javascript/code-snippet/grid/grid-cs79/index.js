loadLocalizationData();
function loadLocalizationData() {
    var fetch = new ej.base.Fetch('./locale.json', 'GET', false);
    fetch.onSuccess = function(arAELocalization) {
      ej.base.L10n.load(arAELocalization);
      createGrid();
    };
    fetch.send();
 }
function createGrid(){
var grid = new ej.grids.Grid({
    dataSource: data,
    enableRtl: true,
    locale: 'ar-AE',
    allowSorting: true,
    allowReordering: true,
    allowFiltering: true,
    allowGrouping: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode:'Normal' },
    toolbar:  ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    allowPaging: true,
    pageSettings: { pageSize: 7 },
    showColumnMenu: true,
    showColumnChooser: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
});
grid.appendTo('#Grid');

var switchObj = new ej.buttons.Switch({ 
    change: onSwitchChange
 });
switchObj.appendTo('#switch');

function onSwitchChange(args){
    if (args.checked) {
        grid.enableRtl = false;
      } else {
        grid.enableRtl = true;
      }
}
}