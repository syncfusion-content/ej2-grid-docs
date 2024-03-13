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

The Grid control provides powerful options for dynamically inserting, deleting, and updating records, enabling you to modify data directly within the grid. This feature is useful when you want to enable you to perform CRUD (Create, Read, Update, Delete) operations seamlessly.

To enable editing functionality directly within the grid, you need to configure the [allowEditing](../../api/grid/editSettingsModel/#allowediting), [allowAdding](../../api/grid/editSettingsModel/#allowadding), and [allowDeleting](../../api/grid/editSettingsModel/#allowdeleting) properties within the [editSettings](../../api/grid#editsettings)  to **true**.

Editing feature requires a primary key column for CRUD operations. To define the primary key, set [columns->isPrimaryKey](../../api/grid/column/#isprimarykey) to **true** in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on **Edit** button in the toolbar. Similarly, you can add a new record to grid either by clicking on **Add** button in the toolbar or on an external button which is bound to invoke the [addRecord](../../api/grid/edit/#addrecord) method of the grid, **Save** and **Cancel** while in edit mode is possible using respective toolbar icon in grid. Deletion of the record is possible by selecting the required row and click on **Delete** button in the toolbar.

To use CRUD, inject the [Edit](../../api/grid/edit/) module in the **Grid**.

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

> * If [columns->isIdentity](../../api/grid/column/#isidentity) is enabled, then it will be considered as a read-only column when editing and adding a record.
> * You can disable editing for a particular column, by specifying `columns.allowEditing` to **false**.
>* You can use the **Insert** key to add a new row to the grid and use the **Delete** key to delete the selected row from the grid.

## Toolbar with edit option

The toolbar with edit option feature in the Grid control provides a [built-in toolbar](../../toolbar/item-configuration) that includes various items for executing editing actions. This feature allows you to easily perform edit operations on the grid data, such as modifying cell values, updating changes, and canceling edits. 

To enable this feature, you need to configure the [toolbar](../../api/grid/#toolbar) property of the Grid control. This property allows you to define the items that will be displayed in the grid toolbar. By including the relevant items like **Edit**, **Add**, **Delete**, **Update**, and **Cancel** within the `toolbar` property, you can enable the edit options in the toolbar.

Here's an example of how to enable the toolbar with edit option in the Grid:

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

In Grid control, you have an option to disable editing for a specific column. This feature is useful when you want to prevent editing certain columns, such as columns that contain calculated values or read-only data.

To disable editing for a particular column, you can use the [allowEditing](../../api/grid/column/#allowediting)  property of the **columns** object. By setting this property to **false**, you can prevent editing for that specific column.

Here's an example that demonstrates how to disable editing for the column in the Grid:

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

>* If you have set the [isPrimaryKey](../../api/grid/column/#isprimarykey) property to **true** for a column, editing will be automatically disabled for that column.
> * You can disable the particular row using [actionBegin](../../api/grid/#actionbegin) event.please refer this [link](../../grid/editing/in-line-editing#disable-editing-for-a-particular-row).
>* You can disable the particular cell using [cellEdit](../../api/grid/#celledit) event.please refer this [link](../../grid/editing/batch-editing#disable-editing-for-a-particular-cell).

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

In the following example, the textbox is rendered in the Freight column using a column template. The keyup event for the Grid is bound using the [created](../../api/grid/#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](../../api/grid/#updaterow) method of the Grid.

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
* [How to use Document Editor as an edit field in Data Grid](https://support.syncfusion.com/kb/article/10154/how-to-use-document-editor-as-an-edit-field-in-data-grid)
* [How to render custom confirmation dialog while updating edit operations](https://support.syncfusion.com/kb/article/10247/how-to-render-custom-confirmation-dialog-while-updating-edit-operations)
* [How to render ColorPicker control for particular column while editing a record](https://support.syncfusion.com/kb/article/10014/how-to-render-colorpicker-control-for-particular-column-while-editing-a-record)
* [How to positioning the validation error message](https://support.syncfusion.com/kb/article/9819/how-to-positioning-the-validation-error-message-in-javascript-grid)