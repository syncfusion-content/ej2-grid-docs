var listObj = new ej.dropdowns.DropDownList({
    //set the data to dataSource property
    dataSource: ddlData,
    style:"margin-top:5px",
    index: "0",
    width: "100",
    change: valueChange
});
listObj.appendTo('#ddl');

var grid = new ej.grids.Grid({
    dataSource: data,
    gridLines: 'Default',
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Content' },
    columns: [
        { field: 'RoolNo', headerText: 'Rool No', width: 120 },
        { field: 'Name', headerText: 'Name of the inventor', width: 100 },
        { field: 'patentfamilies', headerText: 'No of patentfamilies', width: 100 },
        { field: 'Country', headerText: 'country', width: 130 },
        { field: 'mainfields', headerText: 'Main fields of Invention', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');

function valueChange(args) {
    grid.textWrapSettings.wrapMode = args.value;
}

