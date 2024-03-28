import { Grid, Edit, RowSelectEventArgs  } from '@syncfusion/ej2-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { TextBox } from '@syncfusion/ej2-inputs';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Edit);

let grid: Grid = new Grid({
    dataSource: data,
    height: 315,
    width: 500,
    editSettings: { allowEditing: true },
    columns: [
        { field: 'OrderID', headerText: 'OrderID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'CustomerID', textAlign: 'Right', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 120 },
        { field: 'ShipCountry', headerText: 'ShipCountry', textAlign: 'Right', width: 120 }
    ],
    rowSelected: rowSelectHandler
});
grid.appendTo('#Grid');

export class Order {
    OrderID?: number;
    CustomerID?: string;
    Freight?: number;
    ShipCountry?: string;
  }

let dropdownData = [
    { shipCountry: 'Germany' },
    { shipCountry: 'Brazil' },
    { shipCountry: 'France' },
    { shipCountry: 'Belgium' },
    { shipCountry: 'Switzerland' },
    { shipCountry: 'Venezuela' },
    { shipCountry: 'USA' },
    { shipCountry: 'Mexico' },
    { shipCountry: 'Italy' },
    { shipCountry: 'Sweden' },
    { shipCountry: 'Finland' },
    { shipCountry: 'Spain' },
    { shipCountry: 'Canada' },
    { shipCountry: 'Portugal' },
    { shipCountry: 'Denmark' },
    { shipCountry: 'Austria' },
    { shipCountry: 'UK' },
    { shipCountry: 'Ireland' },
    { shipCountry: 'Norway' },
    { shipCountry: 'Argentina' },
];

let selectedProduct = new Order();

let orderIDTextbox: NumericTextBox = new NumericTextBox({
    format: '###.##',
    value: selectedProduct.OrderID, 
 });
orderIDTextbox.appendTo('#orderID');

let customerIDTextbox: TextBox = new TextBox({
    value: selectedProduct.CustomerID,
    change: function() {
        selectedProduct.CustomerID = customerIDTextbox.value;
    }
 });
customerIDTextbox.appendTo('#customerID');

let freightTextbox: TextBox = new TextBox({
    value: selectedProduct.Freight,
    change: function() {
        selectedProduct.Freight = freightTextbox.value;
    }
 });
freightTextbox.appendTo('#freight');


let countryDropdown: DropDownList = new DropDownList({
    dataSource: dropdownData,
    fields: { text: 'shipCountry', value: 'shipCountry' },
    value: selectedProduct.ShipCountry,
    change: function() {
        selectedProduct.ShipCountry = countryDropdown.value;
    }
});
countryDropdown.appendTo('#country');

(document.getElementById('buttons') as HTMLElement).onclick = function () { 
    var index = grid.getSelectedRowIndexes()[0];
    grid.updateRow(index, selectedProduct);
};

function rowSelectHandler(args: RowSelectEventArgs ) {
    selectedProduct = Object.assign({}, args.data);
    orderIDTextbox.value = selectedProduct.OrderID;
    customerIDTextbox.value = selectedProduct.CustomerID;
    freightTextbox.value = selectedProduct.Freight;
    countryDropdown.value = selectedProduct.ShipCountry;
}