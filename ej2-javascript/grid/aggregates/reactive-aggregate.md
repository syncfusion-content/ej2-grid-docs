---
layout: post
title: Reactive aggregate in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Reactive aggregate in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Reactive aggregate 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Reactive aggregate in ##Platform_Name## Grid control

The Syncfusion ##Platform_Name## Grid control provides support for reactive aggregates, which allow you to update the aggregate values dynamically as the data changes. Reactive aggregates automatically recalculate their values when there are changes in the underlying data, providing real-time updates to the aggregate values in the grid.

## Auto update aggregate value in batch editing

When the grid is in batch editing mode, the aggregate values in the footer, group footer, and group caption are automatically refreshed every time a cell is saved. This ensures that the aggregate values accurately reflect the edited data.

Here's an example code snippet demonstrating how to auto update aggregate value in batch editing:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs6" %}
{% endif %}

> Adding a new record to the grouped grid will not refresh the aggregate values.

## Refresh aggregate values in inline editing

By default, reactive aggregate update is not supported by inline and dialog edit modes as it is not feasible to anticipate the value change event for every editor. But, you can refresh the aggregates manually in the inline edit mode using the refresh method of aggregate module.

In the following code, the input event for the Freight column editor has been registered and the aggregate value has been refreshed manually.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/aggregates-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/aggregates-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/aggregates-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregates-cs7" %}
{% endif %}