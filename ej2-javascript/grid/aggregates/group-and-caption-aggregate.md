---
layout: post
title: Group and caption aggregate in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Group and caption aggregate in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Group and caption aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Group and caption aggregate in ##Platform_Name## Grid control

Group footer and caption aggregates in the Syncfusion JavaScript Grid control allow you to calculate aggregate values based on the current group items. These aggregate values can be displayed in the group footer cells and group caption cells, respectively. To achieve this, you can use the [groupFooterTemplate](../../api/grid/aggregateColumn/#groupfootertemplate) and [groupCaptionTemplate](../../api/grid/aggregateColumn/#groupcaptiontemplate) properties of the [AggregateColumn](../../api/grid/aggregateColumn).

> * When working with group aggregates in Syncfusion Grid, it is important to set the property [allowGrouping](../../api/grid/column/#allowgrouping) of the [column](../../api/grid/column) to **true**. 
> * To maintain grouped columns in the grid after grouping, set [showGroupedColumn](../../api/grid/groupSettings/#showgroupedcolumn) to **true**.

## Group footer aggregates

Group footer aggregates are displayed in the footer cells of each group. These cells appear at the bottom of each group and provide aggregate values based on the grouped data. To display group footer aggregates, you need to provide a template using the `groupFooterTemplate` property. The template will be used to render the aggregate values in the group footer cells.

Here's an example that demonstrates how to use group footer aggregates in the Syncfusion JavaScript Grid control:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-group-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-group-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-group-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-group-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-group-cs1" %}
{% endif %}

> The aggregate values must be accessed inside the template using their corresponding [type](../../api/grid/aggregateColumn/#type) name.

## Group caption aggregates

Group caption aggregates are displayed in the caption cells of each group. These cells appear at the top of each group and provide a summary of the grouped data. To display group caption aggregates, you can use the [groupCaptionTemplate](../../api/grid/aggregateColumn/#groupcaptiontemplate) property. This property allows you to define a template that will be used to display the aggregate values in the group caption cells.

Here's an example that demonstrates how to use group and caption aggregates in the Syncfusion JavaScript Grid control:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-group-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-group-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-group-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-group-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-group-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-group-cs2" %}
{% endif %}

> * The group total summary in Syncfusion Grid is calculated based on the current page records for each group by default.
> * If you require aggregates for all the data in the grid, you can enable the [disablePageWiseAggregates](../../api/grid/groupSettings/#disablepagewiseaggregates) property.

## Disable page wise aggregates for grouping

In some cases, you may want to disable the page-wise aggregates for grouping in the Syncfusion JavaScript Grid control. By default, when grouping is enabled with paging, the grid calculates the aggregates for each page separately. However, you can choose to disable this behavior and calculate aggregates for the entire grouped data instead. This can be achieved by setting the [disablePageWiseAggregates](../../api/grid/groupSettings/#disablepagewiseaggregates) property to **true**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-group-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-group-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-group-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-group-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-group-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-group-cs3" %}
{% endif %}

## See Also

* [How to format aggregate value in JavaScript grid](footer-aggregate#format-the-aggregate-value)