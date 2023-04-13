---
layout: post
title: How to in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about How to in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: How to 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to in ##Platform_Name## Grid control

## Refresh the data source

You can add/delete the data source records through an external button. To reflect the data source changes in the grid, invoke the [`refresh`](../api/grid/#refresh) method.

To refresh the data source:

**Step 1**:

Add/delete the data source record by using the following code.

```ts
    grid.dataSource.unshift(data); // add a new record.

    grid.dataSource.splice(selectedRow, 1); // delete a record.

```

**Step 2**:

Refresh the grid after the data source change by using the [`refresh`](../api/grid/#refresh) method.

```ts
    grid.refresh(); // refresh the Grid.

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/refresh-grid-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/refresh-grid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/refresh-grid-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/refresh-grid-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/refresh-grid-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/refresh-grid-cs2" %}
{% endif %}

## Toolbar

### Create custom toolbar with drop-down list

You can create your own ToolBar items in the Grid. It can be added by defining the [`toolbar`](../api/grid/#toolbar) as HTML element ID. Actions for this ToolBar template items are defined in the [`toolbarClick`](../api/grid/#toolbarclick).

To include components in the ToolBar, please ensure the following steps:

**Step 1**:

Initialize the template for your custom component. Using the following code add the DropDownList component to the ToolBar.

```
        <div id='toolbar-template'>
            <div id='dropdown' style="margin-top:5px">
                <input type="text" tabindex="1" id='ddlelement' />
            </div>
        </div>

```

**Step 2**:

To render the DropDownList component, use the [`dataBound`](../api/grid/#databound) event of the Grid.

* You can select the grid row index based on the selected data in the DropDownList. The output will appear as follows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-dropdown-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-dropdown-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-dropdown-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-dropdown-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-dropdown-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-dropdown-cs2" %}
{% endif %}

## Enable/Disable Grid and its actions

You can enable/disable the Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the grid and its actions, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```
    .disablegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**:

Add/Remove the CSS class to the Grid in the click event handler of Button.

```ts
    document.getElementById('primarybtn').addEventListener('click', () => {
        if (grid.element.classList.contains('disablegrid')) {
            grid.element.classList.remove('disablegrid');
            document.getElementById("GridParent").classList.remove('wrapper');
        }
        else {
            grid.element.classList.add('disablegrid');
            document.getElementById("GridParent").classList.add('wrapper');
        }
    });

```

In the below demo, the button click will enable/disable the Grid and its actions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/disablegrid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/disablegrid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/disablegrid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/disablegrid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/disablegrid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/disablegrid-cs1" %}
{% endif %}

## Columns

### Change column header text dynamically

You can change the column [`headerText`](../api/grid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](../api/grid/#getcolumnbyfield) method.
Then, change the header text value.

```ts
let column = grid.getColumnByField("ShipCity"); // Get column object.
column.headerText = 'Changed Text';

```

**Step 2**:

To reflect the changes in the grid header, invoke the [`refreshHeader`](../api/grid/#refreshheader) method.

```ts
grid.refreshHeader();

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/change-header-text-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/change-header-text-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/change-header-text-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/change-header-text-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/change-header-text-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/change-header-text-cs2" %}
{% endif %}

### Customize column styles

You can customise the appearance of the header and content of a particular column using the [`customAttributes`](../api/grid/column/#customattributes) property.

To customize the grid column, follow the given steps:

**Step 1**:

Create a CSS class with custom style to override the default style for rowcell and headercell.

```
.e-grid .e-rowcell.customcss{
    background-color: #ecedee;
    color: 'red';
    font-family: 'Bell MT';
    font-size: 20px;
}

.e-grid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: 20px;
}

```

**Step 2**:

Add the custom CSS class to the specified column by using the [`customAttributes`](../api/grid/column/#customattributes) property.

```ts
{ field: 'ShipCity', headerText: 'Ship City', customAttributes: {class: 'customcss'}, width: 100 },

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-column-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-column-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-column-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-column-cs2" %}
{% endif %}

### Display custom tooltip for columns in grid

To display custom ToolTip ([`EJ2 Tooltip`](../../tooltip/getting-started)),  use the [`queryCellInfo`](../api/grid/#querycellinfo) event.

Render the ToolTip component for the grid cells by using the following code in the [`queryCellInfo`](../api/grid/#querycellinfo) event.

```ts
function tooltip (args: QueryCellInfoEventArgs) {
    let tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString();
    }, args.cell);
}

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-tooltip-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-tooltip-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-tooltip-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-tooltip-cs2" %}
{% endif %}

### Render other components in a column

You can render any component in a grid column using the [`template`](../api/grid/column/#template) property.

To render other components in the grid, ensure the following steps:

**Step 1**:

Initialize the column template for your custom component.

```ts
template:`<div>
            <select class="e-control e-dropdownlist">
                <option value="1" selected="selected">Order Placed</option>
                <option value="2">Processing</option>
                <option value="3">Delivered</option>
            </select>
        </div>`

```

**Step 2**:

Using the [`queryCellInfo`](../api/grid/#querycellinfo) event, you can render the DropDown component with the following code.

```ts
    function dropdown(args: QueryCellInfoEventArgs) {
        let ele=args.cell.querySelector('select');
        let drop = new DropDownList({popupHeight: 150, popupWidth: 150});
        drop.appendTo(ele);
    }

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-sync-comp-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-sync-comp-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-sync-comp-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-sync-comp-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-sync-comp-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-sync-comp-cs2" %}
{% endif %}

### Change the orientation of the header text

You can change the orientation of the header text by using the [`customAttributes`](../api/grid/column/#customattributes) property.

Ensure the following steps:

**Step 1**:

Create a CSS class with orientation style for the grid header cell.

```
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}

```

**Step 2**:

Add the custom CSS class to a particular column by using the [`customAttributes`](../api/grid/column/#customattributes) property.

```ts
    { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Center', customAttributes: {class: 'orientationcss'}, width: 80 },

```

**Step 3**:

Resize the header cell height by using the following code.

```ts
function setHeaderHeight(args) {
    let textWidth: number = document.querySelector(".orientationcss > div").scrollWidth;//Obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for(let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
    }
}

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/orientation-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/orientation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/orientation-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/orientation-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/orientation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/orientation-cs2" %}
{% endif %}

### Customize the icon for column menu

You can customize the column menu icon by overriding the default grid class `.e-icons.e-columnmenu` with a custom property `content` as mentioned below.

```
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
              content: "\e941";
      }
```

In the below sample, grid is rendered with a customized column menu icon.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-column-menu-icon-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-column-menu-icon-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-column-menu-icon-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-column-menu-icon-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-column-menu-icon-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-column-menu-icon-cs2" %}
{% endif %}

## Editing

### Editing with template column

You can edit the template column value by defining the `field` for that particular column.

In the below demo, the `ShipCountry` column is rendered with the template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/edit-column-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-column-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit-column-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/edit-column-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-column-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/edit-column-template-cs2" %}
{% endif %}

### Customize the edit dialog

You can customize the appearance of the edit dialog in the [`actionComplete`](../api/grid/#actioncomplete) event based on `requestType` as `beginEdit` or `add`.

In the following example, the dialog's header text has been changed for editing and adding the records.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/customizedialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customizedialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/customizedialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/customizedialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs1" %}
{% endif %}

### Show or Hide columns in Dialog editing

You can show hidden columns or hide visible column's editor in the dialog while editing the grid record using [`actionBegin`](../api/grid/#actionbegin) and [`actionComplete`](../api/grid/#actioncomplete) events.

In the `actionBegin` event, based on `requestType` as `beginEdit` or  `add`. We can show or hide the editor by using `column.visible` property.

In the `actionComplete` event, based on `requestType` as `save`. We can reset the properties back to the column state.

In the below example, we have rendered the grid columns `CustomerID` as hidden column and `ShipCountry` as visible column. In the edit mode, we have changed the `CustomerID` column to visible state and `ShipCountry` column to hidden state.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs91/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs91/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs91" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs91/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs91/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs91" %}
{% endif %}

### Cascading drop-down list with grid editing

You can achieve the Cascading DropDownList with grid Editing by using the Cell Edit Template feature.

In the below demo, Cascading DropDownList is rendered for the `ShipCountry` and `ShipState` column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs92/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs92/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs92" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs92/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs92/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs92" %}
{% endif %}

### Provide custom data source and enabling filtering to DropDownList

You can provide data source to the DropDownList by using the [`columns.edit.params`](../api/grid/column/#edit) property.

While setting new data source using edit params, you must specify a new `query` property too for the dropdownlist as follows,

```ts
{
    params: {
        query: new Query(),
        dataSource: country,
        fields: { value: 'ShipCountry', text: 'ShipCountry' },
        allowFiltering: true
        }
}
```

You can also enable filtering for the dropdownlist by passing the `allowFiltering` as `true` to the edit params.

In the below demo, DropDownList is rendered with custom Datasource for the `ShipCountry` column and enabled filtering to search dropdownlist items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs93/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs93/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs93" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs93/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs93/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs93" %}
{% endif %}

### Access Editor components

You can access the component instance from the component element using the `ej2_instances` property.

In the below demo, you can access the Editor component instance while adding or editing actions on the [`actionComplete`](../api/grid/#actioncomplete) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs94/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs94/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs94" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs94/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs94/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs94" %}
{% endif %}

### Use Wizard like Dialog Editing

Wizard helps you to create intuitive step-by-step forms to fill. You can achieve the wizard-like editing by using the dialog template feature. It supports your own editing template by defining the [`editSettings.mode`](../api/grid/editSettings/#mode) as `Dialog` and [`editSetting.template`](../api/grid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

The following example demonstrates the wizard-like editing in the grid with obtrusive validation.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/wizardtemplate-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/wizardtemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/wizardtemplate-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/wizardtemplate-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/wizardtemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/wizardtemplate-cs2" %}
{% endif %}

### Using the tab inside the dialog template

You can use the [`tab`](../../tab/index.html) component inside the dialog edit UI using the dialog template feature. The dialog template feature can be enabled by defining the [`editSettings.mode`](../api/grid/editSettings/#mode) as `Dialog` and [`editSetting.template`](../api/grid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

To include the tab components in the dialog, follow the given steps:

**Step 1**:

Initialize the template for your tab component.

```
        <div>
        <div id="edittab"></div>
            <div id="tab1">
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <div class="e-float-input e-control-wrapper">
                            <input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if} ${if(isAdd)} '' ${else} disabled ${/if} />
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
                        </div>
                    </div>
                </div>
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <div class="e-float-input e-control-wrapper">
                            <input id="CustomerID" name="CustomerID" type="text" value=${if(isAdd)} '' ${else} ${CustomerID} ${/if} />
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="CustomerID">Customer ID</label>
                        </div>
                    </div>
                </div>
                <button id='next' class='e-info e-btn' style="float: right" type='button'> next</button>
            </div>

            <div id="tab2" style='display: none'>
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <input type="text" name="ShipCountry" id="ShipCountry" value=${if(isAdd)} '' ${else} ${ShipCountry} ${/if} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="checkbox" name="Verified" id="Verified" ${if(isAdd)} '' ${else} checked ${/if} />
                    </div>
                </div>
                <button id='submit' class='e-info e-btn' style="float: right" type='button'> submit</button>
            </div>
        </div>

```

**Step 2**:

To render the tab component, use the [`actionComplete`](../api/grid/#databound) event of the grid.

```ts

    let tabObj: Tab = new Tab({
        showCloseButton: false,
        selecting:  (e) => {if(e.isSwiped) {e.cancel = true;} if(e.selectingIndex === 1) {e.cancel = !validate(1)}},
        items: [
            { header: { 'text': 'Details' }, content: '#tab1' },
            { header: { 'text': 'Verify' }, content: '#tab2' },
        ]
    });
    tabObj.appendTo('#edittab');

```

The following example demonstrates rendering the tab control inside the edit dialog. The tab control contains two tabs. You can fill the first tab and then navigate to the second tab. The validation for first tab will be done before navigating to the second tab.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/tabtemplate-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/tabtemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/tabtemplate-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/tabtemplate-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/tabtemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/tabtemplate-cs2" %}
{% endif %}

### Disable editing for a particular row/cell

You can disable the editing for a particular row by using the [`actionBegin`](../api/grid/#actionbegin) event of Grid based on `requestType` as `beginEdit`.

In the below demo, the rows which are having the value for `ShipCountry` column as "France" is prevented from editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs95/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs95/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs95" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs95/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs95/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs95" %}
{% endif %}

For batch mode of editing, you can use [`cellEdit`](../api/grid/#celledit) event of Grid. In the below demo, the cells which are having the value as "France" is prevented from editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs96/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs96/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs96" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs96/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs96/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs96" %}
{% endif %}

### Perform Grid actions by keyboard shortcut keys

Using keyboard shortcuts, Grid performs navigation and actions.

In addition, You can also perform grid actions with custom keyboard shortcuts. This operation has to be achieved outside of the grid with the help of `keydown` event.

The following example demonstrates on `Adding` a new row when `Enter` key is pressed in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs97/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs97/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs97" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs97/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs97/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs97" %}
{% endif %}

### Make a cell editable on a single click with batch editing

You can make a cell editable on a single click with `batch` mode of editing in Grid, by using the [`editCell`](../api/grid/edit/#editcell) method.

Bind the click event for Grid and in the click event handler call the [`editCell`](../api/grid/edit/#editcell) method, based on the clicked target element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs98/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs98/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs98" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs98/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs98/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs98" %}
{% endif %}

## Filter

### Customizing filter menu operators list

 You can customize the default filter operator list by defining the [`filterSettings.operators`](../api/grid/filterSettings/#operators) property.
The available options are:
* `stringOperator`- Defines the customized string operator list.
* `numberOperator` - Defines the customized number operator list.
* `dateOperator` - Defines the customized date operator list.
* `booleanOperator` - Defines the customized Boolean operator list.

The following sample illustrates customizing the string filter operators.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs99/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs99/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs99" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs99/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs99/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs99" %}
{% endif %}

## Sort

### Perform single/multi sorting dynamically

You can perform single-column or multi-column sorting dynamically through an external button.

To perform single-column sorting, use the [`sortColumn`](../api/grid/sort/#sortcolumn) method of Grid.

```ts
    document.getElementById('SingleSort').addEventListener('click', () => {
        grid.sortColumn("OrderID","Descending")
    });
```

To perform multi-column sorting, you need to push the columns to be sorted into the [`sortSettings.columns`](../api/grid/sortSettings/#columns).

```ts
    document.getElementById('MultiSort').addEventListener('click', () => {
        grid.sortModule.sortSettings.columns.push({ field: 'ShipCity',  direction: 'Ascending' },{ field: 'ShipName', direction: 'Descending' });
        grid.refresh();
    });
```

In the below demo, click on the corresponding button to perform single-column or multi-column sorting.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sort-how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sort-how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort-how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sort-how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sort-how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sort-how-to-cs1" %}
{% endif %}

### Dynamically clear sort for particular/entire sorted columns in Grid

You can clear the sorting for a particular column or the entire sorted columns in Grid dynamically through an external button.

To clear sort for a particular column, you need to splice the particular column from the [`sortSettings.columns`](../api/grid/sortSettings/#columns).

```ts
    document.getElementById('SingleClearSort').addEventListener('click', () => {
        let column: Column = grid.sortModule.sortSettings.columns;
        for(let i=0;i < column.length;i++){
            if(column[i].field === "OrderID") {
                column.splice(i,1);
                grid.refresh();
            }
        }
    });
```

To clear sorting for all the sorted columns, use the [`clearSorting`](../api/grid/sort/#clearsorting) method of Grid.

```ts
    document.getElementById('MultiClearSort').addEventListener('click', () => {
        grid.clearSorting();
    });
```

In the below demo, click on the corresponding button to clear sort for particular or entire sorted columns in Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/clear-sort-how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/clear-sort-how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/clear-sort-how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/clear-sort-how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/clear-sort-how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/clear-sort-how-to-cs1" %}
{% endif %}

## Foreign Key

### Use Edit Template in Foreign Key Column

By default, the foreign key column uses the drop-down component for editing. You can render other than the drop-down component by using the [`column.edit`](../api/grid/column/#edit) property. The following example demonstrates the way of using edit template in the foreign column.

In the following code example, the `Employee Name` is a foreign key column. When editing, the AutoComplete component is rendered instead of drop-down list.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs7" %}
{% endif %}

### Customize filter UI in foreign key column

You can create your own filtering UI by using [`column.filter`](../api/grid/column/#filter) property. The following example demonstrates the way to create a custom filtering UI in the foreign column.

In the following example, The `Employee Name` is a foreign key column. DropDownList is rendered using Filter UI.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs8" %}
{% endif %}

### Use filter bar template in foreign key column

You can use the filter bar template in foreign key column by defining the [`column.filterBarTemplate`](../api/grid/column/#filterbartemplate) property. The following example demonstrates the way to use filter bar template in foreign column.

In the following example, The `Employee Name` is a foreign key column. This column header shows the custom filter bar template and you can select filter value by using the `DropDown` options.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs9" %}
{% endif %}

### Perform aggregation in Foreign Key Column

Default aggregations are not supported in a foreign key column. You can achieve aggregation for the foreign key column by using the custom aggregates. The following example demonstrates the way to achieve aggregation in foreign key column.

In the following example, The `Employee Name` is a foreign key column and the aggregation for the foreign column was calculated in customAggregateFn.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/foreign-key-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/foreign-key-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/foreign-key-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs10" %}
{% endif %}

### Bind foreign key dataSource on dropdown edit

When editing, you can bind foreign key datasource to a dropdown list by using [`column.dataSource`](../api/grid/column/#datasource) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs100/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs100/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs100" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs100/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs100/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs100" %}
{% endif %}

> * By default, the foreign key column's `editType` will be set as `dropdownedit`.

## Exporting

### Exporting Grid in Cordova application

Cordova application does not support direct file download. So we have to use the Blob stream to export the Grid. You can use corresponding exporting methods and exportComplete events to get the Blob stream.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/exporting-blob-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/exporting-blob-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/exporting-blob-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/exporting-blob-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/exporting-blob-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/exporting-blob-data-cs1" %}
{% endif %}

### Exporting Filtered Data Only

You can export the filtered data by defining the resulted data in `exportProperties.dataSource` before export.

In the below Pdf exporting demo, We have gotten the filtered data by applying filter query to the grid data and then defines the resulted data in `exportProperties.dataSource` and pass it to `pdfExport` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/exporting-filtered-data-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/exporting-filtered-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/exporting-filtered-data-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/exporting-filtered-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/exporting-filtered-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/exporting-filtered-data-cs1" %}
{% endif %}

## Pager

### Customize pager drop-down

To customize the default values of pager drop-down, you need to define the [`pageSizes`](../api/grid/pageSettingsModel/#pagesizes) as array of strings.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/pagerdropdown-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/pagerdropdown-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pagerdropdown-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/pagerdropdown-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/pagerdropdown-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/pagerdropdown-cs2" %}
{% endif %}

## Hide the expand/collapse icon in parent row with no record in child grid

By default, the expand/collapse icon will be visible even if the child grid is empty.

You can use [`rowDataBound`](../api/grid/#rowdatabound) event to hide the icon when there is no record in child grid.

To hide the expand/collapse icon in parent row with no record in child grid, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```
    .e-row[aria-selected="true"] .e-customizedExpandcell {
        background-color: #e0e0e0;
    }

    .e-grid.e-gridhover tr[role='row']:hover {
        background-color: #eee;
    }

```

**Step 2**:

Add the CSS class to the Grid in the [`rowDataBound`](../api/grid/#rowdatabound) event handler of Grid.

```ts
    function rowDataBound(args:any):void{
        var filter = args.data.EmployeeID;
        var data = new DataManager(this.childGrid.dataSource).executeLocal(new Query().where("EmployeeID", "equal", parseInt(filter), true));
        if(data.length == 0) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML=" ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
    }

```

In the below demo, the expand/collapse icon in the row with `EmployeeID` as `1` is hidden as it does not have record in child Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs101/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs101/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs101" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs101/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs101/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs101" %}
{% endif %}

## Render images in the dropdownList editor component using the item template

To display an image in the DropDownList editor component, you can utilize the `itemTemplate` property. This property allows you to customize the content of each item in the dropdown list.

The below example shows how to use the itemTemplate property in the DropDownList editor component to display an image in the dropdown list. Here, we render the image for each item in the dropdown list of the foreign key column `Employee Name`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs102/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs102/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs102" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs102/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs102/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs102" %}
{% endif %}