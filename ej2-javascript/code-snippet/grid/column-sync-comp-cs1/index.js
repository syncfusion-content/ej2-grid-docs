var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 90, format: 'C2' },
        { headerText: 'Order Status',
          template:
            `<div>
                <select class="e-control e-dropdownlist">
                    <option value="1" selected="selected">Order Placed</option>
                    <option value="2">Processing</option>
                    <option value="3">Delivered</option>
                </select>
            </div>`, width: 200
        },
    ],
    height: 315,
    queryCellInfo: dropdown
});
grid.appendTo('#Grid');

function dropdown(args) {
    var element = args.cell.querySelector('select');
    var dropdownObject = new ej.dropdowns.DropDownList({ popupHeight: 150, popupWidth: 150 });
    dropdownObject.appendTo(element);
}