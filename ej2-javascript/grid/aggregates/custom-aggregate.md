---
layout: post
title: Custom aggregate in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in ##Platform_Name## Grid control

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [`type`](../../api/grid/aggregateColumn/#type) as `Custom`, and provide the custom aggregate function in the [`customAggregate`](../../api/grid/aggregateColumn/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for total and group aggregations.
* **Total aggregation**: The custom aggregate function will be called with the whole data and current [`AggregateColumn`](../../api/grid/aggregateColumn/)
object.
* **Group aggregation**: This will be called with the current group details and [`AggregateColumn`](../../api/grid/aggregateColumn/) object.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs1" %}
{% endif %}

> To access the custom aggregate value inside the template, use the key as `Custom`.

## Show the count of distinct values in aggregate row

You can calculate the aggregate value with your own aggregate functions. To use custom aggregation, specify the [`type`](../../api/grid/aggregateColumn/#type) as `Custom`, and provide the custom aggregate function in the [`customAggregate`](../../api/grid/aggregateColumn/#customaggregate) property.

In this below demo, we have show the count of distinct value for `ShipCountry` column by using custom aggregate.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-agg-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-agg-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-agg-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-agg-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-agg-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-agg-cs1" %}
{% endif %}