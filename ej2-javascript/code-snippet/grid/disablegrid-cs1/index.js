ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var button = new ej.buttons.Button({}, '#primarybtn');
document.getElementById('primarybtn').onclick = function(){
    var gridInst = document.getElementById("Grid").ej2_instances[0];
    if (gridInst.element.classList.contains('disablegrid')) {
        gridInst.element.classList.remove('disablegrid');
        document.getElementById("GridParent").classList.remove('wrapper');
    }
    else {
        gridInst.element.classList.add('disablegrid');
        document.getElementById("GridParent").classList.add('wrapper');
    }
};
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, allowEditing: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 273
});
grid.appendTo('#Grid');

