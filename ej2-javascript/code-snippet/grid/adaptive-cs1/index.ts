import { Grid, Filter, Sort, Edit, Toolbar, Page } from '@syncfusion/ej2-grids';
import { Browser } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

Grid.Inject(Filter, Sort, Edit, Toolbar, Page);

let grid: Grid = new Grid({
    dataSource: data,
    enableAdaptiveUI: true,
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
    ]
});
grid.appendTo('#adaptivebrowser');