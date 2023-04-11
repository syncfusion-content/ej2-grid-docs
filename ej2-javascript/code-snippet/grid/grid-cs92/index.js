var countryElem;
var countryObj;
var stateElem;
var stateObj;

var country = [
    { countryName: 'United States', countryId: '1' },
    { countryName: 'Australia', countryId: '2' }
];
var state = [
    { stateName: 'New York', countryId: '1', stateId: '101' },
    { stateName: 'Virginia ', countryId: '1', stateId: '102' },
    { stateName: 'Washington', countryId: '1', stateId: '103' },
    { stateName: 'Queensland', countryId: '2', stateId: '104' },
    { stateName: 'Tasmania ', countryId: '2', stateId: '105' },
    { stateName: 'Victoria', countryId: '2', stateId: '106' }
];
ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: cascadeData,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 } },
        {
            field: 'ShipCountry', headerText: 'Ship Country', width: 120, edit: {
                create: function(){
                    countryElem = document.createElement('input');
                    return countryElem;
                },
                read: function(){
                    return countryObj.text;
                },
                destroy: function(){
                    countryObj.destroy();
                },
                write: function(){
                    countryObj = new ej.dropdowns.DropDownList({
                        dataSource: country,
                        fields: { value: 'countryId', text: 'countryName' },
                        change: function(){
                            stateObj.enabled = true;
                            var tempQuery = new ej.data.Query().where('countryId', 'equal', countryObj.value);
                            stateObj.query = tempQuery;
                            stateObj.text = null;
                            stateObj.dataBind();
                        },
                        placeholder: 'Select a country',
                        floatLabelType: 'Never'
                    });
                    countryObj.appendTo(countryElem);
                }
            }
        },
        {
            field: 'ShipState', headerText: 'Ship State', width: 150, edit: {
                create: function(){
                    stateElem = document.createElement('input');
                    return stateElem;
                },
                read: function(){
                    return stateObj.text;
                },
                destroy: function(){
                    stateObj.destroy();
                },
                write: function(){
                    stateObj = new ej.dropdowns.DropDownList({
                        dataSource: state,
                        fields: { value: 'stateId', text: 'stateName' },
                        enabled: false,
                        placeholder: 'Select a state',
                        floatLabelType: 'Never'
                    });
                    stateObj.appendTo(stateElem);
                }
            }
        }
    ],
    height: 273
});
grid.appendTo('#Grid');

