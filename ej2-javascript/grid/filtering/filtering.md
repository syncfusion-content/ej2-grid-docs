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

# Filtering in ##Platform_Name## Grid component

Filtering is a powerful feature in the Syncfusion Grid component that enables you to selectively view data based on specific criteria. It allows you to narrow down large datasets and focus on the information you need, thereby enhancing data analysis and decision-making.

To use filter, inject the [Filter](../../api/grid/filter) module in the grid.

To enable filtering in the Grid, you need to set the [allowFiltering](../../api/grid/#allowfiltering) property of the Grid component to true. Once filtering is enabled, you can configure various filtering options through the [filterSettings](../../api/grid/filterSettings) property of the Grid component. This property allows you to define the behavior and appearance of the filter.

Here is an example that demonstrates the default filtering feature of the grid:

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

To apply an initial filter, you need to specify the filter criteria using the [predicate](../../api/grid/predicate) object in [filterSettings.columns](../../api/grid/filterSettingsModel/#columns). The `predicate` object represents the filtering condition and contains properties such as field, operator, and value.

Here is an example of how to configure the initial filter using the `predicate` object:

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

## Filter operators

The Syncfusion Grid component provides various filter operators that can be used to define filter conditions for columns. The filter operator for a column can be defined using the [operator](../../api/grid/predicateModel/#operator) property in the [filterSettings.columns](../../api/grid/filterSettings/#columns) object.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startsWith |Checks whether a value begins with the specified value. |String
endsWith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
doesnotstartwith |Checks whether the value does not begin with the specified value. |String
doesnotendwith |Checks whether the value does not end with the specified value. |String
doesnotcontain |Checks whether the value does not contain the specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notEqual |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterThan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterThanOrEqual|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessThan |Checks whether a value is less than with specified value. |Number &#124; Date
lessThanOrEqual |Checks whether a value is less than or equal to specified value. |Number &#124; Date
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
* Filter Bar with the [filterSettings.showFilterBarOperator](../../api/grid/filter/#showFilterBarOperator) property enabled on the Grid [filterSettings](../../api/grid/filterSettings).
* Custom Filter of Excel filter type.

**For example:**

Operator |Description
-----|-----
%ab% |Returns all the value that are contains "ab" character.
ab% |Returns all the value that are ends with "ab" character.
%ab |Returns all the value that are starts with "ab" character.

![LIKEFilter](../images/like_filter.gif)

>By default, the Syncfusion ##Platform_Name## Grid uses different filter operators for different column types. The default filter operator for string type columns is **startsWith**, for numerical type columns is **equal**, and for boolean type columns is also **equal**.

## Diacritics filter

The diacritics filter feature in the Syncfusion ##Platform_Name## Grid is useful when working with text data that includes accented characters (diacritic characters). By default, the grid ignores these characters during filtering. However, if you need to consider diacritic characters in your filtering process, you can enable this feature by setting the [filterSettings.ignoreAccent](../../api/grid/filter/#filterbycolumn) property to true using the [filterSettings](../../api/grid/filterSettings/).

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

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [How to implement 'not contains' operator for Grid filtering](https://www.syncfusion.com/kb/12691/how-to-implement-not-contains-operator-for-grid-filtering)
* [How to filter custom date ranges in Grid column using date range picker](https://www.syncfusion.com/kb/12390/how-to-filter-custom-date-ranges-in-grid-column-using-date-range-picker)
* [How to filter multiple records using the filter bar template](https://www.syncfusion.com/kb/11808/how-to-filter-multiple-records-using-the-filter-bar-template)
* [How to change the data source for checkbox filter popup in Grid?](https://www.syncfusion.com/kb/11339/how-to-change-the-data-source-for-checkbox-filter-popup-in-grid)
* [How to perform advanced filtering in grid using custom queries](https://www.syncfusion.com/kb/11256/how-to-perform-advanced-filtering-in-grid-using-custom-queries)