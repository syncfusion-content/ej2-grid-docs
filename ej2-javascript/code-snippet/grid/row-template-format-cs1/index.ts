

import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { Internationalization } from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();

let dFormatter: Function = intl.getDateFormat({ skeleton: 'yMd', type: 'date' });

(<IWindow>window).formatDate = (date: Date) => dFormatter(date);

let grid: Grid = new Grid({
    dataSource: employeeData,
    rowTemplate: '#rowtemplate',
    columns: [
        { headerText: 'Employee Image', width: 150, textAlign: 'Center', field: 'OrderID' },
        { headerText: 'Employee Details', width: 300, field: 'EmployeeID' }
    ],
    height: 315
});
grid.appendTo('#Grid');

interface IWindow extends Window {
    formatDate?: Function;
}



