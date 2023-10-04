import { Grid, Page, Toolbar, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

Grid.Inject(Page, Toolbar, Edit);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    enableHover: false,
    created: created,
    load: load,
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Batch',
    },
    toolbar: ['Add','Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true,
           validationRules: { required: true, number: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true }
        },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100, textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd', width: 100},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
    ],
});
grid.appendTo('#Grid');

function created(args) {
    grid.getContentTable().addEventListener('click', function (args) {
        if ((args.target as any).classList.contains('e-rowcell')) {
            grid.editModule.editCell(parseInt((args.target as any).getAttribute('index')),
              grid.getColumnByIndex(parseInt(args.target.getAttribute('data-colindex'))).field);
        }
    });
}

function load() {
    grid.element.addEventListener('keydown', function (e) {
        var closesttd = (e.target as any).closest('td');
        if (e.keyCode === 39 && !isNullOrUndefined(closesttd.nextSibling)) {
            editACell(closesttd.nextSibling);
        }
        if (e.keyCode === 37 && !isNullOrUndefined(closesttd.previousSibling) &&
            !grid.getColumnByIndex(
                parseInt(closesttd.previousSibling.getAttribute('data-colindex'))).isPrimaryKey)
        {
             editACell(closesttd.previousSibling);
        }
        if (e.keyCode === 40 && !isNullOrUndefined(closesttd.closest('tr').nextSibling)) {
            editACell(
                closesttd.closest('tr').nextSibling.querySelectorAll('td')[
                parseInt(closesttd.getAttribute('data-colindex'))]);
        }
        if ( e.keyCode === 38 && !isNullOrUndefined(closesttd.closest('tr').previousSibling)) {
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