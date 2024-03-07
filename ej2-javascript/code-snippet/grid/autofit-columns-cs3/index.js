ej.grids.Grid.Inject(ej.grids.Resize);
var grid = new ej.grids.Grid({
    dataSource: inventoryData,
    columns: [
        { field: 'Inventor', headerText: 'Inventor', width: 140, clipMode: 'EllipsisWithTooltip' },
        { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: 130 },
        { field: 'Country', headerText: 'Country', width: 120 },
        { field: 'Number of INPADOC patents', headerText: 'Number of INPADOC patents', width: 150 },
        { field: 'Active', headerText: 'Active', width: 150 },
        { field: 'Mainfieldsofinvention', headerText: 'Main fields of invention', width: 150 }
    ],
    dataBound: function(){
       grid.autoFitColumns(['Inventor', 'Number of INPADOC patents', 'Main fields of invention'], 1, 3)
    },
    height: 315
});
grid.appendTo('#Grid');