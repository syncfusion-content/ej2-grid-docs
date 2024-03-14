var grid = new ej.grids.Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, customAttributes: { class: 'orientationcss' } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Center', format: 'C2', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 }
    ],
    created: setHeaderHeight,
    height: 260
});
 
function setHeaderHeight() {
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

var degree = [90, 180, 45, 135];
var dropDownListObject = new ej.dropdowns.DropDownList({
    dataSource: degree,
    placeholder: "Select a degree",
    width: 120
});
dropDownListObject.appendTo('#ddlelement');