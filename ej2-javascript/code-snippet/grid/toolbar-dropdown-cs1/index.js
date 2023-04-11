var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string', customAttributes: { class: 'orientationcss' }, textAlign: 'Center' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    created: setHeaderHeight,
    height: 260
});
 
function setHeaderHeight(args) {
    var textWidth = document.querySelector(".orientationcss > div").scrollWidth;
    var headerCell = document.querySelectorAll(".e-headercell");
    for (var i = 0; i < headerCell.length; i++) {
        headerCell.item(i).style.height = textWidth + 'px';
    }
}

grid.excelHeaderQueryCellInfo = function (args) {
    var textWidth = document.querySelector(".orientationcss > div").scrollWidth;
    if (args.gridCell.column.field == 'Freight') {
        args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
    }
    else {
        args.style = { vAlign: 'Center', rotation: dropDownListObject.value };
    }
    args.cell.cellHeight = textWidth;
};
grid.excelQueryCellInfo = function (args) {
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
};
grid.toolbarClick = function (args) {
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport();
    }
};
grid.appendTo('#Grid');

var degree = [90, 180, 45, 135, 225, -90];
var dropDownListObject = new ej.dropdowns.DropDownList({
    dataSource: degree,
    placeholder: "Select a degree"
});
dropDownListObject.appendTo('#ddlelement');

