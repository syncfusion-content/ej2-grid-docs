import { Grid, ContextMenu, Page, MenuEventArgs } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(ContextMenu, Page);

let grid: Grid = new Grid({
    dataSource: data,
    contextMenuItems: [{text: 'Copy with headers', target: '.e-content', id: 'copywithheader'}],
    allowSelection: true,
    allowPaging: true,
    contextMenuClick: function(args: MenuEventArgs){
        if(args.item.id === 'copywithheader'){
            grid.copy(true);
        }
    },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120,  isPrimaryKey: true },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'LastName', headerText: 'Last Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 }
    ]
});
grid.appendTo('#Grid');




