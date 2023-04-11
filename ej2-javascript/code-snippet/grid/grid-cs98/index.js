ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

document.getElementById("Grid").addEventListener("click", (e) => {
    if(event.target.classList.contains("e-rowcell")){
        var gridObj = document.getElementsByClassName("e-grid")[0].ej2_instances[0];
        var index = parseInt(event.target.getAttribute("Index"));
        var colindex = parseInt(event.target.getAttribute("aria-colindex"));
        var field = gridObj.getColumns()[colindex].field;
        gridObj.editModule.editCell(index, field);
    }
});

var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 273
});
grid.appendTo('#Grid');

