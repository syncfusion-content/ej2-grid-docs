---
layout: post
title: Render checkbox list data in on-demand for Excel/Checkbox filtering of ##Platform_Name## Grid control | Syncfusion
description: Learn to Render checkbox list data in on-demand for Excel/Checkbox filtering in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Render checkbox list data in on-demand for Excel/Checkbox filtering
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Render checkbox list data in on-demand for Excel/Checkbox filtering of ##Platform_Name## Grid control

The On-Demand Excel/Checkbox filter rendering feature in the ##Platform_Name## Grid control allows you to efficiently load large, ascending order distinct datasets without compromising performance. This functionality is akin to the grid's infinite scroll with cache mode, ensuring that buffer data is loaded only when the scrollbar reaches the end of the scroller.

To enable On-Demand Excel/Checkbox filter, set the  [`filterSettings.enableInfiniteScrolling`](../../api/grid/filterSettings#enableInfiniteScrolling) property to `true`. By default, this property is set to `false`.

```ts
grid.filterSettings = { enableInfiniteScrolling = true };
```

You can customize the count of on-demand data rendering for Excel/Checkbox filter by adjusting the [`filterSettings.itemsCount`](../../api/grid/filterSettings#itemsCount) property. The default value is `50` to prevent default HTML scroll DOM white space.

```ts
grid.filterSettings = { itemsCount = 40 };
```

The loading effect during on-demand data retrieval for Excel/Checkbox filter can be customized using the [`filterSettings.loadingIndicator`](../../api/grid/filterSettings#loadingIndicator) property. The default value is `Shimmer`.

```ts
grid.filterSettings = { loadingIndicator = 'Spinner' };
```

In the following sample, we demonstrate the configuration for On-Demand Excel/Checkbox filter:

```ts
grid.filterSettings = {
    enableInfiniteScrolling: true,
    itemsCount: 40,
    loadingIndicator: 'Spinner'
};
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/checkbox-excel-filter/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/checkbox-excel-filter/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/checkbox-excel-filter" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/checkbox-excel-filter/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/checkbox-excel-filter/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/checkbox-excel-filter" %}
{% endif %}

## Limitations for Checkbox List Data in On-Demand Excel/Checkbox Filtering

* It is recommended to keep the itemsCount within 300, as large DOM maintenance may cause performance degradation.