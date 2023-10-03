import { Grid, Search, Toolbar, SearchEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Predicate, Query } from '@syncfusion/ej2-data';

Grid.Inject(Search, Toolbar)

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 80 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 100 }
    ],
    actionBegin: function (args: SearchEventArgs) {
        if (args.requestType == 'searching') {
            args.cancel = true;
            setTimeout(() => {
                var columns = grid.getColumns();
                var predicate = null;
                for (var i = 0; i < columns.length; i++) {
                    var val = grid.valueFormatterService.fromView(
                        args.searchString,
                        columns[i].getParser(),
                        columns[i].type
                    );
                    if (val) {
                        if (predicate == null) {
                            predicate = new Predicate(
                                columns[i].field,
                                'contains',
                                val,
                                true,
                                true
                            );
                        } else {
                            predicate = predicate.or(
                                columns[i].field,
                                'contains',
                                val,
                                true,
                                true
                            );
                        }
                    }
                }
                grid.query = new Query().where(predicate);
            }, 200);
        }
    },

    keyPressed: function (args: any) {
        if (
            args.key == 'Enter' &&
            args.target &&
            args.target.closest('.e-search') &&
            args.target.value == ''
        ) {
            args.cancel = true;
            grid.query = new Query();
        }
    },
});
grid.appendTo('#Grid');


