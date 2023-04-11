

import {  Pager } from '@syncfusion/ej2-grids';

let pager: Pager = new Pager({
    totalRecordsCount: 20,
    pageSize: 1,
    pageCount: 3
});

pager.appendTo('#Pager');



