import { Grid, Toolbar, ExcelExport, Page, ExcelHeaderQueryCellInfoEventArgs, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, customAttributes: { class: 'orientationcss' } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Center', format: 'C2', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 }
    ],
    created: setHeaderHeight,
    excelHeaderQueryCellInfo: (args: ExcelHeaderQueryCellInfoEventArgs) => {
        let textWidth = (document.querySelector(".orientationcss > div") as Element).scrollWidth;
        if (args.gridCell.column.field == 'Freight') {
            args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
        }
        else {
            args.style = { vAlign: 'Center', rotation: dropDownListObject.value };
        }
        args.cell.cellHeight = textWidth;
    },
    excelQueryCellInfo: (args:  ExcelQueryCellInfoEventArgs) => {
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
    },
    height: 230
});
grid.appendTo('#Grid');

function setHeaderHeight(): void {
    let textWidth: number = (document.querySelector('.orientationcss > div')as Element).scrollWidth;
    let headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for (let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px';
    }
}

grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport();
    }
}

let degree = [90, 180, 45, 135];
let dropDownListObject: DropDownList = new DropDownList({
    dataSource: degree,
    placeholder: "Select a degree",
    width: 120
});
dropDownListObject.appendTo('#ddlelement');