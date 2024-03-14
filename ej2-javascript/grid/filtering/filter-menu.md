---
layout: post
title: Filter menu in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Filter menu in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in ##Platform_Name## Grid control

The filter menu in the ##Platform_Name## Grid control allows you to enable filtering and provides a user-friendly interface for filtering data based on column types and operators.

To enable the filter menu, you need to set the [filterSettings.type](../../api/grid/filterSettings) property to **Menu**. This property determines the type of filter UI that will be rendered. The filter menu UI allows you to apply filters using different operators.

Here is an example that demonstrates the usage of the filter menu in the Syncfusion ##Platform_Name## Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs65/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs65/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs65" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs65/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs65/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs65" %}
{% endif %}

> * [allowFiltering](../../api/grid/#allowfiltering) must be set as true to enable filter menu.
> * By setting [columns.allowFiltering](../../api/grid/column/#allowfiltering) as false will prevent filter menu rendering for a particular column.

## Custom control in filter menu

You can enhance the filtering experience in the Syncfusion ##Platform_Name## Grid control by customizing the filter menu with custom controls. This allows you to replace the default search box with custom controls like dropdowns or textboxes. By default, the filter menu provides an autocomplete control for string type columns, a numeric textbox for number type columns, and a dropdown control for boolean type columns, making it easy to search for values.

To customize the filter menu, you can make use of the [column.filter.ui](../../api/grid/column/#filter) property. This property allows you to integrate your desired custom filter control into a specific column of the Grid. To implement a custom filter UI, you need to define the following functions:

* **create**: This function is responsible for creating the custom control for the filter.
* **write**: The write function is used to wire events for the custom control. This allows you to handle changes in the custom filter UI.
* **read**: The read function is responsible for reading the filter value from the custom control. This is used to retrieve the selected filter value.

For example, you can replace the standard search box in the filter menu with a dropdown control. This enables you to perform filtering operations by selecting values from the dropdown list, rather than manually typing in search queries.

Here is a sample code demonstrating how to render a dropdownlist control for the **CustomerID** column:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs66/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs66/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs66" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs66/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs66/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs66" %}
{% endif %}

**Default filter input for CustomerID column**
![Default filter input for CustomerID column](../images/filter-menu-auto-complete.gif)
**Custom dropdown filter for CustomerID column**
![Custom dropdown filter for CustomerID column](../images/filter-menu-drop-down.gif)

## Show 24 hours time format in filter dialog

The Syncfusion ##Platform_Name## Grid provides a feature to display the time in a 24-hour format in the date or datetime column filter dialog. By default, the filter dialog displays the time in a 12-hour format (AM/PM) for the date or datetime column. However, you can customize the default format by setting the type as **dateTime** and the format as **M/d/y HH:mm**. To enable the 24-hour time format in the filter dialog, you need to handle the [actionComplete](../../api/grid/#actioncomplete) event with [requestType](../../api/grid/filterEventArgs/#requesttype) as [filterafteropen](../../api/grid/action/) and set the `timeFormat` of the `DateTimepicker` to **HH:mm**.

Here is an example that demonstrates how to show 24 hours time format in filter dialog:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-menu-cs1" %}
{% endif %}

## Customizing filter menu operators list

The Syncfusion ##Platform_Name## Grid enables you to customize the default filter operator list by utilizing the [filterSettings.operators](../../api/grid/filterSettings/#operators) property. This feature allows you to define your own set of operators that will be available in the filter menu. You can customize operators for string, number, date, and boolean data types.

The available options for customization are:

* **stringOperator**- defines customized string operator list.
* **numberOperator** - defines customized number operator list.
* **dateOperator** - defines customized date operator list.
* **booleanOperator** - defines customized boolean operator list.
  
Here is an example of how to customize the filter operators list in Syncfusion ##Platform_Name## Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs67/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs67/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs67" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs67/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs67/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs67" %}
{% endif %}

## Filter by multiple keywords using filter menu

The Syncfusion ##Platform_Name## Grid allows you to perform filtering actions based on multiple keywords, rather than a single keyword, using the filter menu dialog. To enable this feature, you can set [filterSettings.type](../../api/grid/filterSettings/#type) as **Menu** and render the `MultiSelect` control as a custom control in the filter menu dialog.

Here is an example that demonstrates how to perform filtering by multiple keywords using the filter menu in the Syncfusion ##Platform_Name## Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs69/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs69/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs69" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs69/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs69/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs69" %}
{% endif %}

## Customize the default input control of filter menu dialog

You have the flexibility to customize the default settings of input controls within the menu filter by utilizing the `params` property within the column definition of [filter](../../api/grid/column/#filter). This allows you to modify the behavior of specific filter controls to better suit your needs.

| Column Type | Default control                                                                                 | Customization                            | API Reference                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| String      | [AutoComplete](../../auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](../../api/auto-complete/autoCompleteModel/) |
| Number      | [NumericTextBox](../../numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](../../api/numerictextbox)                 |
| Boolean     | [DropDownList](../../drop-down-list/getting-started)   | Eg: { params: { sortOrder:'Ascending'}}  | [DropDownList API](../../api/drop-down-list)                   |
| Date        | [DatePicker](../../datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](../../api/datepicker)                         |
| DateTime    | [DateTimePicker](../../datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](../../api/datetimepicker)                 |

> To know more about the feature, refer to the Getting Started documentation and API Reference

In the example provided below, the **OrderID** and **Freight** columns are numeric columns. When you open the filter dialog for these columns, you will notice that a `NumericTextBox` with a spin button is displayed to change or set the filter value. However, using the `params` property, you can hide the spin button specifically for the **OrderID** column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-menu-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-menu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-menu-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-menu-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-menu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-menu-cs2" %}
{% endif %}

### Prevent autofill option in autocomplete of menu filter

By default, the [AutoComplete](../../auto-complete/getting-started) control in the filter menu dialog is set to automatically fill suggestions as you type. However, there might be scenarios where you want to prevent this autofill behavior to provide a more customized and controlled user experience.

You can prevent autofill feature by setting the [autofill](../../api/auto-complete#autofill) parameter to **false** using the `params` property within the column definition of the [filter](../../api/grid/column/#filter). 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-menu-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-menu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-menu-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-menu-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-menu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-menu-cs3" %}
{% endif %}

## Filter menu events

The Syncfusion ##Platform_Name## Grid offers the [actionBegin](../../api/grid#actionbegin) and [actionComplete](../../api/grid#actioncomplete) events, which provide information about the actions being performed. Within the event handlers, you receive an argument named `requestType`. This argument specifies the [action](../../api/grid/action/) that is being executed, such as `filterbeforeopen`, `filterafteropen`, or `filtering`. By analyzing this action type, you can implement custom logic or showcase messages.

**filtering** - Defines current action as filtering.
**filterbeforeopen** - Defines current action as filter dialog before open.
**filterafteropen** - Defines current action as filter dialog after open.

Here's an example of how to use these events to handle filter menu action in the Syncfusion ##Platform_Name## Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-menu-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-menu-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-menu-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-menu-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-menu-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-menu-cs4" %}
{% endif %}

## Troubleshoot filter menu operator issue

When using the filter menu, the UI displays operators for all columns based on the data type of the first data it encounters. If the first data is empty or null, it may not work correctly. To overcome this issue, follow these steps to troubleshoot and resolve it:

**Explicitly Define Data Type:** When defining columns in your ##Platform_Name## Grid control, make sure to explicitly specify the data type for each column. You can do this using the type property within the columns configuration. For example:

```ts
let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', type: 'number', width: 120 },
        { field: 'CustomerName', headerText: 'CustomerName', type: 'string', width: 150 },
                    <!-- Define data types for other columns as needed -->
    ],
});     
grid.appendTo('#Grid');
```

**Handle Null or Empty Data:** If your data source contains null or empty values, make sure that these values are appropriately handled within your data source or by preprocessing your data to ensure consistency.

**Check Data Types in Data Source:** Ensure that the data types specified in the column definitions match the actual data types in your data source. Mismatched data types can lead to unexpected behavior.

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)