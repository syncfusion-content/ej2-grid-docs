import { Grid, Edit } from '@syncfusion/ej2-grids';
import {Toolbar, ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Edit,Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageCount: 5 },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', isPrimaryKey: true, validationRules:  { required: true, number: true }},
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules:  { required: true}},
        { field: 'Freight', headerText: 'Freight', width: 120,format: 'C2', textAlign: 'Right',editType: 'numericedit',
        validationRules: { required: true }
        },
        { field: 'OrderDate', headerText: 'Order Date', width: 130,format: 'yMd',editType: 'datepickeredit',textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150,editType: 'dropdownedit',edit: { params: { popupHeight: '300px' } }}
    ]    
});
grid.appendTo('#Grid');

let toolbar: Toolbar = new Toolbar({
    items: [
        { text: "Add", id: "add" },
        { text: "Edit", id: "edit" },
        { text: "Delete", id: "delete" },
        { text: "Update", id: "update" },
        { text: "Cancel", id: "cancel" }
    ],
    clicked: onToolbarClick
});
toolbar.appendTo('#element');

function onToolbarClick(args: ClickEventArgs ){
    switch ((args.item as{ id: string }).id) {
      case 'add':
        grid.addRecord();
        break;
      case 'edit':
        grid.startEdit();
        break;
      case 'delete':
        grid.deleteRecord();
        break;
      case 'update':
        grid.endEdit();
        break;
      case 'cancel':
        grid.closeEdit();
        break;
    }
  }