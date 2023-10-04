---
layout: post
title: Batch editing in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Batch editing in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Batch editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in ##Platform_Name## Grid control

In Batch edit mode, when you double-click on the grid cell, then the target cell changed to edit state. You can bulk save (added, changed and deleted data in the single request) to data source by click on the toolbar's `Update` button or by externally invoking the [`batchSave`]../api/grid/edit/#batchsave) method. To enable Batch edit, set the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Batch`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs17" %}
{% endif %}

> If a column's [allowEditing](../../api/grid/column/#allowediting) property is set to false, then the focus can be skipped in that non-editable column by clicking the tab or shift-tab key while in batch edit mode.

## Automatically update the column based on another column edited value in batch mode

You can update the column value based on another column edited value in Batch mode by using the Cell Edit Template feature.

In the below demo, we have update the `TotalCost` column value based on the `UnitPrice` and `UnitInStock` column value while editing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs18" %}
{% endif %}

## Cancel edit based on condition 

The Grid component provides to cancel the CRUD operations (Edit, Add, Delete) for particular row or cell in batch edit mode based on specific conditions. This feature allows you to control over whether editing should be allowed or prevented for certain rows or cells in the grid.

To cancel the edit action, you need to handle the [cellEdit](../../api/grid/#cellEdit) event. This event is triggered when a cell enters the edit mode. Within the event handler, you can add a condition to check whether the edit operation should be allowed or canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the edit operation.

To cancel the add action, you need to handle the [beforeBatchAdd](../../api/grid/#beforeBatchAdd) event. This event is triggered before a new record is added to the batch changes. Within the event handler, you can add a condition to determine whether the add operation should proceed or be canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the add operation.

To cancel the delete action, you need to handle the [beforeBatchDelete](../../api/grid/#beforeBatchDelete) event. This event is triggered before a record is deleted from the batch changes. Within the event handler, you can add a condition to control whether the delete operation should take place or be canceled. If the condition is met, set the `args.cancel` property to **true** to cancel the delete operation.

In the below demo, prevent the CRUD operation based on the **Role** column value. If the Role Column is **Admin**, then edit/delete action is prevented for that row.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs19" %}
{% endif %}

## Adding a new row at the bottom of the grid

The grid component allows you to add a new row at the bottom of the grid, allowing you to insert a new record at the end of the existing data set. This feature is particularly useful when you want to conveniently add new records without the need to scroll up or manually reposition the newly added row. To achieve this, you can make use of the [newRowPosition](../../api/grid/editSettings/#newrowposition) property in the `editSettings` configuration and set it to **Bottom**.

>* If you set `newRowPosition` as **Bottom**, you can use the **TAB** key to easily move between cells or rows in edit mode. As you enter data in each cell and press **TAB**, the grid will automatically create new rows below the current row, allowing you to conveniently add data for multiple rows without having to leave the edit mode.
>* If you set `newRowPosition` as **Top**, the grid will display a blank row form at the top by default, allowing you to enter data for the new record. However, when the data is saved or updated, it will be inserted at the bottom of the grid ,ensuring the new record appears at the end of the existing data set. 
>* If the paging feature is enabled, updating the row will automatically move it to the last page based on the page size.This behavior applies to both local and remote data binding.
>* If scrolling is enabled, you can use the **TAB** key to add a new row, even if the new row is added beyond the currently visible area of the grid.
>* Add `newRowPosition` is supported for **Normal** and **Batch** editing modes.

Here's an example that demonstrates how to enable adding new rows at the bottom of the grid using `newRowPosition` property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs19-BatchEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs19-BatchEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs19-BatchEdit" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs19-BatchEdit/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs19-BatchEdit/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs19-BatchEdit" %}
{% endif %}

## Confirmation dialog

Displaying a confirmation dialog provides an additional layer of confirmation when performing actions like saving a record or canceling changes in the grid. This dialog prompts for confirmation before proceeding with the action, ensuring that accidental or undesired changes are avoided. The grid component offers a built-in confirmation dialog that can be used to confirm save, cancel, and other actions.

To enable the confirmation dialog, you can set the [editSettings.showConfirmDialog](../../api/grid/editSettings/#showconfirmdialog) property of the `editSettings` configuration to **true**. The default value is **true**.

> * `editSettings.showConfirmDialog` requires the [`editSettings.mode`](../../api/grid/editSettings/#mode) to be **Batch**
> * If `editSettings.showConfirmDialog` set to **false**, then confirmation dialog does not display in batch editing.
> * While performing both update and delete operations, a separate delete confirmation dialog is shown at the time of clicking the delete button or pressing the delete key itself.

Here's an example that demonstrates how to enable/disable the confirmation dialog using the `showConfirmDialog` property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs20" %}
{% endif %}

## How to make editing in single click and arrow keys

You can enable editing in a single click and navigate between cells or rows using arrow keys without having to double-click or use the mouse for navigation. By default, in batch mode, the **TAB** key can be used to edit or move to the next cell or row and the **Enter** key is used to move to the next row cell. However, you can customize this behavior to enable editing with a single click or using arrow keys.

To enable editing in a single click, you can handle the [created](../../api/grid/#created) event of the Grid. Within the event handler,bind the click event to the grid cells and call the `editCell` method to make the clicked cell editable.

To enable editing using arrow keys, you can handle the [load](../../api/grid/#load) event of the Grid component. Inside the event handler, you can bind the keydown event to the grid element and check for arrow key presses. Based on the arrow key pressed, you can identify the next or previous cell using the `editCell` method and make it editable.

Here's an example that demonstrates how to achieve both single-click editing and arrow key navigation using the `created` and `load` events in conjunction with the `editCell` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs21" %}
{% endif %}