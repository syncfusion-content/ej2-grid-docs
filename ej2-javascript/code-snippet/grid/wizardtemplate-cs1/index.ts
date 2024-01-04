import { Grid, Edit, Toolbar, EditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { CheckBox } from '@syncfusion/ej2-buttons';

Grid.Inject(Edit, Toolbar);

let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Dialog',
        template: '#dialogtemplate',
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true},
        { field: 'CustomerID', headerText: 'Customer Name', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'Verified', headerText: 'Verified', type: 'boolean', displayAsCheckBox: 'true', width: 150}
    ],
    height: 265,
    actionComplete: (args: EditEventArgs) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            args.dialog.element.querySelector('.e-footer-content').classList.add('e-hide');
            new DropDownList(
                {
                    value: args.rowData.ShipCountry,
                    popupHeight: '300px',
                    floatLabelType: 'Always',
                    dataSource: countryData,
                    fields: { text: 'ShipCountry', value: 'ShipCountry' },
                    placeholder: 'Ship Country',
                },
                args.form.elements.namedItem('ShipCountry') as HTMLInputElement
            );
            new CheckBox(
                { label: 'Verified', checked: args.rowData.Verified },
                args.form.elements.namedItem('Verified')
            );
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (
                    args.form.elements.namedItem('CustomerID') as HTMLInputElement
                ).focus();
            }
            initializeWizard();
        }
    },
});
grid.appendTo('#Grid');

function initializeWizard() {
    let currentTab = 0;

    (document.getElementById('nextBtn') as HTMLElement).onclick = function () {
        if (validate()) {
            currentTab++;
            nextpre(currentTab);
        }
    };
    function validate() {
        let valid: boolean = true;
        [].slice
            .call(
                (document.getElementById('tab' + currentTab) as HTMLElement).querySelectorAll('[name]')
            )
            .forEach((element) => {
                element.form.ej2_instances[0].validate(element.name);
                if (element.getAttribute('aria-invalid') === 'true') {
                    valid = false;
                }
            });
        if (!valid) {
            return false;
        }
        return true;
    }
    (document.getElementById('prevBtn') as HTMLElement).onclick = function () {
        if (validate()) {
            currentTab--;
            nextpre(currentTab);
        }
    };
    (document.getElementById('saveButton') as HTMLElement).onclick = function () {
        grid.endEdit();
    };
}

function nextpre(current: number) {
    let tabs = [].slice.call(document.getElementsByClassName('tab'));
    tabs.forEach((element) => (element.style.display = 'none'));
    tabs[current].style.display = '';
    if (current === 2) {
        (document.getElementById('prevBtn') as HTMLElement).style.display = '';
        (document.getElementById('nextBtn') as HTMLElement).style.display = 'none';
    }
    if (!current) {
        (document.getElementById('prevBtn') as HTMLElement).style.display = 'none';
        (document.getElementById('nextBtn') as HTMLElement).style.display = '';
    } else {
        (document.getElementById('prevBtn') as HTMLElement).style.display = '';
    }
}