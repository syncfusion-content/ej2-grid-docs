ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var isDropdown = false;

var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    actionComplete: onActionComplete,
    load: () => {
        var instance = document.getElementById('Grid').ej2_instances[0];
        instance.element.addEventListener('mouseup', (e) => {
            if (e.target.classList.contains("e-rowcell")) {
              if (instance.isEdit)
                  instance.endEdit();
              var rowInfo = instance.getRowInfo(e.target);
              if (rowInfo.column.field === "ShipCountry")
                  isDropdown = true;        
              instance.selectRow(rowInfo.rowIndex);
              instance.startEdit();
            }
        })
    },
    height: 220
});
grid.appendTo('#Grid');

function onActionComplete(args) {
    if (args.requestType =="beginEdit" && isDropdown) {
        isDropdown = false;
        var dropdownObj = args.form.querySelector('.e-dropdownlist').ej2_instances[0];
        dropdownObj.element.focus();
        dropdownObj.showPopup();
    }
}

