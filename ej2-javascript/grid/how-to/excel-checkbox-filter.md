---
layout: post
title: Add params for filtering in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about to render on demand Excel/Checkbox type filter in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add params for filtering 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Render on demand Excel/Checkbox type filter in ##Platform_Name## Grid control

You can enable on demand Excel/Checkbox filter by setting [`filterSettings.enableInfiniteScrolling`](../../api/grid/filterSettings#enableInfiniteScrolling) as `true`. By default [`filterSettings.enableInfiniteScrolling`] value set as `false`.

You can customize the on demand data rendering count of Excel/Checkbox filter by setting [`filterSettings.itemsCount`](../../api/grid/filterSettings#itemsCount) value. By default [`filterSettings.itemsCount`] value set as `50` for prevent default html scroll dom white space.

You can customize the on demand data loading effect of Excel/Checkbox filter by setting [`filterSettings.loadingIndicator`](../../api/grid/filterSettings#loadingIndicator) value. By default [`filterSettings.loadingIndicator`] value set as `Shimmer`.

In the below sample, [`filterSettings.enableInfiniteScrolling`](../../api/grid/filterSettings#enableInfiniteScrolling) value set as `true`, [`filterSettings.itemsCount`] value set as `40` and [`filterSettings.loadingIndicator`] value set as `Spinner`. You can see, while open the filter dialog on demand data loading spinner effect with  as like mentioned above

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs63/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs63/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs63" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs63/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs63/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs63" %}
{% endif %}