var grid = new ej.grids.Grid({
    dataSource: data,
    rowDataBound: rowDataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
    ]
});
grid.appendTo('#Grid');

function rowDataBound(args) {
    args.row.addEventListener('mouseover', function(e) {
        var rowInformation=(grid.getRowInfo(e.target));
        document.getElementById('show').innerHTML = `
        <table style="border-collapse: collapse; width: 600px;">
          <tr style="border: 2px solid;">
            <td style="padding: 2px;"><b>Row Information:</b></td>
          </tr>
          <tr style="border: 2px solid; padding: 8px;">
            <th style="border: 2px solid; padding: 8px; width: 120px;"><b>Class Name</b></th>
            <td style="border: 2px solid; padding: 8px;">${rowInformation.row.className}</td>
          </tr>
          <tr style="border: 2px solid;">
            <th style="border: 2px solid; padding: 8px;"><b>Row Index</b></th>
            <td style="border: 2px solid; padding: 8px;">${rowInformation.rowIndex}</td>
          </tr>
         </table>`;
   
     });}