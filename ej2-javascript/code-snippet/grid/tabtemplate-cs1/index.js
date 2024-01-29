var countryData = ej.data.DataUtil.distinct(data, 'ShipCountry', true);
var grid = new ej.grids.Grid({
  dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: '#dialogtemplate' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true } },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionComplete: (args) => {
      if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        var tabObj = new ej.navigations.Tab({
          showCloseButton: false,
          selecting:  (e) => {if(e.isSwiped) {e.cancel = true;} if(e.selectingIndex === 1) {e.cancel = !validate(1)}},
          items: [
              { header: { 'text': 'Details' }, content: '#tab1' },
              { header: { 'text': 'Verify' }, content: '#tab2' },
          ]
      });
      tabObj.appendTo('#edittab');

      new ej.dropdowns.DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
      dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry'));

      new ej.buttons.CheckBox({ label: 'Verified', checked: args.rowData.Verified }, args.form.elements.namedItem('Verified'));
      // Set initail Focus
      if (args.requestType === 'beginEdit') {
          (args.form.elements.namedItem('CustomerID')).focus();
      }

      document.getElementById('next').onclick = () => {
        moveNext();
    }

    function validate(tab) {
      let valid = true;
       [].slice.call(document.getElementById('tab' + tab).querySelectorAll('[name]')).forEach(element => {
          element.form.ej2_instances[0].validate(element.name);
          if (element.getAttribute('aria-invalid') === 'true'){
              valid = false;
          }
      });
      if (!valid) {
      return false;
      }
      return true;
     }

     function moveNext() {
      if (validate(1)) {
          tabObj.select(1);
      }
      }

      document.getElementById('submit').onclick = () => {
        if (validate(2)) {
            grid.endEdit();
        }
      }
    }
    }
});
grid.appendTo('#Grid');