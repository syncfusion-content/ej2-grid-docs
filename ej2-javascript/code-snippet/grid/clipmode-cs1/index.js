var listObj = new ej.dropdowns.DropDownList({
      dataSource: ddlData,
      index:"0",
      width:"150",
      change: valueChange
    });
  listObj.appendTo('#ddl');

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'Name', headerText: 'Name of the inventor', width: 100 },
        { field: 'patentfamilies', headerText: 'No of patent families', width: 100 },
        { field: 'Country', headerText: 'Country', width: 80 },
        { field: 'mainfields', headerText: 'Main fields of Invention', width: 100 },
    ]
});
grid.appendTo('#Grid');

function valueChange(args) {
    if (args.value === 'Clip') {
        grid.getColumnByField('Name').clipMode = 'Clip';
        grid.refresh();
      }
      else if (args.value === 'Ellipsis') {
        grid.getColumnByField('patentfamilies').clipMode = 'Ellipsis';
        grid.refresh();
      }
      else {
        grid.getColumnByField('mainfields').clipMode = 'EllipsisWithTooltip';
        grid.refresh();
      }
}