import { Grid, Filter, Sort, Edit, Toolbar, Aggregate, Page } from '@syncfusion/ej2-grids';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Filter, Sort, Edit, Toolbar, Aggregate, Page);

let grid: Grid = new Grid({
    dataSource: data,
    enableAdaptiveUI: true,
    rowRenderingMode: 'Vertical',
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Excel' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
    height: '100%',
    load: () => {
        grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    },
    columns: [
        { field: 'SNO', headerText: 'S NO', isPrimaryKey: true, width: 150, validationRules: { required: true, number: true } },
        { field: 'Model', headerText: 'Model Name', width: 200, editType: "dropdownedit", validationRules: { required: true } },
        { field: 'Developer', headerText: 'Developer', filter: { type : 'Menu' }, width: 200, validationRules: { required: true } },
        { field: 'ReleaseDate', headerText: 'Released Date', type: 'date', editType: "datepickeredit", format: 'yMMM', width: 200 },
        { field: 'AndroidVersion', headerText: 'Android Version', filter: { type : 'CheckBox' }, width: 200, validationRules: { required: true } }
    ],
    aggregates: [{
        columns: [{
            type: 'Count',
            field: 'Model',
            footerTemplate: 'Total Models: ${Count}'
        }]
    }]
});
grid.appendTo('#verticalrender');

let dropDown: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Vertical', value: 'Vertical' },
        { text: 'Horizontal', value: 'Horizontal' },,
    ],
    index: 0,
    width: 150,
    change:  changeAlignment,
});
dropDown.appendTo('#dropdownlist');
function changeAlignment(args: ChangeEventArgs ) {
    grid.rowRenderingMode = args.value;
}