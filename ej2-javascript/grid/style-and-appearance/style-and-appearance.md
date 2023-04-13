---
layout: post
title: Style and appearance in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Style and appearance in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style and appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in ##Platform_Name## Grid control

To modify the Grid appearance, you need to override the default CSS of grid. Please find the CSS structure that can be used to modify the Grid appearance. Also, you have an option to create your own custom theme for all the JavaScript controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

## Customizing the Grid root element

Use the below CSS to customize the Grid root element.

```

.e-grid {
      font-family: cursive;
}

```

You can modify the grid styling appearance by overriding the default CSS style of the Grid.

In the following sample, the font family of grid content is changed to **cursive**, and the background color of rows, selected rows, alternate rows, and row hovering color is modified using the below CSS styles.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/style-appearance-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/style-appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/style-appearance-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/style-appearance-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/style-appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/style-appearance-cs1" %}
{% endif %}

## See Also

* [How to change the font size of Grid elements](https://www.syncfusion.com/kb/11321/how-to-change-the-font-size-of-grid-elements)