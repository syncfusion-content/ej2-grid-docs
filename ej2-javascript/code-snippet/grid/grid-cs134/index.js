
    var grid = new ej.grids.Grid({
        dataSource: data,
        allowPaging: true,
        height: 325,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 135,   textAlign: 'Right' },
            { field: 'ShipName', width: 120,  textAlign: 'Right'}
        ],
    });
    grid.appendTo('#Grid');

    var textbox = new ej.inputs.TextBox({
        placeholder: 'Enter page size:',
        width: 140,
      });
      textbox.appendTo('#textboxvalue');

    let button = new ej.buttons.Button({
        content: ' Show Selected Cell Indexes',
      });
    button.appendTo('#buttons');
    
    document.getElementById('buttons').onclick = function () {
        grid.pageSettings.pageSize = parseInt(textbox.value, 10);
    }