import { Grid, CommandColumn, Edit} from '@syncfusion/ej2-grids';
import { Dialog } from '@syncfusion/ej2-popups';
import { data } from './datasource.ts';

Grid.Inject(CommandColumn, Edit);


let grid: Grid = new Grid({
    dataSource: data,
    commandClick: commandClick,

    columns: [
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Cusomer ID', width: 120 },
        {
            field: 'Freight', headerText: 'Freight', textAlign: 'Right',
            editType: 'numericedit', width: 120, format: 'C2'
        },
        {
            field: 'ShipCountry', headerText: 'Ship Country', width: 150, textAlign: 'Right',
            editType: 'dropdownedit'
        },
        { headerText: 'Commands', width: 120, commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }] },
    ],
    height: 315
});
grid.appendTo('#Grid');

let dialogVisible = false;

function commandClick(args) {
    dialog.visible = true
    dialog.content =
 `<p><b>ShipName:</b> ${args.rowData.ShipName}</p>
  <p><b>ShipPostalCode:</b> ${args.rowData.ShipPostalCode}</p>
  <p><b>ShipAddress:</b> ${args.rowData.ShipAddress}</p>`
}

let dialog: Dialog = new Dialog({

    header: "Row Information",
    content: "dialogContent",
    showCloseIcon: true,
    width: "400px",
    visible: dialogVisible,
    close: dialogClose,

})
dialog.appendTo('#dialog');


function dialogClose() {
    dialogVisible = false;
}
