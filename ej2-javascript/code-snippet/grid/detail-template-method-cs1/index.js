var expandBtn = new ej.buttons.Button();
expandBtn.appendTo('#expand');
ej.grids.Grid.Inject(ej.grids.DetailRow);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'LastName', headerText: 'Last Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    height: 260
});
grid.appendTo('#Grid');

document.getElementById('expand').addEventListener('click', function(){
    var inputElem = document.getElementsByClassName('rowindex')[0];
    var rowIndex = parseInt(inputElem.value, 10);
    grid.detailRowModule.expand(rowIndex);
});

