import { Grid, Page, PageEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(Page);
let updateTemplate: Function = () => {
    let numeric: NumericTextBox = new NumericTextBox({
        min: 1,
        max: 3,
        step: 1,
        format: '###.##',
        change: (args) => {
            let value: number = args.value;
            grid.goToPage(value);
        }
    });
    numeric.appendTo('#currentPage');
};
let flag: boolean = true;
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    pageSettings: { template: '#template', pageSize: 7 },
    dataBound: () => {
        if (flag) {
            flag = false;
            updateTemplate();
        }
    },
    actionComplete: (args: PageEventArgs) => {
        if (args.requestType === 'paging') {
            updateTemplate();
        }
    }
});
grid.appendTo('#Grid');