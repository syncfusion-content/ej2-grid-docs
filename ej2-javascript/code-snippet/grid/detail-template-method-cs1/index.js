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

var expandBtn = new ej.buttons.Button();
expandBtn.appendTo('#expand');

var textbox = new ej.inputs.TextBox({
    placeholder: 'Enter the Row Index',
    floatLabelType: 'Auto',
    width: 250
});
textbox.appendTo('#rowindex');

document.getElementById('expand').addEventListener('click', function(args){
    grid.detailRowModule.expand(textbox.value); 
});