import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { L10n } from '@syncfusion/ej2-base';
import { ClickEventArgs,Item  } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

L10n.load({
    'en-US': {
        grid: {
            'OKButton':'YES',
            'CancelButton':'Discard' ,
            'ConfirmDelete': 'Are you sure you want to delete the selected Record?' 
        }
    }
});

Grid.Inject(Edit,Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: {   allowEditing: true, allowAdding: true, allowDeleting: true, showDeleteConfirmDialog: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID' ,isPrimaryKey: true, width: 120},
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 120},
        { field: 'ShipCity', headerText: 'Ship City', width: 130 }
    ],
    height: 273
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs)
{
    if ((args.item as Item).text === 'Delete') {
        let dialogObj = ((grid as Grid).editModule as any).dialogObj   ;
        dialogObj.header = 'Delete Confirmation Dialog';
        dialogObj.showCloseIcon = true;    
    }
}