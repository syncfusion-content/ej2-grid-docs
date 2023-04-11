

import {  Pager } from '@syncfusion/ej2-grids';

let pager: Pager = new Pager({
    pageSize: 8,
    pageCount: 3,
    totalRecordsCount: 20,
});

pager.appendTo('#Pager');



