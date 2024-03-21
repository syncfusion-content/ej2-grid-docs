var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageCount: 5 },
    allowSorting: true,
    allowGrouping: true,
    groupSettings: { showGroupedColumn: false, columns: ["ShipCountry"] },
    editSettings: { allowEditing: true },
    toolbar: ['Edit', 'Update', 'Cancel'],
    enablePersistence: true,
    height: 230,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: "Right", isPrimaryKey: true, validationRules: { required: true, number: true } },
      { field: 'CustomerID', headerText: 'Customer ID', width: 140, validationRules: { required: true } },
      { field: 'Freight', headerText: 'Freight', width: 140, format: 'C2', textAlign: "Right", editType: "numericedit", validationRules: { required: true } },
      { field: 'OrderDate', headerText: 'OrderDate', width: 120, allowGrouping: false, textAlign: "Right", editType: "datetimepickeredit", format: { type: "dateTime", format: "M/d/y hh:mm a" } },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 100, editType: "dropdownedit", edit: { params: { popupHeight: "300px" } } }
    ],
    actionBegin: function () {
        document.getElementById('message').innerText = '';
    },
  });
  grid.appendTo('#Grid');
  // Save grid state to local storage
  var saveButton = new ej.buttons.Button({cssClass: 'e-success'});
  saveButton.appendTo('#save');
  document.getElementById('save').addEventListener('click', function () {
    var persistData = grid.getPersistData();  // Grid persistData
  window.localStorage.setItem("gridOrders", persistData);
  document.getElementById("message").innerText = "Grid state saved.";
  });
  // Restore grid state from local storage
  var restoreButton = new ej.buttons.Button({cssClass: 'e-danger'});
  restoreButton.appendTo('#restore');
  document.getElementById('restore').addEventListener('click', function () {
    var value = window.localStorage.getItem("gridOrders"); //"gridOrders" is control name + control id.
    var state = JSON.parse(value);
    if (state) {
        grid.setProperties(state);
        document.getElementById("message").innerText = "Previous grid state restored.";
    } else {
        document.getElementById("message").innerText  = "No saved state found.";
    }
  });
  