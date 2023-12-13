var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
});
grid.appendTo('#Grid');

grid.dataBound = () => {
    var column = grid.columns[0];
    column.isPrimaryKey = 'true';
};