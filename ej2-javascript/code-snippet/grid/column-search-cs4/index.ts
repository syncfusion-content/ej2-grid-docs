import { Grid, Search, Toolbar, SearchEventArgs } from '@syncfusion/ej2-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let key: string = '';
let values;
let removeQuery:boolean= false;
let valueAssign:boolean= false;
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
    ],
    searchSettings: {
        fields: [ 'OrderID', 'CustomerID', 'EmployeeID', 'ShipCity', 'ShipCountry', 'ShipName'],
        key: '',
        operator: 'contains',
        ignoreCase: true
    },
    height: 272,

    actionBegin: (args:SearchEventArgs) => {
        if (args.requestType == 'searching') {
            const keys = args.searchString.split(',');
            let flag = true;
            let predicate;
            if (keys.length > 1) {
                if (grid.searchSettings.key !== '') {
                    values = args.searchString;
                    keys.forEach((key: string) => {
                        grid.getColumns().forEach((col) => {
                            if (flag) {
                                predicate = new Predicate(col.field,'contains',key,true);
                                flag = false;
                            }
                            else {
                                let predic = new Predicate(col.field,'contains',key,true);
                                predicate = predicate.or(predic);
                            }
                        });
                    });
                    grid.query = new Query().where(predicate);
                    grid.searchSettings.key = '';
                    valueAssign = true;
                    removeQuery = true;
                    grid.refresh();
                }
            }
        }
    },
    actionComplete: (args: SearchEventArgs) => {
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