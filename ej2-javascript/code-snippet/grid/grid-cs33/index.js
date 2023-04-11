var tbElem;
var textEditor;

ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar, ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: purchaseData,
    allowPaging: true,
    allowTextWrap: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    created: function (args) {
      this.keyConfigs.enter = '';
    },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', type: 'number', isPrimaryKey: true, validationRules: { required: true }, textAlign: 'Right', width: 100 },
      { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 140 },
      { field: 'Freight', headerText: 'Freight', type: 'number', editType: 'numericedit', format: 'C2', textAlign: 'Right', width: 120 },
      { field: 'ShipAddress', headerText: 'Ship Address', type: 'string', valueAccessor: valueAccessor, disableHtmlEncode: false, width: 180, edit: {
        create: createShipAddressFn,
        destroy: destroyShipAddressFn,
        read: readShipAddressFn,
        write: writeShipAddressFn }
      }
    ],
    pageSettings: { pageSize: 7 },
    height: 255,
  });
  grid.appendTo('#Grid');
  
  function createShipAddressFn() {
    tbElem = document.createElement('textarea');
    return tbElem;
  }
  function destroyShipAddressFn() {
    textEditor.destroy();
  }
  function readShipAddressFn() {
    return textEditor.value;
  }
  function writeShipAddressFn(args) {
      textEditor = new ej.inputs.TextBox({
        multiline: true,
        value: args.rowData[args.column.field],
        floatLabelType: 'Auto',
      });
      textEditor.appendTo(tbElem);
  }
  
  function valueAccessor(field, data, column) {
    var value = data[field];
    if (value != undefined) {
      return value.split('\n').join('<br>');
    } else {
      return '';
    }
  }

