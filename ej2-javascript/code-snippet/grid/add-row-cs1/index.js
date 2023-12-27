var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'ShipCity', headerText: 'Ship City', width: 100 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 100 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button({ content: 'Add New Row' });
button.appendTo('#add');

document.getElementById('add').onclick = function () {
    var newRecord = {
        OrderID: generateOrderId(),
        CustomerID: generateCustomerId(),
        ShipCity: generateShipCity(),
        Freight: generateFreight(),
        ShipName: generateShipName()
      };
      grid.addRecord(newRecord, 0);
};
// Generate a random OrderID
function generateOrderId() {
  return Math.floor(10000 + Math.random() * 90000);
}
 // Generate a random CustomerID
function generateCustomerId() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
// Generate a random ShipCity
function generateShipCity() {
  var cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
  return cities[Math.floor(Math.random() * cities.length)];
}
 // Generate a random Freight value
function generateFreight() {
  return Math.random() * 100;
}
 // Generate a random Freight value
function generateShipName() {
  var names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
  return names[Math.floor(Math.random() * names.length)];
}