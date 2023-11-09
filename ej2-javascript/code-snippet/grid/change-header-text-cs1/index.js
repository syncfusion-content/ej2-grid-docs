var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
      {
        field: 'OrderID',
        headerText: 'Order ID',
        width: 120,
      },
      { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
      { field: 'Freight', headerText: 'Freight',format: 'C', width: 120 },
      { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 140 },
    ],
  });
  grid.appendTo('#Grid');
  
  let columns = 
    [
      { text: 'OrderID', value: 'OrderID' },
      { text: 'CustomerID', value: 'CustomerID' },
      { text: 'Freight', value: 'Freight' },
      { text: 'OrderDate', value: 'OrderDate' },
    ]
  
  let feild = { text: 'text', value: 'value' };
  
  var dropdown = new ej.dropdowns.DropDownList({
    dataSource: columns,
    feilds: feild,
    value: 'OrderID',
    popupHeight: '240px',
    width: 220,
  });
  dropdown.appendTo('#dropdownlist');
  
  var textbox = new ej.inputs.TextBox({
    placeholder: 'Enter new header text',
    width: 220,
  });
  textbox.appendTo('#textboxvalue');
  
  button = new ej.buttons.Button({
    content: 'Click',
  });
  button.appendTo('#buttons');
  
  document.getElementById('buttons').onclick = function() {
    if (textbox.value.trim() !== '') {
      let column = grid.getColumnByField(dropdown.value);
  
      column.headerText = textbox.value;
      grid.refreshHeader();
    }
  };  