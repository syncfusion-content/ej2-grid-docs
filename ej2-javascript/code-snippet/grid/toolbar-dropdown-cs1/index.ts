


import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page, ActionEventArgs  } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string', customAttributes:{ class: 'orientationcss' }, textAlign: 'Center' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    created: setHeaderHeight,
    excelHeaderQueryCellInfo: (args) => {
        let textWidth = document.querySelector(".orientationcss > div").scrollWidth;
        if (args.gridCell.column.field == 'Freight') {
            args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
        }
        else {
            args.style = { vAlign: 'Center', rotation: dropDownListObject.value };
        }
        args.cell.cellHeight = textWidth;
    },
    excelQueryCellInfo: (args) => {
        if (args.column.field == 'Freight') {
            if (args.value < 30) {
                args.style = { backColor: '#99ffcc' };
            }
            else if (args.value < 60) {
                args.style = { backColor: '#ffffb3' };
            }
            else {
                args.style = { backColor: '#ff704d' };
            }
        }
    }
    height: 230
});
grid.appendTo('#Grid');

function setHeaderHeight(args: ActionEventArgs): void {
    let textWidth: number = document.querySelector(".orientationcss > div").scrollWidth;
    let headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for (let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px';
    }
}

grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport();
    }
}

let degree = [90, 180, 45, 135, 225, -90];
let dropDownListObject: DropDownList = new DropDownList({
    dataSource: degree,
    placeholder: "Select a degree"
});
dropDownListObject.appendTo('#ddlelement');



