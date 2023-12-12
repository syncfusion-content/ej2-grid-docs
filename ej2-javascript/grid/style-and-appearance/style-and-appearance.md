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

The Grid control offers various ways to customize its appearance using both default CSS and custom themes. Let's go over some common approaches:

**Default CSS overrides:**

You can use custom CSS to override the default styles of the Grid control. This allows you to change colors, fonts, paddings, and more. You can inspect the generated HTML of the Grid using browser developer tools to identify the relevant CSS classes and styles.

Here's a basic example of how you can override the header background color of the Grid:

```css
/* In your control's CSS file */
.e-grid .e-headercell {
    background-color: #333; /* Override the header background color */
    color: #fff;
}
```

![Change header background](../images/header-background.png)

**Using theme studio:**

Syncfusion's Theme Studio tool allows you to create custom themes for all their controls, including the Grid. This is a more advanced approach that lets you define a comprehensive set of styles to achieve a consistent look and feel throughout your application.

1. Visit the [Syncfusion Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).
2. Select the Grid control from the left panel.
3. Customize various aspects of the control's appearance, such as colors, typography, and spacing.
4. Once done, you can download the generated CSS file and include it in your ##Platform_Name## project.

## Customizing the grid root element

To customize the appearance of the root element of the Syncfusion ##Platform_Name## Grid control, you can use CSS. Here's an example of how to modify the font family and row colors using CSS:

```css
.e-grid {
      font-family: cursive;
}

```

![grid root element](../images/style-font-family.png)

The above code snippet, the **.e-grid** class targets the root element of the Syncfusion ##Platform_Name## Grid control, and the `font-family` property is set to cursive to change the font family of the grid content.

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