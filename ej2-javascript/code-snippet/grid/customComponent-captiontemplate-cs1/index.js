ej.grids.Grid.Inject(ej.grids.Group,ej.grids.Page);
var grid = new ej.grids.Grid({
        dataSource: data,
        allowPaging: true,
        dataBound: ()=> {
            let groupCations = document.getElementsByClassName('groupbutton');
            for(var i=0;i<groupCations.length;i++) {
                 var button = new ej.buttons.Button({
                    isPrimary: true
                 });
                 button.appendTo(groupCations[i]);
            }
        },
        height: 315,
        allowGrouping: true,
        groupSettings: {columns: ["ShipCountry"], captionTemplate: "#captiontemplate"},
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ]
    });
grid.appendTo('#Grid');

