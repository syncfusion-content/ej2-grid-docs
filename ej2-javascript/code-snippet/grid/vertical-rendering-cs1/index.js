ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Filter, ej.grids.Sort, ej.grids.Edit, ej.grids.Aggregate, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
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
    load: function() {
        grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
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

