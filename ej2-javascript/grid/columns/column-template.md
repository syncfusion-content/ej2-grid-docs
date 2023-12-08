---
layout: post
title: Column template in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Column template in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Column template 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Column template in ##Platform_Name## Grid control

Grid control provides a [template](../../api/grid/column/#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for grid actions like sorting, filtering, editing. It is must to define the `field` property of the column to perform any grid actions.

## Render image in a column

To render an image in a grid column, you need to define a [template](../../api/grid/column/#template) for the column using the template property. The `template` property expects an HTML string or a function that returns an HTML element.

The following example demonstrates how to define a [template](../../api/grid/column/#template) for the **Employee Image** field that displays an image element. The `template` property is set to an HTML string that contains an image tag. You have utilized the `src` and `alt` attributes to the image tag. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-template-cs1" %}
{% endif %}

> The [template](../../api/grid/column/#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Grid control provides support for rendering hyperlink columns and performing routing on click using the [template](../../api/grid/column/#template) property. This feature is useful when displaying data that requires a link to another page or website.

The following example demonstrates, how to render hyperlink column in the Grid using the [template](../../api/grid/column/#template) property of the columns. To define a `template` for the column,  you can use a template with an `a` tag to create the hyperlink. The onClick function is triggered when the hyperlink is clicked.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-template-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-template-cs3" %}
{% endif %}

>The window.open() method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a grid column instead of a field value.

### Render LineChart component in a column

The [LineChart](../../sparkline/getting-started) component of Syncfusion provides an elegant way to represent and compare data over time. It displays data points connected by straight line segments to visualize trends in data.

In the following example, we rendered the Sparkline Chart component in the Grid column by defining the [template](../../api/grid/column/#template) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-template-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-template-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-template-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-template-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-template-cs4" %}
{% endif %}

### Render ColorPicker component in a column

The [ColorPicker](../../color-picker/getting-started) component of Syncfusion provides a user-friendly way to select colors from a pre-defined color palette or custom colors. It can be used in a variety of scenarios such as picking a theme color or changing the color of an element on a page.

In the following code, we rendered the ColorPicker component in the Grid column by defining the [template](../../api/grid/column/#template) property.

You can render any component in a grid column using the [`template`](../../api/grid/column/#template) property.

To render other components in the grid, ensure the following steps:

**Step 1**:

Initialize the column template for your custom component.

```ts
template:`<div>
            <select class="e-control e-dropdownlist">
                <option value="1" selected="selected">Order Placed</option>
                <option value="2">Processing</option>
                <option value="3">Delivered</option>
            </select>
        </div>`

```

**Step 2**:

Using the [`queryCellInfo`](../../api/grid/#querycellinfo) event, you can render the DropDown component with the following code.

```ts
    function dropdown(args: QueryCellInfoEventArgs) {
        let ele=args.cell.querySelector('select');
        let drop = new DropDownList({popupHeight: 150, popupWidth: 150});
        drop.appendTo(ele);
    }

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-sync-comp-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-sync-comp-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-sync-comp-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-sync-comp-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-sync-comp-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-sync-comp-cs1" %}
{% endif %}

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on **Discontinued** field value.

```
  <script id="template" type="text/x-template">
            <div class="template_checkbox">
                ${if(Discontinued)}
                <input type="checkbox" checked> ${else}
                <input type="checkbox"> ${/if}
            </div>
        </script>
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/condition-inside-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/condition-inside-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/condition-inside-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/condition-inside-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/condition-inside-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/condition-inside-template-cs1" %}
{% endif %}

## How to get the row object by clicking on the template element

You can get the row object without selecting the row and achieve it using the column template feature and the `getRowObjectFromUID` method of the Grid.

In the following sample, the button element is rendered in the Employee Data column. By clicking the button, you can get the row object using the `getRowObjectFromUID` method of the Grid and display it in the console.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/row-object-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-object-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row-object-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-object-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-object-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-object-cs1" %}
{% endif %}