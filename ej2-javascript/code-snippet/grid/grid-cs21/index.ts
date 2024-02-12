import { Grid, Page, Toolbar, Edit, ClickEventArgs, KeyboardEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

Grid.Inject(Page, Toolbar, Edit);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    enableHover: false,
    created: created,
    load: load,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'},
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true }, width: 120},
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true }},
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 150, textAlign: 'Right',validationRules: { min:1,max:1000} },
        { field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function created() {
    grid.getContentTable().addEventListener('click', function(args: ClickEventArgs) {
        if ((args.target).classList.contains('e-rowcell')) {
            grid.editModule.editCell(parseInt((args.target).getAttribute('index')),
              grid.getColumnByIndex(parseInt(args.target.getAttribute('data-colindex'))).field);
        }
    });
}

function load() {
    grid.element.addEventListener('keydown', function(e: KeyboardEventArgs) {
        let closesttd = (e.target).closest('td');
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

function editACell(args: { getAttribute: (arg0: string) => string; }) {
    grid.editModule.editCell(
        parseInt(args.getAttribute('index')),
        grid.getColumnByIndex(parseInt(args.getAttribute('data-colindex'))).field);
}