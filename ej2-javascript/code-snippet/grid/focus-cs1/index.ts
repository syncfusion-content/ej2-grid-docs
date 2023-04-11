

import { Grid, Page, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, Edit);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true,
    mode: "Normal"
    },
    recordDoubleClick: recordDoubleClick,
    actionComplete: actionComplete,
    columns: [
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', editType: "numericedit", textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, editType: "datetimepickeredit",
        format: { type: "dateTime", format: "M/d/y hh:mm a" }, },
        { field: "ShipCountry", headerText: "Ship Country", editType: "dropdownedit",  width: 150, edit: { params: { popupHeight: "300px" } }
    }
    ],
    height: 220
});
grid.appendTo('#Grid');

var fieldName;
function recordDoubleClick(e) {
  var clickedColumnIndex = e.cell.getAttribute("data-colindex");
  fieldName = this.columnModel[parseInt(clickedColumnIndex)].field;
}

function actionComplete(e) {
  if (e.requestType === "beginEdit") {
    // focus the column
    e.form.elements[grid.element.getAttribute("id") + fieldName].focus();
  }
}



