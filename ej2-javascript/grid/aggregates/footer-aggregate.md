---
layout: post
title: Footer aggregate in ##Platform_Name## Grid control | SyncfuThesion
description: Learn here all about Footer aggregate in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Footer aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in ##Platform_Name## Grid control

The Syncfusion JavaScript Grid control allows you to calculate and display aggregate values in the footer cells. The footer aggregate value is calculated from all the rows in the grid. You can use the [footerTemplate](../../api/grid/aggregateColumn/#footertemplate) property to render the aggregate value in the footer cells.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-footer-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-footer-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-footer-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-footer-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-footer-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-footer-cs1" %}
{% endif %}

> Inside the template, access the aggregate values using their corresponding [type](../../api/grid/aggregateColumn/#type) name. For example, to access the Sum aggregate value, use **Sum**.

## Format the aggregate value

To format the aggregate value result in the Syncfusion JavaScript Grid control, you can use the [format](../../api/grid/aggregateColumn/#format) property of the [AggregateColumn](../../api/grid/aggregateColumn/). The `format` property allows you to specify a format string that determines how the aggregate value will be displayed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-footer-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-footer-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-footer-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-footer-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-footer-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-footer-cs2" %}
{% endif %}

## How to place aggregates on top of the Grid

By default, the aggregated values are placed at the bottom of the footer section. It is possible to place the aggregated values at the top of the header. This is achieved by using the [dataBound](../../api/grid/#databound) event, [getHeaderContent](../../api/grid/#getheadercontent), and [getFooterContent](../../api/grid/#getfootercontent) methods of the Grid.

In the following, footer content is appended to the header content using the `dataBound` event of the Grid.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-footer-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-footer-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-footer-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-footer-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-footer-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-footer-cs3" %}
{% endif %}