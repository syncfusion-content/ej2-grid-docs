---
layout: post
title: Infinite scrolling in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Infinite scrolling in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Infinite scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Infinite scroll in ##Platform_Name## Grid control

The infinite scrolling feature in the Grid is a powerful tool for seamlessly handling extensive data sets without compromising grid performance. It operates on a “load-on-demand” concept, ensuring that data is fetched only when needed. In the default infinite scrolling mode, a new block of data is loaded each time the scrollbar reaches the end of the vertical scroller. This approach significantly enhances the user experience when working with large data collections in the ##Platform_Name## Grid.

In this mode, a block of data accumulates every time the scrollbar reaches the end of the scroller. To clarify, in this context, a **block** represents the [pageSize](../../api/grid/pageSettings/#pagesize) of the Grid. If the `pageSize` is not explicitly specified, the Grid will automatically calculate it based on the grid viewport height and row height.

To enable infinite scrolling, you need to define [enableInfiniteScrolling](../../api/grid#enableinfinitescrolling) as **true** and content height by [height](../../api/grid/#height) property.

> In this feature, the Grid will not initiate a new data request when revisiting the same page.
> The `height` property must be specified when enabling `enableInfiniteScrolling`.

The following an example that demonstrates how to enable infinite scroll in the Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs113/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs113/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs113" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs113/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs113/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs113" %}
{% endif %}

## Number of blocks rendered during initial loading

The number of blocks to be initially rendered when the Grid is loaded. Each block corresponds to a page size of the Grid, resulting in the rendering of a certain number of row elements determined by multiplying the initial block size with the page size.

You can define the initial loading pages count by using [infiniteScrollSettings->initialBlocks](../../api/grid/infiniteScrollSettings/#initialblocks) property . By default, this property loads three pages during the initial rendering. Subsequently, additional data is buffered and loaded based on either the page size or the number of rows rendered within the provided height.

The following an example of how you can use the `initialBlocks` property to set the initial loading pages based on **DropDownList** input:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs114/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs114/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs114" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs114/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs114/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs114" %}
{% endif %}

## Efficient data caching and DOM management in grid cache mode

In Grid cache mode, cached data blocks are reused when revisiting them, reducing the need for frequent data requests while navigating the same block. This mode also manages DOM row elements based on the [infiniteScrollSettings->maxBlocks](../../api/grid/infiniteScrollSettings/#maxblocks) count value. If this limit is exceeded, it removes a block of row elements to create new rows.

To enable cache mode, you need to define [enableCache](../../api/grid/infiniteScrollSettings/#enablecache) property of [infiniteScrollSettings](../../api/grid/infinitescrollsettings/) as **true**.

To enable maximum blocks, you need to define `maxBlocks` count of [infiniteScrollSettings](../../api/grid/infiniteScrollSettings), By default this property value is 3.

The following example that demonstrates how to enable/disable cache mode in infinite scrolling of the grid based on a [Switch](../../switch/getting-started) control [change](../../api/switch#change) event :

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs115/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs115/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs115" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs115/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs115/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs115" %}
{% endif %}

## Limitations

* Due to the element height limitation in browsers, the maximum number of records loaded by the grid is limited due to the browser capability.
* It is necessary to set a static height for the control or its parent container when using infinite scrolling. The 100% height will work only if the control height is set to 100%, and its parent container has a static height.
* When infinite scrolling is activated, compatibility for copy-paste and drag-and-drop operations is limited to the data items visible in the current viewport of the grid.
* Cell selection will not be persisted in cache mode.
* The group records cannot be collapsed in cache mode.
* Lazy load grouping with infinite scrolling does not support cache mode, and the infinite scrolling mode is exclusively applicable to parent-level caption rows in this scenario.
* The aggregated information and total group items are displayed based on the current view items. To get these information regardless of the view items, refer to the [Group with paging](../../grid/grouping/grouping#group-with-paging) topic.
* Programmatic selection using the [selectRows](../../api/grid/#selectrows) and [selectRow](../../api/grid/#selectrow) method is not supported in infinite scrolling.
* Infinite scrolling is not compatible with the following features:
    1. Batch editing
    2. Normal editing
    3. Row spanning
    4. Column spanning
    5. Row template
    6. Row virtual scrolling
    7. Column virtual scrolling
    8. Detail template
    9. Hierarchy features