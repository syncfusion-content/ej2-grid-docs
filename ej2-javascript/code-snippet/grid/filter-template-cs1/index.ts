

import { Grid, Filter, Column } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let gridObj: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        {
            field: 'EmployeeID', filterBarTemplate: {
                create: (args: { element: Element, column: Column }) => {
                    const dd = document.createElement('input');
                    dd.id = 'EmployeeID';
                    return dd;
                },
                write: (args: { element: Element, column: Column }) => {
                    let DropDownListObj: DropDownList = new DropDownList({
                        dataSource: ['All','1','3','4','5','6','8','9'],
                        fields: { text: 'EmployeeID', value: 'EmployeeID' },
                        placeholder: 'Select a value',
                        popupHeight: '200px',
                        change: function(e){
                            var gridObj = (document.getElementsByClassName('e-grid')[0] as any).ej2_instances[0];
                            if(e.value =='All') {
                                gridObj.removeFilteredColsByField('EmployeeID');
                            } else {
                                gridObj.filterByColumn('EmployeeID','equal',parseInt(e.value as any));
                            }
                        }
                    })
                    DropDownListObj.appendTo('#EmployeeID');
                }
            },
            textAlign: 'Right', width: 100
        },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }]
});
gridObj.appendTo('#Grid');



