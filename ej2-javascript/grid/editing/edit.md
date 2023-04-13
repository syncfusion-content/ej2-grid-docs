---
layout: post
title: Edit in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Edit in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Edit 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Edit in ##Platform_Name## Grid control

The Grid component has options to dynamically insert, delete and update records. Editing feature requires a primary key column for CRUD operations. To define the primary key, set [`columns.isPrimaryKey`](../../api/grid/column/#isprimarykey) to `true` in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on `Edit` button in the toolbar. Similarly, you can add a new record to grid either by clicking on `Add` button in the toolbar or on an external button which is bound to invoke the [`addRecord`](../../api/grid/edit/#addrecord) method of the grid, `Save` and `Cancel` while in edit mode is possible using respective toolbar icon in grid.

Deletion of the record is possible by selecting the required row and click on `Delete` button in the toolbar.

To use CRUD, inject the [`Edit`](../../api/grid/edit) module in grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs35/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs35/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs35" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs35/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs35/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs35" %}
{% endif %}

> * If [`columns.isIdentity`](../../api/grid/column/#isidentity) is enabled, then it will be considered as a read-only column when editing and adding a record.
> * You can disable editing for a particular column, by specifying [`columns.allowEditing`](../../api/grid/column/#allowediting) to `false`.

## Toolbar with edit option

The grid toolbar has the [built-in items](../tool-bar) to execute Editing actions. You can define this by using the [`toolbar`](../../api/grid/edit/#toolbar) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs36/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs36/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs36" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs36/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs36/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs36" %}
{% endif %}

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](../../api/grid/column/#allowediting).

In the following demo, editing is disabled for the `CustomerID` column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs37/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs37/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs37" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs37/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs37/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs37" %}
{% endif %}

## Disable editing for a particular row or cell

You can disable the editing for a particular row by using the [`actionBegin`](../../api/grid/#actionbegin) event of Grid based on `requestType` as `beginEdit`.

In the below demo, the rows which are having the value for `ShipCountry` column as "France" is prevented from editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs38/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs38/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs38" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs38/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs38/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs38" %}
{% endif %}

For batch mode of editing, you can use [`cellEdit`](../../api/grid/#celledit) event of Grid. In the below demo, the cells which are having the value as "France" is prevented from editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs39/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs39/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs39" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs39" %}
{% endif %}

## Editing template column

You can edit the template column value by defining the `field` for that particular column.

In the below demo, the `ShipCountry` column is rendered with the template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/edit-column-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit-column-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/edit-column-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/edit-column-template-cs1" %}
{% endif %}

## Troubleshoot editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row. If `primaryKey` is not defined in the grid, then edit or delete action take places the first row.

## How to make a Grid column always editable

Make the Grid column always editable using the column template feature of the Grid.

In the following example, the textbox is rendered in the Freight column using a column template. The keyup event for the Grid is bound using the [created](../../api/grid#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](../../api/grid#updaterow) method of the Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/editable-grid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/editable-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/editable-grid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/editable-grid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/editable-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/editable-grid-cs1" %}
{% endif %}

## See Also

* [Customize dialog when editing](../how-to/customize-the-edit-dialog)
* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list-with-grid-editing)
* [Customize the Edit Dialog](../how-to/customize-the-edit-dialog)
* [Tab Inside the Dialog Template](../how-to/using-the-tab-inside-the-dialog-template)
* [How to bulk edit columns in Grid](https://www.syncfusion.com/blogs/post/bulk-edit-columns-in-javascript-datagrid.aspx)
* [How to use Document Editor as an edit field in Data Grid](https://www.syncfusion.com/kb/11722/how-to-use-document-editor-as-an-edit-field-in-data-grid)
* [How to render custom confirmation dialog while updating edit operations](https://www.syncfusion.com/kb/11695/how-to-render-custom-confirmation-dialog-while-updating-edit-operations)
* [How to render ColorPicker component for particular column while editing a record](https://www.syncfusion.com/kb/11569/how-to-render-colorpicker-component-for-particular-column-while-editing-a-record)
* [How to positioning the validation error message](https://www.syncfusion.com/kb/11217/how-to-positioning-the-validation-error-message)