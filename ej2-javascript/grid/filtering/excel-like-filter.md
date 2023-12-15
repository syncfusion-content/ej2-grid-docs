---
layout: post
title: Excel like filter in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Excel like filter in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Excel like filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in ##Platform_Name## Grid control

You can enable Excel like filter by defining. [`filterSettings.type`](../../api/grid/filterSettings#type) as `Excel`.The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

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

> * By default, while opening the excel/checkbox filter in the Grid, the filter dialog will get and display the distinct data from the first 1000 records bound to the Grid to optimize performance. The remaining records will be returned as a result of the search option of the filter dialog.
> * However, we can increase the excel/checkbox filter count by modifying the `filterChoiceCount` argument value(as per our need) in the [`actionBegin`](../../api/grid/#actionBegin) event when the [`requestType`](../../api/grid/filterEventArgs/#requesttype) is `filterchoicerequest` or `filtersearchbegin`. This is demonstrated in the below code snippet,

```ts
function actionBegin(args: FilterSearchBeginEventArgs) {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
    }
}
```

## Render checkbox list data in on-demand for Excel/Checkbox filtering of ##Platform_Name## Grid control

The Excel/Checkbox filter in the Grid provides options for loading large datasets on-demand by enabling the [`filterSettings.enableInfiniteScrolling`](../../api/grid/filterSettings#enableInfiniteScrolling) property to `true`. This feature is especially useful for handling extensive datasets and improves data loading performance. The Excel/Checkbox filter retrieves distinct data in ascending order, based on its [`filterSettings.itemsCount`](../../api/grid/filterSettings#itemsCount) property, which defaults to `50`. When the scroller reaches its end, the next data set is fetched. Importantly, this feature sends a request to retrieve new data only, without making a request for the existing loaded dataset.

### Customization of default on-demand filtersettings:

#### Filter choice count:

You can customize the count of on-demand data rendering for Excel/Checkbox filter by adjusting the [`filterSettings.itemsCount`](../../api/grid/filterSettings#itemsCount) property. The default value is `50`

```ts
grid.filterSettings = { enableInfiniteScrolling = true, itemsCount = 40 };
```

> It is recommended to keep the itemsCount below **300**. Higher values will result in unwanted whitespace because of dom maintenance performance degradation.

#### Loading animation effect:

The loading effect during on-demand data retrieval for Excel/Checkbox filter can be customized using the [`filterSettings.loadingIndicator`](../../api/grid/filterSettings#loadingIndicator) property. The default value is `Shimmer`.

```ts
grid.filterSettings = { enableInfiniteScrolling = true, loadingIndicator = 'Spinner' };
```

#### In the following sample, we used the below configuration for On-Demand Excel/Checkbox filter:

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

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)