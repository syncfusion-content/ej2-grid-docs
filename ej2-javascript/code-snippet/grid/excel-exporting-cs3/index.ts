import { Grid, Toolbar, ExcelExport, ClickEventArgs, ExcelHeaderQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    toolbarClick: function (args: ClickEventArgs) {
        if (args.item.id === 'Grid_excelexport') {
            grid.excelExport();
        }
    },
    excelHeaderQueryCellInfo: function (args: ExcelHeaderQueryCellInfoEventArgs) {
        args.gridCell.value = '';
    },
    created: function () {
        var processGridExportObject = grid.excelExportModule.__proto__.processGridExport;
        grid.excelExportModule.__proto__.processGridExport = function (gobj, props, r) {
            var rows = processGridExportObject.call(this, gobj, props, r);
            rows.shift();
            rows.forEach(function (item, index) {
                item.index = index + 1;
            });
            return rows;
        };
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'OrderDate', headerText: 'Order Date', format: { type: 'date', format: 'yMd' }, width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 }
    ],
    height: '272px'
  });
  grid.appendTo('#Grid');