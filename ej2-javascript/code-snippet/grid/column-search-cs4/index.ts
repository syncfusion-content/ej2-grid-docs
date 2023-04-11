

import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let key: string = '';
let values;
let refresh:boolean= false;
let removeQuery:boolean= false;
let valueAssign:boolean= false;
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
        {
            field: 'OrderID',headerText: 'Order ID',textAlign: 'Center',width: 120,
        },
        {
            field: 'CustomerID',headerText: 'Customer ID',textAlign: 'Center',width: 150,
        },
        {
            field: 'ShipCity',headerText: 'Ship City',textAlign: 'Center',width: 150,
        },
        {
            field: 'ShipName',headerText: 'Ship Name',textAlign: 'Center',width: 150,
        },
    ],
    searchSettings: {
        fields: ['CustomerID', 'OrderID', 'ShipCity', 'ShipName'],key: ''
    },
    height: 272,

    actionBegin: (args) => {
        if (args.requestType == 'searching') {
            const keys = args.searchString.split(',');
            var flag = true;
            var predicate;
            if (keys.length > 1) {
                if (grid.searchSettings.key !== '') {
                    values = args.searchString;
                    keys.forEach((key) => {
                        grid.getColumns().forEach((col) => {
                            if (flag) {
                                predicate = new Predicate(col.field,'contains',key,true);
                                flag = false;
                            }
                            else {
                                var pre = new Predicate(col.field,'contains',key,true);
                                predicate = predicate.or(pre);
                            }
                        });
                    });
                    grid.query = new Query().where(predicate);
                    grid.searchSettings.key = '';
                    refresh = true;
                    valueAssign = true;
                    removeQuery = true;
                    grid.refresh();
                }
            }
        }
    },
    actionComplete: (args) => {
        if (args.requestType === 'refresh' && valueAssign) {
            document.getElementById(grid.element.id + '_searchbar').value = values;
            valueAssign = false;
        }
        else if (
            document.getElementById(grid.element.id + '_searchbar').value === '' &&
            args.requestType === 'refresh' &&
            removeQuery
        )
        {
            grid.query = new Query();
            removeQuery = false;
            grid.refresh();
        }
    },
});
grid.appendTo('#Grid');



