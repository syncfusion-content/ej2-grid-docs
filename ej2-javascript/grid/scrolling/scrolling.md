---
layout: post
title: Scrolling in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Scrolling in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in ##Platform_Name## Grid control

The scrolling feature in the ##Platform_Name## Grid control allows you to navigate through the content that extends beyond the visible area of the grid . It provides scrollbars that are automatically displayed when the content exceeds the specified `width` or `height` of the grid element. This feature is useful when you have a large amount of data or when the content needs to be displayed within a limited space. The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the grid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the grid element width.
* The [height](../../api/grid/#height) and [width](../../api/grid/#width) are used to set the grid height and width, respectively.

> The default value for `height`and `width` is `auto`.

## Set width and height

The ##Platform_Name## Grid control offers a straightforward method to tailor the width and height of the scroller to meet your specific requirements. This is particularly useful when you want precise control over the dimensions of the scroller. To achieve this, you can use pixel values as numbers for the [width](../../api/grid/#width) and [height](../../api/grid/#height) properties of the Grid.

In the following example, the scrollbar is enabled, and the grid's `height` is set to 315 pixels, while the `width` is set to 400 pixels:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/scroller-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroller-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/scroller-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/scroller-cs5" %}
{% endif %}

## Responsive with parent container

The Grid control allows you to create a responsive layout by making it fill its parent container and automatically adjust its size based on the available space and changes in the container's dimensions. This capability is particularly useful for building applications that need to adapt to various screen sizes and devices.

To achieve this, you need to specify the [width](../../api/grid/#width) and [height](../../api/grid/#height) properties of the Grid as 100%. However, keep in mind that setting the height property to 100% requires the Grid's parent element to have an explicit height defined.

In the following example, the parent container has explicit height and width set, and the Grid container's height and width are both set to 100%. This ensures that the Grid adjusts its size responsively based on the dimensions of the parent container:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/scroll-parent-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroll-parent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroll-parent-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/scroll-parent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroll-parent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/scroll-parent-cs1" %}
{% endif %}

## Sticky Header

The ##Platform_Name## Grid control provides a feature that allows you to make column headers remain fixed while scrolling, ensuring they stay visible at all times. To achieve this, you can utilize the [enableStickyHeader](../../api/grid/#enablestickyheader) property by setting it to **true**.

In the below demo, the Grid headers will be sticky while scrolling the Grid's parent div element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sticky-header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sticky-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sticky-header-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sticky-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sticky-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sticky-header-cs1" %}
{% endif %}

## Scroll to selected row

The javascript Grid control allows you to scroll the grid content to the position of the selected row, ensuring that the selected row is automatically brought into view. This feature is particularly useful when dealing with a large dataset and wanting to maintain focus on the selected row. To achieve this, you can utilize the [rowSelected](../../api/grid/#rowselected) event provided by the Grid.

The following example that demonstrates how to use the `rowSelected` event to scroll to the selected row:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/scroll-to-select-row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroll-to-select-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroll-to-select-row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/scroll-to-select-row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroll-to-select-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/scroll-to-select-row-cs1" %}
{% endif %}

## Hide the empty placehoder of scrollbar

The Syncfusion Grid control provides a feature to hide the empty placeholder of the scrollbar, offering a cleaner interface without unnecessary scrollbars. To achieve this, you can utilize the [hideScroll](../../api/grid/#hidescroll) method. This method allows you to determine whether the scrollbar should be hidden based on the content's overflow.

The following example that demonstrates how to use the `hideScroll` method inside the [dataBound](../../api/grid/#databound) event:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/scroller-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroller-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/scroller-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/scroller-cs6" %}
{% endif %}