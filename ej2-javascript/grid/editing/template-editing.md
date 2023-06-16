---
layout: post
title: Template editing in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Template editing in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Template editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in ##Platform_Name## Grid control

## Inline or dialog template editing

The dialog/inline template editing provides an option to customize the default behavior of dialog editing. Using the dialog template, you can render your own editors by defining the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Dialog/Inline` and [`editSetting.template`](../../api/grid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

In some cases, you need to add the new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you to customize the default edit dialog.

In the following sample, grid enabled with dialog template editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/dialogtemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/dialogtemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/dialogtemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/dialogtemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/dialogtemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/dialogtemplate-cs1" %}
{% endif %}

> The template form editors should have **name** attribute.

## Template context

The Essential JS2 packages has a built-in template engine. Using the template engine, you can access the row information inside the HTML element and bind the attributes, values, or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not.

In the following code example, the `OrderID` textbox has been disabled by using the `isAdd` property.

```
// The disabled attributes will be added based on the isAdd property.
<input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if}  ${if(isAdd)}'' ${else} disabled ${/if}/>

```

The following code example illustrates rendering the `OrderID` textbox, when a new record is added.

```

${if(isAdd)}
<div class="form-group col-md-6">
    <div class="e-float-input e-control-wrapper">
        <input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if} />
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
    </div>
</div>
${/if}

```

> The dialog/inline dialog template syntax supports the ES6 expression string literals, and you can refer to the [`Template Engine`](../../common/template-engine) for more template syntax.

## Render editors as components

You can convert the form editors to EJ2 controls in the [`actionComplete`](../../api/grid/#actioncomplete) event based on the `requestType` as `beginEdit` or `add`.

The following code example illustrates rendering the drop-down list control in the `actionComplete` event.

```ts

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);
            new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
        }
    }

```

## Get value from editor

You can read, format, and update the current editor value in the [`actionBegin`](../../api/grid/#actionbegin) event at the time of setting `requestType` to `save`.

In the following code example, the `freight` value has been formatted and updated.

```ts
    actionBegin: (args: SaveEventArgs) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['Freight'] = parseFloat(args.form.querySelector("#Freight").value);
        }
    }

```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog. If the first input element is in disabled or hidden state, focus the valid input element in the [`actionComplete`](../../api/grid/#actioncomplete) event based on `requestType` as `beginEdit`.

```ts

    actionComplete: (args: DialogEditEventArgs) => {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
        }
    }

```

## Adding validation rules for custom editors

If you have used additional fields that are not present in the column model, then add the validation rules to the [`actionComplete`](../../api/grid/#actioncomplete) event.

```ts

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
        }
    }

```

## Render tab component inside the dialog template

You can use the [`tab`](../../tab/) component inside the dialog edit UI using the dialog template feature. The dialog template feature can be enabled by defining the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Dialog` and [`editSetting.template`](../../api/grid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

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

To render the tab component, use the [`actionComplete`](../../api/grid/#actionComplete) event of the grid.

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
{% include code-snippet/grid/tabtemplate-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/tabtemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/tabtemplate-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/tabtemplate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/tabtemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/tabtemplate-cs1" %}
{% endif %}