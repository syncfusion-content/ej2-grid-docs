import { Grid, ForeignKey, Filter ,  Column} from '@syncfusion/ej2-grids';
import { data, fEmployeeData } from './datasource.ts';
import { createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager } from '@syncfusion/ej2-data';

Grid.Inject(ForeignKey, Filter);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowFiltering: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            // Foreign column
            {
                field: 'EmployeeID', headerText: 'Employee Name', width: 120, foreignKeyValue: 'FirstName', dataSource: fEmployeeData,
                filterBarTemplate: {
                    create: (args: { element: Element, column: Column }) =>
                    {
                        return createElement('input', { className: 'flm-input' });;
                    },
                    write: (args: { element: Element, column: Column }) => {
                        fEmployeeData.splice(0, 0, {'FirstName': 'All'}); // for clear filtering
                        let dropInstance: DropDownList = new DropDownList({
                            dataSource: new DataManager(fEmployeeData),
                            fields: { text: 'FirstName' },
                            placeholder: 'Select a value',
                            popupHeight: '200px',
                            index: 0,
                            change: (args: { value: string }) => {
                                if (args.value !== 'All') {
                                    grid.filterByColumn('EmployeeID', 'equal', args.value);
                                }
                                else {
                                    grid.removeFilteredColsByField('EmployeeID');
                                }
                            }
                        });
                        dropInstance.appendTo(args.element);
                    }
                }
            },
            { field: 'ShipCity', headerText: 'Ship City', width: 180 },
        ],
        height: 260
    });
    grid.appendTo('#Grid');