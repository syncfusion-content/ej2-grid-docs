---
layout: post
title: Filter bar in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Filter bar in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in ##Platform_Name## Grid control

The filter bar feature provides a user-friendly way to filter data in the Syncfusion ##Platform_Name##  Grid. It displays an input field for each column, allowing you to enter filter criteria and instantly see the filtered results.

By defining the [allowFiltering](../../api/grid/#allowfiltering) to true, then filter bar row will be rendered next to header which allows you to filter data. You can filter the records with different expressions depending upon the column type.

**Filter bar expressions:**
You can enter the following filter expressions(operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A |Always **equal** operator will be used for Date filter |Date
N/A |N/A |Always **equal** operator will be used for Boolean filter |Boolean

The following example demonstrates how to activate default filtering in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs64/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs64/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs64" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs64/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs64/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs64" %}
{% endif %}

> To enable or dynamically switch the filter type, you must set the [filterSettings.type](../../api/grid/filtersettings/#type) as **FilterBar**.

## Filter bar modes

The Syncfusion ##Platform_Name##  Grid control refers to two different ways in which the grid's filter bar can operate when filtering criteria are applied. These modes, "OnEnter Mode" and "Immediate Mode," offer users different experiences and behaviors when interacting with the filter bar.

**OnEnter Mode:**
By settings [filterSettings.mode](../../api/grid/filterSettings/#mode) as **OnEnter**, the filter bar captures the filter criteria entered but doesn't initiate filtering until the **Enter** key is pressed. This allows multiple criteria modifications without triggering immediate filtering actions.

**Immediate Mode:**
By settings [filterSettings.mode](../../api/grid/filterSettings/#mode) as **Immediate**, the filter bar instantly applies filtering as filter criteria are entered. Filtering actions take place as soon as criteria are input or modified, providing real-time previews of filtering results.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-bar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-bar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs1" %}
{% endif %}

## Display filter text in pager

The Syncfusion ##Platform_Name##  Grid control provides an option to display filter text within the pager, indicating the current filtering status. Enabling this feature provides you with a clear understanding of the applied filters and the criteria used for filtering.

To enable the display of filter text within the pager, you should set the [showFilterBarStatus](../../api/grid/filterSettings/#showfilterbarstatus) property within the [filterSettings](../../api/grid/filterSettings/) configuration.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-bar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-bar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs2" %}
{% endif %}

## Show or hide filter bar operator in filter bar cell

In the Syncfusion ##Platform_Name## Grid control, you have the ability to modify the filter operator for a column directly within the user interface during the filtering process through the filter bar cell. For instance, the default operator for filtering string-type columns in the filter bar is "startswith". Now, you can customize the default operator for a specific column using the filter operator feature.

To achieve this functionality, you can enable the  [showFilterBarOperator](../../api/grid/filterSettings/#showfilterbaroperator) property within the [filterSettings](../../api/grid/filterSettings/).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-bar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-bar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs3" %}
{% endif %}

## Prevent filtering for particular column

In the Syncfusion ##Platform_Name## Grid, you can prevent filtering for a specific column by utilizing the [allowFiltering](../../api/grid/#allowfiltering) property of the [column](../../api/grid/column/) object and setting it to **false**. This feature is useful when you want to disable filtering options for a particular column.

Here's an example that demonstrates how to remove the filter bar for the **CustomerID** column in Syncfusion ##Platform_Name## Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-bar-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-bar-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs4" %}
{% endif %}

## Hide filter bar for template column

By default, the filter bar is set to a disabled mode for template columns in the grid. However, in certain cases, you may want to hide the filter bar for a template column to provide a customized filtering experience.

To hide the filter bar for a template column, you can use the [filterTemplate](../../api/grid/column/#filtertemplate) property of the [column](../../api/grid/column/). This property allows you to define a custom template for the filter bar of a column.

Here's an example that demonstrates how to hide the filter bar for a template column in the Syncfusion ##Platform_Name## Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-bar-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-bar-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-bar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs5" %}
{% endif %}

## Filter bar template with custom control

The [filterBarTemplate](../../api/grid/column/#filterbartemplate) feature in the Syncfusion ##Platform_Name## Grid allows you to customize the controls displayed in the filter bar. Normally, a text box is the default element rendered in the filter bar cell. This flexibility allows you to use various controls, such as datepicker, numerictextbox, combobox, and multiselect, within the filter bar based on your specific requirements.

To utilize this feature, you can define a custom template for the filter bar by setting the `filterBarTemplate` property of a column in your ##Platform_Name## application:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/filter-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/filter-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/filter-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-template-cs1" %}
{% endif %}

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)