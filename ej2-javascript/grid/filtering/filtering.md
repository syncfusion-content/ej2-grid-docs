---
layout: post
title: Filtering in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Filtering in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filtering 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in ##Platform_Name## Grid control

Filtering allows you to view particular records based on filter criteria. To enable filtering in the Grid, set the [`allowFiltering`](../../api/grid/#allowfiltering) to true. Filtering options can be configured through [`filterSettings`](../../api/grid/filterSettings/).

To use filter, inject the [`Filter`](../../api/grid/filter/) module in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs70/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs70/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs70" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs70/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs70/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs70" %}
{% endif %}

> * You can apply and clear filtering, by using [filterByColumn](../../api/grid/filter/#filterbycolumn) and [clearFiltering](../../api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying [columns.allowFiltering](../../api/grid/column/#allowfiltering) to false.

## Initial filter

To apply the filter at initial rendering, set the filter [`predicate`](../../api/grid/predicate/) object in [`filterSettings.columns`](../../api/grid/filterSettingsModel/#columns).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs71/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs71/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs71" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs71/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs71/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs71" %}
{% endif %}

### Initial filter with multiple values for same column

In the Syncfusion ##Platform_Name## Grid, you can establish an initial filter containing multiple values for a particular column, which helps you to preset filter conditions for a specific column using multiple values. This functionality allows you to display a filtered records in the grid right after the grid is initially loaded.

To apply the filter with multiple values for same column at initial rendering, set the filter [predicate](../../api/grid/predicate) object in [filterSettings.columns](../../api/grid/filterSettingsModel/#columns).

The following example demonstrates, how to perform an initial filter with multiple values for same **CustomerID** column using `filterSettings.columns` and `predicate`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filtering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filtering-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filtering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filtering-cs1" %}
{% endif %}

### Initial filter with multiple values for different columns 

By applying an initial filter with multiple values for different columns in the Syncfusion ##Platform_Name## Grid, you have the flexibility to set predefined filter settings for each column. This results in a filtered records of the grid right after the grid is initially loaded.

To apply the filter with multiple values for different column at initial rendering, set the filter [predicate](../../api/grid/predicate) object in [filterSettings.columns](../../api/grid/filterSettingsModel/#columns).

The following example demonstrates how to perform an initial filter with multiple values for different **Order ID** and **Customer ID** columns using `filterSettings.columns` and `predicate`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filtering-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filtering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filtering-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filtering-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filtering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filtering-cs2" %}
{% endif %}

## Filter operators

The Syncfusion Grid control provides various filter operators that can be used to define filter conditions for columns. The filter operator for a column can be defined using the [operator](../../api/grid/predicateModel/#operator) property in the [filterSettings.columns](../../api/grid/filterSettings/#columns) object.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether a value begins with the specified value. |String
endswith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
doesnotstartwith |Checks whether the value does not begin with the specified value. |String
doesnotendwith |Checks whether the value does not end with the specified value. |String
doesnotcontain |Checks whether the value does not contain the specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterthanorequal|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessthan |Checks whether a value is less than with specified value. |Number &#124; Date
lessthanorequal |Checks whether a value is less than or equal to specified value. |Number &#124; Date
isnull |Returns the values that are null. |String &#124; Number &#124; Date
isnotnull |Returns the values that are not null. |String &#124; Number &#124; Date
isempty |Returns the values that are empty. |String
isnotempty |Returns the values that are not empty. |String
between|Filter the values based on the range between the start and end specified values. |Number &#124; Date

## Wildcard and LIKE operator filter

**Wildcard** and **LIKE** filter operators filters the value based on the given string pattern, and they apply to string-type columns. But it will work slightly differently.

### Wildcard filtering

The **Wildcard** filter can process one or more search patterns using the "*" symbol, retrieving values matching the specified patterns.

* The **Wildcard** filter option is supported for the DataGrid that has all search options.

**For example:**

Operator |Description
-----|-----
a*b |Everything that starts with "a" and ends with "b".
a* |Everything that starts with "a".
*b |Everything that ends with "b".
*a* |Everything that has an "a" in it.
*a*b* |Everything that has an "a" in it, followed by anything, followed by a "b", followed by anything.

![WildcardFilter](../images/wildcard_search.gif)

### LIKE filtering

The **LIKE** filter can process single search patterns using the "%" symbol, retrieving values matching the specified patterns. The following Grid features support LIKE filtering on string-type columns:

* Filter Menu
* Filter Bar with the [`filterSettings.showFilterBarOperator`](../../api/grid/filter/#showFilterBarOperator-boolean) property enabled on the Grid [`filterSettings`](../../api/grid/filterSettings/).
* Custom Filter of Excel filter type.

**For example:**

Operator |Description
-----|-----
%ab% |Returns all the value that are contains "ab" character.
ab% |Returns all the value that are ends with "ab" character.
%ab |Returns all the value that are starts with "ab" character.

![LIKEFilter](../images/like_filter.gif)

>By default, the Syncfusion ##Platform_Name## Grid uses different filter operators for different column types. The default filter operator for string type columns is **startswith**, for numerical type columns is **equal**, and for boolean type columns is also **equal**.

## Diacritics filter

The diacritics filter feature in the Syncfusion ##Platform_Name## Grid is useful when working with text data that includes accented characters (diacritic characters). By default, the grid ignores these characters during filtering. However, if you need to consider diacritic characters in your filtering process, you can enable this feature by setting the [filterSettings->ignoreAccent](../../api/grid/filter/#filterbycolumn) property to true using the [filterSettings](../../api/grid/filterSettings/).

Consider the following sample where the `ignoreAccent` property is set to true in order to include diacritic characters in the filtering process:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-diacritics-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-diacritics-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-diacritics-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-diacritics-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-diacritics-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-diacritics-cs1" %}
{% endif %}

## Filtering with case sensitivity

The Syncfusion ##Platform_Name## Grid provides the flexibility to enable or disable case sensitivity during filtering. This feature is useful when you want to control whether filtering operations should consider the case of characters. It can be achieved by using the  [enableCaseSensitivity](../../api/grid/filterSettings/#enablecasesensitivity) property within the [filterSettings](../../api/grid/filterSettings) of the grid.

Below is an example code demonstrating how to enable or disable case sensitivity while filtering:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filtering-caseSensitivity-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filtering-caseSensitivity-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filtering-caseSensitivity-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filtering-caseSensitivity-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filtering-caseSensitivity-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filtering-caseSensitivity-cs1" %}
{% endif %}

## Enable different filter for a column

The Syncfusion ##Platform_Name## Grid offers the flexibility to customize filtering behavior for different columns by enabling various types of filters such as **Menu**, **Excel**, **Checkbox**. This feature allows you to tailor the filtering experience to suit the specific needs of each column in your grid. For example, you might prefer a menu-based filter for a category column, an Excel-like filter for a date column, and a checkbox filter for a status column. 

It can be achieved by adjusting the [column.filter.type](../../api/grid/column/#filter) property based on your requirements.

Here's an example where the menu filter is enabled by default for all columns, but you can dynamically modify the filter types through a dropdown:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-column-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-column-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-column-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-column-cs1" %}
{% endif %}

## Change default filter operator for particular column

The Syncfusion Grid control provides the flexibility to change the default filter operator for a particular column. By default, the filter operator for string-type columns is **startswith**, for numerical-type columns is **equal**, and for boolean-type columns is also **equal**. However, you may need to customize the filter operator to better match the nature of the data in a specific column. This can be achieved using the operator property within the [filterSettings](../../api/grid/#filtersettings) configuration.

Here's an example that demonstrates how to change the default filter operator column :

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-change-default-filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-change-default-filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-change-default-filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-change-default-filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-change-default-filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-change-default-filter-cs1" %}
{% endif %}

## Filter grid programmatically with single and multiple values using method 

Programmatic filtering in the Syncfusion ##Platform_Name## Grid with single and multiple values allows you to apply filters to specific columns in the grid without relying on interactions through the interface.

This can be achieved by utilizing the [filterByColumn](../../api/grid/#filterbycolumn) method of the Grid.

The following example demostrates, how to programmatically filter the Grid using single and multiple values for the **OrderID** and **CustomerID** columns. This is accomplished by calling the `filterByColumn` method within an external button click function.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filtering-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filtering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filtering-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filtering-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filtering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filtering-cs3" %}
{% endif %}

## How to get filtered records

Retrieving filtered records in the Syncfusion ##Platform_Name## Grid is essential when you want to work with data that matches the currently applied filters. You can achieve this using available methods and properties in the grid control.

**1.Using the getFilteredRecords() method**

The [getFilteredRecords](../../api/grid/#getfilteredrecords) method is used to obtain an array of records that match the currently applied filters on the grid.

This method retrieves an array of records that match the currently applied filters on the grid.

Here's an example of how to get the filtering data in a Syncfusion grid using the `getFilteredRecords` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-record-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-record-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-record-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-record-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-record-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-record-cs1" %}
{% endif %}

**2.Using the properties in the FilterEventArgs object**

Alternatively, you can use the properties available in the [FilterEventArgs](../../api/grid/filterEventArgs) object to obtain the filter record details.

* [columns](../../api/grid/filterEventArgs/#columns): This property returns the collection of filtered columns.

* [currentFilterObject](../..api/grid/filterEventArgs/#currentfilterobject): This property returns the object that is currently filtered.

* [currentFilteringColumn](../../api/grid/filterEventArgs/#currentfilteringcolumn): This property returns the column name that is currently filtered.

To access these properties, you can use the [actionComplete](../../api/grid/#actioncomplete) event handler as shown below:

```typescript
actionComplete(args: FilterEventArgs) {
    var column = args.columns;
    var object = args.currentFilterObject;
    var name = args.currentFilteringColumn;
}
```
## Clear filtering using methods

The Syncfusion Grid provides a method called [clearFiltering](../../api/grid/#clearfiltering) to clear the filtering applied to the grid. This method is used to remove the filter conditions and reset the grid to its original state. 

Here's an example of how to clear the filtering in a Syncfusion grid using the `clearFiltering` method:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-clear-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-clear-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-clear-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-clear-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-clear-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-clear-cs1" %}
{% endif %}

## Filtering events

Filtering events allow you to customize the behavior of the grid when filtering is applied. You can prevent filtering for specific columns, show messages to users, or perform other actions to suit your application's needs.

To implement filtering events in the Syncfusion ##Platform_Name## Grid, you can utilize the available events such as [actionBegin](../..api/grid/#actionbegin) and [actionComplete](../../api/grid/#actioncomplete). These events allow you to intervene in the filtering process and customize it as needed.

In the given example, the filtering is prevented for **ShipCity** column during `actionBegin` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-event-cs1" %}
{% endif %}

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [How to implement 'not contains' operator for Grid filtering](https://support.syncfusion.com/kb/article/11092/how-to-implement-not-contains-operator-for-grid-filtering)
* [How to filter custom date ranges in Grid column using date range picker](https://support.syncfusion.com/kb/article/11016/how-to-filter-custom-date-ranges-in-grid-column-using-date-range-picker)
* [How to filter multiple records using the filter bar template](https://support.syncfusion.com/kb/article/10143/how-to-filter-multiple-records-using-the-filter-bar-template-in-javascript-grid)
* [How to change the data source for checkbox filter popup in Grid?](https://support.syncfusion.com/kb/article/10065/how-to-change-the-data-source-for-checkbox-filter-popup-in-grid)
* [How to perform advanced filtering in grid using custom queries](https://support.syncfusion.com/kb/article/9690/how-to-perform-advanced-filtering-in-grid-using-custom-queries)