---
layout: post
title: In line editing in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about In line editing in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: In line editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# In line editing in ##Platform_Name## Grid control

In Normal edit mode, when you start editing the currently selected record is changed to edit state. You can change the cell values and save edited data to the data source. To enable Normal edit, set the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Normal`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs40/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs40/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs40" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs40/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs40" %}
{% endif %}

> Normal edit mode is default mode of editing.

## Automatically update the column based on another column edited value

You can update the column value based on another column edited value by using the Cell Edit Template feature.

In the below demo, we have update the `TotalCost` column value based on the `UnitPrice` and `UnitInStock` column value while editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs41/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs41/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs41" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs41/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs41" %}
{% endif %}

## Cancel edit based on condition

You can prevent the CRUD operations of the Grid by using condition in the [`actionBegin`](../../api/grid/#actionbegin) event with requestType as `beginEdit` for editing, `add` for adding and `delete` for deleting actions.

In the below demo, we prevent the CRUD operation based on the `Role` column value. If the Role Column is `Employee`, we are unable to edit/delete that row.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs42/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs42/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs42" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs42/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs42/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs42" %}
{% endif %}

## Perform CRUD action programmatically

Grid methods can be used to perform CRUD operations programmatically. The [addRecord](../../api/grid/#addrecord), [deleteRecord](../../api/grid/#deleterecord), and [startEdit](../../api/grid/#startedit) methods are used to perform CRUD operations in the following demo.

* To add a new record to the Grid, use the [addRecord](../../api/grid/#addrecord) method. In this method, you can pass the data parameter to add a new record to the Grid, and the index parameter to add a record at a specific index. If you call this method with no parameters, it will create an empty row in the Grid.

* To change the selected row to the edit state, use the [startEdit](../../api/grid/#startedit) method.

* If you need to update the row data in the Grid’s datasource, you can use the [updateRow](../../api/grid/#updaterow) method. In this method, you need to pass the index value of the row to be updated along with the updated data.

* If you need to update the particular cell in the row, you can use the [setCellValue](../../api/grid/#setcellvalue) method. In this method, you need to pass the primary key value of the data source, field name, and new value for the particular cell.

* To remove a selected row from the Grid, use the [deleteRecord](../../api/grid/#deleterecord) method. For both edit and delete operations, you must select a row first.

>Note: In both normal and dialog editing modes, these methods can be used.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/programmaticedit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/programmaticedit-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/programmaticedit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/programmaticedit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/programmaticedit-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/programmaticedit-cs1" %}
{% endif %}

## Confirmation dialog

The delete confirm dialog can be shown when deleting a record by defining the [`showDeleteConfirmDialog`](../../api/grid/editSettings/#showdeleteconfirmdialog) as `true`

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs43/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs43/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs43" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs43/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs43/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs43" %}
{% endif %}

> The `showDeleteConfirmDialog` supports all type of edit modes.

## Default column values on add new row

The grid provides an option to set the default value for the columns when adding a new record in it. To set a default value for the particular column by defining the [`columns.defaultValue`](../../api/grid/column/#defaultvalue).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs44/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs44/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs44" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs44/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs44/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs44" %}
{% endif %}

## Adding a new row at the bottom of the Grid

By default, a new row will be added at the top of the grid. You can change it by setting [`editSettings.newRowPosition`](../api/grid/editSettings/#newRowPosition) as `Bottom`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs45/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs45/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs45" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs45/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs45/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs45" %}
{% endif %}

> Add newRowPostion is supported for `Normal` and `Batch` editing modes.

## Move the focus to a particular cell instead of first cell while editing a row

The [recordDoubleClick](../../api/grid/#recordDoubleClick) event allows you to move the focus to the corresponding cell (the cell that you doubled-clicked to edit a row) instead of the first cell in edit form. With the help of this event, you can focus the double-clicked column in inline edit mode.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/focus-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/focus-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/focus-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/focus-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/focus-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/focus-cs1" %}
{% endif %}