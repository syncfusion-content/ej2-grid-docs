ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    enableHover: false,
    created: created,
    load: load,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'},
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, validationRules: { required: true, number: true }},
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true }},
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 150, textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
    height: 272,
});
grid.appendTo('#Grid');

function created() {
    grid.getContentTable().addEventListener('click', function (args) {
        if (args.target.classList.contains('e-rowcell')) {
            grid.editModule.editCell(parseInt(args.target.getAttribute('index')),
                grid.getColumnByIndex(parseInt(args.target.getAttribute('data-colindex'))).field);
        }
    });
}

function load() {
    grid.element.addEventListener('keydown', function (e) {
        var closesttd = e.target.closest('td');
        if (e.keyCode === 39 && !ej.base.isNullOrUndefined(closesttd.nextSibling)) {
            editACell(closesttd.nextSibling);
        }
        if (e.keyCode === 37 && !ej.base.isNullOrUndefined(closesttd.previousSibling) &&
            !grid.getColumnByIndex(
                parseInt(closesttd.previousSibling.getAttribute('data-colindex'))).isPrimaryKey) {
            editACell(closesttd.previousSibling);
        }
        if (e.keyCode === 40 && !ej.base.isNullOrUndefined(closesttd.closest('tr').nextSibling)) {
            editACell(
                closesttd.closest('tr').nextSibling.querySelectorAll('td')[
                parseInt(closesttd.getAttribute('data-colindex'))]);
        }
        if (e.keyCode === 38 && !ej.base.isNullOrUndefined(closesttd.closest('tr').previousSibling)) {
            editACell(
                closesttd.closest('tr').previousSibling.querySelectorAll('td')[
                parseInt(closesttd.getAttribute('data-colindex'))]);
        }
    });
}

function editACell(args) {
    grid.editModule.editCell(
        parseInt(args.getAttribute('index')),
        grid.getColumnByIndex(parseInt(args.getAttribute('data-colindex'))).field);
}