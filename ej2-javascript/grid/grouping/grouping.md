---##Platform_Name##
layout: post
title: Grouping in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Grouping in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Grouping 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in ##Platform_Name## Grid control

The grouping feature in the Syncfusion ##Platform_Name## Grid allows you to organize data into a hierarchical structure, making it easier to expand and collapse records. You can group the columns by simply dragging and dropping the column header to the group drop area. To enable grouping in the grid, you need to set the [allowGrouping](../../api/grid/#allowgrouping) property to **true**. Additionally, you can customize the grouping options using the [groupSettings](../../api/grid/groupSettings) property.

To use the Grouping feature, need to inject **Group** in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs80/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs80/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs80" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs80/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs80/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs80" %}
{% endif %}

> * You can group and ungroup columns in the Grid by using the [groupColumn](../../api/grid/group/#groupcolumn) and [ungroupColumn](../../api/grid/group/#ungroupcolumn) methods respectively.
> * To disable grouping for a specific column, set the [columns.allowGrouping](../../api/grid/column/#allowgrouping) to **false**.

## Initial group

To enable initial grouping in the Grid, you can use the [groupSettings](../../api/grid/groupSettings) property and set the [groupSettings.columns](../../api/grid/groupSettings/#columns) property to an array of column names(`field` of the column) that you want to group by. This feature is particularly useful when working with large datasets, as it allows you to quickly organize and analyze the data based on specific criteria.

The following example demonstrates how to set an initial grouping for the **CustomerID** and **ShipCity** columns during the initial rendering grid, by using the `groupSettings.columns` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs81/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs81/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs81" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs81/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs81/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs81" %}
{% endif %}

> You can group by multiple columns by specifying an array of column names in the columns property of the `groupSettings`.

## Prevent grouping for particular column

The Grid component provides the ability to prevent grouping for a particular column. This can be useful when you have certain columns that you do not want to be included in the grouping process. It can be achieved by setting the [allowGrouping](../../api/grid/column/#allowgrouping) property of the particular `column` to **false**. The following example demonstrates, how to disable grouping for **CustomerID** column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-grouping-prevent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-prevent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-prevent" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-grouping-prevent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-prevent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-prevent" %}
{% endif %}

## Hide drop area

By default, the Grid provides a drop area for grouping columns. This drop area allows you to drag and drop columns to group and ungroup them. However, in some cases, you may want to prevent ungrouping or further grouping a column after initial grouping.

To hide the drop area in the Syncfusion ##Platform_Name## Grid, you can set the [groupSettings.showDropArea](../../api/grid/groupSettings#showdroparea) property to **false**. 

In the following example, the [EJ2 Toggle Switch Button](../../switch/getting-started) component is added to hide or show the drop area. When the switch is toggled, the [change](../../api/switch/#change) event is triggered and the `groupSettings.showDropArea` property of the grid is updated accordingly. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs82/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs82/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs82" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs82/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs82/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs82" %}
{% endif %}

> By default, the group drop area will be shown only if there is at least one column available to group.

## Show the grouped column

The Syncfusion ##Platform_Name## Grid has a default behavior where the grouped column is hidden, to provide a cleaner and more focused view of your data. However, if you prefer to show the grouped column in the grid, you can achieve this by setting the [groupSettings.showGroupedColumn](../../api/grid/groupSettings/#showgroupedcolumn) property to **true**.

In the following example, the [EJ2 Toggle Switch Button](../../switch/getting-started) component is added to hide or show the grouped columns. When the switch is toggled, the [change](../../documentation/api/switch/#change) event is triggered and the `groupSettings.showGroupedColumn` property of the grid is updated accordingly.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-grouping-grouped/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-grouped/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-grouped" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-grouping-grouped/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-grouped/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-grouped" %}
{% endif %}

## Reordering on grouped columns 

The Syncfusion ##Platform_Name## Grid allows you to easily reorder the grouped columns by dragging and dropping the grouped header cells in the group drag area. By changing the order of the grouped columns, the corresponding changes are automatically reflected in the grouping hierarchy of the grid. The grid dynamically adjusts the grouping based on the reordered columns in the group drag area. Additionally, you can also drop new columns into specific positions within the group drag area.

To enable this feature, you have to set the [groupSettings.allowReordering](../../api/grid/groupSettings/#allowReordering) property as **true**. This is demonstrated in the sample below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-grouping-reordering/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-reordering/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-reordering" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-grouping-reordering/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-reordering/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-reordering" %}
{% endif %}

## Sort grouped columns in descending order during initial grouping

By default, grouped columns are sorted in ascending order. However, you can sort them in descending order during initial grouping by setting the [field](../../api/grid/sortDescriptorModel/#field) and [direction](../../api/grid/sortDescriptorModel/#direction-string) in the [sortSettings.columns](../../api/grid/sortSettings/#columns) property.

The following example demonstrates how to sort the **CustomerID** column by setting the `sortSettings.columns` property to **Descending** during the initial grouping of the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-grouping-sorting/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-sorting/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-sorting" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-grouping-sorting/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-sorting/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-sorting" %}
{% endif %}

## Group with paging

The Grid component supports grouping columns with paging feature. When grouping is applied, the grid displays aggregated information and total items based on the current page. However, by default, the group footer and group caption footer does not consider the aggregated information and total items from other pages. To get additional details from other pages, set the [groupSettings.disablePageWiseAggregates](../../api/grid/groupSettings#disablePageWiseAggregates) property to **false**.

> If remote data is bound to grid dataSource, two requests will be sent when performing grouping action one for getting the grouped data and another for getting aggregate details and total items count.

## Group by format

By default, columns are grouped by the data or value present for the particular row. However, you can also group numeric or datetime columns based on the specified format. To enable this feature, you need to set the [enableGroupByFormat](../../api/grid/column/#enablegroupbyformat) property of the corresponding grid column. This feature allows you to group numeric or datetime columns based on a specific format.

The following example demonstrates how to perform a group action using the `enableGroupByFormat` property for the  **OrderDate** and **Freight** columns of the grid. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs83/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs83/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs83" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs83/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs83/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs83" %}
{% endif %}

> Numeric columns can be grouped based on formats such as currency or percentage, while datetime columns can be grouped based on specific date or time formats.

## Group or ungroup column externally

By default, the Syncfusion Grid supports interaction-oriented column grouping, where users manually group columns by dragging and dropping them into the grouping area of the grid. Grid provides an ability to group and ungroup a column using [groupColumn](../../api/grid/#groupcolumn) and [ungroupColumn](../../api/grid/#ungroupcolumn) methods. These methods provide a programmatic approach to perform column grouping and ungrouping.

The following example demonstrates how to group and upgroup the columns in a grid. It utilizes the [DropDownList](../../drop-down-list/getting-started) component to select the column. When an external button is clicked, the `groupColumn` and `ungroupColumn` methods are called to group or ungroup the selected column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs84/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs84/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs84" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs84/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs84/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs84" %}
{% endif %}

## Expand or collapse externally

The Syncfusion ##Platform_Name## Grid offers a convenient feature to expand or collapse grouped rows, allowing you to control the visibility of grouped data. This section will provide guidance on enabling this functionality and integrating it into your application using the Grid properties and methods.

### Expand or collapse all grouped rows

Grid provides an ability to expand or collapse grouped rows using [groupExpandAll](../../api/grid/#groupexpandall) and [groupCollapseAll](../../api/grid/#groupcollapseall) methods respectively.

In the following example, the [EJ2 Toggle Switch Button](../../switch/getting-started) component is added to expand or collapse grouped rows. When the switch is toggled, the [change](../../api/switch/#change) event is triggered and the `groupExpandAll` and `groupCollapseAll` methods are called to expand or collapse grouped rows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs82-expandall/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs82-expandall/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs82-expandall" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs82-expandall/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs82-expandall/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs82-expandall" %}
{% endif %}

### Expand or collapse selected grouped row

Expanding or collapsing selected grouped rows in a Syncfusion ##Platform_Name## Grid involves implementing the functionality to expand or collapse grouped records programatically.

To enable the expand and collapse functionality for grouped rows in a grid, you can utilize the [expandCollapseRows](../..api/grid/group/#expandcollapserows) method. This method is designed to handle two scenarios such as expanding collapsed grouped records and collapsing expanded grouped records.

To implement this functionality, follow these steps:

1. Include an `input` element to capture the grouped row index.
2. Add a `button` element with a **click** event binding to trigger the **onExpandCollapseButtonClick** method. This method retrieve the grouped rows from the grid's content table using the `querySelectorAll` method.
3. Check if there are any grouped rows available.
4. If grouped rows exist, locate the group caption element based on the entered row index.
5. Call the `expandCollapseRows` method of the grid's group module, passing the group caption element to toggle its expand/collapse state.

The following example demonstrates the function that collapses the selected row using an external button click. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs82-grouped/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs82-grouped/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "http://127.0.0.1:4000/ej2-javascript/code-snippet/grid/grid-cs82-grouped" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs82-grouped/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs82-grouped/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "http://127.0.0.1:4000/ej2-javascript/code-snippet/grid/grid-cs82-grouped" %}
{% endif %}

## Clear grouping 

The clear grouping feature in the Syncfusion ##Platform_Name## Grid allows you to removing all the grouped columns from the grid. This feature provides a convenient way to clear the grouping of columns in your application.

To clear all the grouped columns in the Grid, you can utilize the [clearGrouping](../../api/grid/#cleargrouping) method of the grid.

The following example demonstrates how to clear the grouping using `clearGrouping` method in the external button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-grouping-clear/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-clear/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-clear" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-grouping-clear/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-grouping-clear/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-grouping-clear" %}
{% endif %}

## Grouping events

The Grid component provides two events that are triggered during the group action such as [actionBegin](../../api/grid/#actionbegin) and [actionComplete](../../api/grid/#actioncomplete). The `actionBegin` event is triggered before the group action starts, and the `actionComplete` event is triggered after the group action is completed. You can use these events to perform any custom action based on the grouping.

1. **actionBegin event**: `actionBegin` event is triggered before the group action begins. It provides a way to perform any necessary operations before the group action takes place. This event provides a parameter that contains the current grid state, including the current group field name, requestType information and etc.

2. **actionComplete event**: `actionComplete` event is triggered after the group action is completed. It provides a way to perform any necessary operations after the group action has taken place. This event provides a parameter that contains the current grid state, including the grouped data and column information and etc.

The following example demonstrates how the `actionBegin` and `actionComplete` events work when grouping is performed. The `actionBegin` event is used to cancel the grouping of the **OrderID** column. The `actionComplete` event is used to display a message.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grouping-event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grouping-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grouping-event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grouping-event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grouping-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grouping-event-cs1" %}
{% endif %}

> The [args.requestType](../../api/grid/sortEventArgs/#requesttype) property represents the name of the current action being performed. For instance, during grouping, the `args.requestType` value will be **grouping**.

## See Also

* [Exporting grouped records](../excel-export/excel-export-options/#exporting-grouped-records)
* [How to enable lazy load grouping in Grid](../../grid/grouping/lazy-load-grouping)