import { Grid, Page, Selection, Toolbar, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataManager } from '@syncfusion/ej2/data';

Grid.Inject(Page, Selection, Toolbar, Edit );

let dropDownDataSource = new DataManager(data);
let grid: Grid = new Grid(
    {
        dataSource: [],
        allowPaging: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        emptyRecordTemplate: '#emptytemplate',
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
        columns: [
            { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, width: 140 },
            { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 140 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 140, format: 'C2', validationRules: { required: true } },
            { field: 'OrderDate', headerText: 'Order Date', editType: 'datetimepickeredit', width: 160, format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, },
            { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150, edit: { params: { dataSource: dropDownDataSource , fields: {text:"ShipCountry",value:"ShipCountry"}}}}
        ],
        pageSettings: { pageCount: 5 }
    });
grid.appendTo('#Grid');
