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

## Editing template column

The editing template column feature in the Grid allows you to create custom editing templates for specific columns in the grid. This feature is particularly useful when you need to customize the editing experience for certain columns, such as using custom input controls or displaying additional information during editing.

To enable the editing template column feature, you need to define the [field](../../api/grid/column/#field) property for the specific column in the grid's configuration. The `field` property maps the column to the corresponding field name in the data source, allowing you to edit the value of that field.

In the below demo, the **ShipCountry** column is rendered with the template.

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

## Customize delete confirmation dialog

Customizing the delete confirmation dialog in Grid allows you to personalize the appearance, content, and behavior of the dialog that appears when you attempts to delete an item. You can modify properties like header, showCloseIcon, and height to tailor the edit dialog to your specific requirements. Additionally, you can override default localization strings to provide custom text for buttons or other elements within the dialog.

To customize the delete confirmation dialog, you can utilize the [toolbarClick](../../api/grid/#toolbarclick) event. This event is triggered when a toolbar item, such as the delete button, is clicked.

>* To enable the confirmation dialog for the delete operation in the Grid, you can set the [showDeleteConfirmDialog](../../api/grid/editSettings/#showdeleteconfirmdialog) property of the `editSettings` configuration to **true**.
>* You can refer the Grid [Default text](../global-local) list for more localization.

The following example that demonstrates how to customize the delete confirmation dialog using the `toolbarClick` event:

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

## Update boolean column value with a single click   

The Syncfusion Grid allows you to update a boolean column value with a single click in the normal mode of editing. This feature streamlines the process of toggling boolean values within the grid, enhancing interaction and efficiency. This can be achieved through the use of the column template feature.

In the following sample, the `CheckBox` control is rendered as a template in the **Verified** column to make it editable with a single click.

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

## Edit enum column 

The Syncfusion Grid provides a feature that allows you to edit enum type data in a grid column. This is particularly useful when you need to edit enumerated list data efficiently.

In the following example, the `DropDownList` control is rendered within the cell edit template for the Employee Feedback column using edit property. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/edit-enum-column/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-enum-column/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit-enum-column" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/edit-enum-column/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-enum-column/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/edit-enum-column" %}
{% endif %}

## Edit complex column 

The edit template for complex column in Grid is used to customize the editing experience when dealing with complex data structures. This capability is particularly useful for handling nested data objects within grid columns. By default, the grid binds complex data to column fields using the dot (.) operator. However, when you render custom elements, such as input fields, in the edit template for a complex column, you must use the (___) underscore operator instead of the dot (.) operator to bind the complex object.

In the following sample, the input element is rendered in the edit template of the FirstName and LastName column. The edited changes can be saved using the `name` property of the input element. Since the complex data is bound to the FirstName and LastName column, The `name` property should be defined as **Name___FirstName** and **Name___LastName**, respectively, instead of using the dot notation (**Name.FirstName** and **Name.LastName**).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/edit-complex-column/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-complex-column/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit-complex-column" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/edit-complex-column/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-complex-column/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/edit-complex-column" %}
{% endif %}

## Edit foreign key column 

The Syncfusion Grid offers a powerful editing feature for foreign key columns, enhancing the default rendering of the DropDownList control during editing. This flexibility is particularly useful when you need to customize the editor for foreign key columns. By default, the Syncfusion Grid renders the DropDownList control as the editor for foreign key columns during editing. However, you can enhance and customize this behavior by leveraging the cell edit template  for the column using [edit](../../api/grid/column/#edit) property . The [edit](../../api/grid/column/#edit) property allows you to specify a cell edit template that serves as an editor for a particular column.

In the following code example, the Employee Name is a foreign key column. When editing, the ComboBox control is rendered instead of DropDownList.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/edit-foreignKey-column/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-foreignKey-column/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit-foreignKey-column" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/edit-foreignKey-column/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-foreignKey-column/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/edit-foreignKey-column" %}
{% endif %}

## How to perform CRUD action externally 

Performing CRUD (Create, Read, Update, Delete) actions externally in the Syncfusion Grid allows you to manipulate grid data outside the grid itself. This can be useful in scenarios where you want to manage data operations programmatically.

### Using separate toolbar 

The Syncfusion Grid enables external CRUD operations, allowing you to efficiently manage data manipulation within the grid. This capability is particularly useful when you need to manage data operations using a separate toolbar.

To perform CRUD operations externally, the following methods are available:

[addRecord](../../api/grid/#addrecord) - To add a new record. If no data is passed then add form will be shown.
[startEdit](../../api/grid/#startedit) - To edit the selected row.
[deleteRecord](../../api/grid/#deleterecord) - To delete a selected row.
[endEdit](../../api/grid/#endedit) - If the grid is in editable state, then you can save a record by invoking this method.
[closeEdit](../../api/grid/#closeedit) - To cancel the edited state.

The following example demonstrates the integration of the Syncfusion Grid with a separate toolbar for external CRUD operations. The toolbar contains buttons for Add, Edit, Delete, Update, and Cancel.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/edit-separate-column/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-separate-column/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit-separate-column" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/edit-separate-column/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-separate-column/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/edit-separate-column" %}
{% endif %}

### Using external form 

Performing the edit operation in a custom external form in the Syncfusion Grid is a valuable feature when you need to customize the edit operation within a separate form rather than the default in-grid editing. 

To enable the use of an external form for editing in Syncfusion Grid, you can make use of the `RowSelected` property. This property specifies whether the edit operation should be triggered when a row is selected.

In the following example, it demonstrates how to edit the form using an external form by utilizing the `RowSelected` property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/edit-external-form/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-external-form/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit-external-form" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/edit-external-form/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/edit-external-form/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/edit-external-form" %}
{% endif %}

## Troubleshoot editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row. If [isPrimaryKey](../../api/grid/column/#isprimarykey) property is not defined in the grid, then edit or delete action take places the first row. To overcome this, ensure that you establish the `isPrimaryKey` property as **true** for the relevant column responsible for holding the unique identifier for each row.

## How to make a grid column always editable

To make a Grid column always editable, you can utilize the column template feature of the Grid. This feature is useful when you want to edit a particular column's values directly within the grid.

In the following example, the textbox is rendered in the **Freight** column using a column template. The keyup event for the Grid is bound using the [created](../../api/grid/#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](../../api/grid/#updaterow) method of the Grid.

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

> * If a template column has a corresponding `field` property defined, the value entered in the template column's input field will be stored in the associated edit column of the row's data object.

## See Also

* [Customize dialog when editing](../how-to/customize-the-edit-dialog)
* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list-with-grid-editing)
* [Customize the Edit Dialog](../how-to/customize-the-edit-dialog)
* [How to bulk edit columns in Grid](https://www.syncfusion.com/blogs/post/bulk-edit-columns-in-javascript-datagrid.aspx)
* [How to use Document Editor as an edit field in Data Grid](https://support.syncfusion.com/kb/article/10154/how-to-use-document-editor-as-an-edit-field-in-data-grid)
* [How to render custom confirmation dialog while updating edit operations](https://support.syncfusion.com/kb/article/10247/how-to-render-custom-confirmation-dialog-while-updating-edit-operations)
* [How to render ColorPicker control for particular column while editing a record](https://support.syncfusion.com/kb/article/10014/how-to-render-colorpicker-control-for-particular-column-while-editing-a-record)
* [How to positioning the validation error message](https://support.syncfusion.com/kb/article/9819/how-to-positioning-the-validation-error-message-in-javascript-grid)