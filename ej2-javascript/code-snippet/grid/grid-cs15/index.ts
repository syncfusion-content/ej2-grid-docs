

import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

class SerialNoAdaptor extends ODataAdaptor {
    processResponse(): Object {
        let i: number = 0;
        // calling base class processResponse function
        let original: {result: Object[], count: number} = super.processResponse.apply(this, arguments);
        // adding serial number
        original.result.forEach((item: Object) => item['Sno'] = ++i);
        return { result: original.result, count: original.count };
    }
}

let data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new SerialNoAdaptor
});

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'Sno', width: 120, headerText: 'SNO', textAlign: 'Right' },
        { field: 'CustomerID', width: 140, headerText: 'Customer Name', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');



