

import { Grid, Page, RowDD, Selection, Filter, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, RowDD, Selection, Filter, Sort);

let grid: Grid = new Grid({
    dataSource: data.slice(0, 10),
    allowRowDragAndDrop: true,
    selectionSettings: { type: 'Multiple' },
    height:300,
    allowFiltering:true,
    allowSorting:true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
     rowDrop: function (args: any) {
        let gObj: any = (<any>document.getElementById('Grid')).ej2_instances[0];
        let seletedRowIndexes: number[] = gInstance.getSelectedRowIndexes();
        if (gObj.sortSettings.columns.length > 0 || gObj.filterSettings.columns.length > 0) {
            let startedRow: HTMLTableRowElement = args.rows[0];
            let startRowIndex: number = startedRow.rowIndex;
            if (!args.target) {
                return
            }
            let targetRow: HTMLTableRowElement = args.target.closest('tr');
            let targetRowIndex: number = targetRow.rowIndex;
            gInstance.getContentTable().querySelector('tbody').insertBefore(startedRow, targetRow);

            if (!isNullOrUndefined(targetRow.nextElementSibling)) {
                let currentIndex: number = targetRow.rowIndex;
                if (currentIndex <= startedRow.rowIndex) {
                    gObj.getContentTable().querySelector('tbody').insertBefore(startedRow, targetRow);
                } else {
                    gObj.getContentTable().querySelector('tbody').insertBefore(startedRow, targetRow.nextElementSibling);
                }
            } else {
                gObj.getContentTable().querySelector('tbody').insertBefore(targetRow, startedRow);
            }

            let startRowObj: any = gObj.getRowObjectFromUID(startedRow.getAttribute('data-uid'));
            let targetRowObj: any = gObj.getRowObjectFromUID(targetRow.getAttribute('data-uid'))
            for (let i: number = 0, len: number = gObj.currentViewData.length; i < len; i++) {
                let getDataByField = gObj.currentViewData[i];
                if (gObj.sortSettings.columns.length > 0 || gObj.filterSettings.columns.length > 0) {
                    filteredCurrentViewData = gObj.currentViewData;
                    filteredCurrentViewData.splice(targetRowIndex, 0, filteredCurrentViewData.splice(startRowIndex, 1)[0]);
                    gObj.rowDragAndDropModule.removeBorder(targetRow);
                    gObj.contentModule.refreshContentRows();
                    dropSelectedRowIndx.push(targetRowIndex);
                    if (gObj.sortSettings.columns.length > 0) {
                        args.cancel = true;
                    }
                    if (dropSelectedRowIndx.length > 0) {
                        gObj.clearSelection();
                        gObj.selectRows(dropSelectedRowIndx);
                    }
                    return;
                }
            }
        }
    }
  
});
grid.appendTo('#Grid');



