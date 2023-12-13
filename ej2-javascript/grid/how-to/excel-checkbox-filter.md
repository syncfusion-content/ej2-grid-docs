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

The Excel/Checkbox filter in the Grid provides options for loading large datasets on-demand by enabling the [`filterSettings.enableInfiniteScrolling`](../../api/grid/filterSettings#enableInfiniteScrolling) property to `true`. This feature is especially useful for handling extensive datasets and improves data loading performance. The Excel/Checkbox filter retrieves distinct data in ascending order, based on its [`filterSettings.itemsCount`](../../api/grid/filterSettings#itemsCount) property, which defaults to `50`. When the scroller reaches its end, the next data set is fetched. Importantly, this feature sends a request to retrieve new data only, without making a request for the existing loaded dataset.

### Code Example:

```ts
grid.filterSettings = { enableInfiniteScrolling = true, itemsCount = 40 };
```

The loading effect during on-demand data retrieval for Excel/Checkbox filter can be customized using the [`filterSettings.loadingIndicator`](../../api/grid/filterSettings#loadingIndicator) property. The default value is `Shimmer`.

### Code Example:

```ts
grid.filterSettings = { loadingIndicator = 'Spinner' };
```

### In the following sample, we demonstrate the configuration for On-Demand Excel/Checkbox filter:

```ts
grid.filterSettings = {
    type: 'Excel',
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

* It is recommended to keep the itemsCount within 300, as large DOM maintenance may cause unwanted white space and performance degradation.