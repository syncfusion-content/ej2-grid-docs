---
layout: post
title: Row in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Row in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row in ##Platform_Name## Grid control

Each row typically represents a single record or item from a data source. Rows in a grid are used to present data in a tabular format. Each row displays a set of values representing the fields of an individual data record. Rows allow users to interact with the data in the grid. Users can select rows, edit cell values, perform sorting or filtering operations, and trigger events based on actions.

## Customize row styles 

Customizing the styles of rows in a Syncfusion Grid allows you to modify the appearance of rows to meet your design requirements. This feature is useful when you want to highlight certain rows or change the font style, background color, and other properties of the row to enhance the visual appeal of the grid. To customize the row styles in the grid, you can use CSS, properties, methods, or event support provided by the Syncfusion Angular Grid component.

### Using event

You can customize the appearance of the rows by using the [rowDataBound](../../api/grid/#rowdatabound) event. This event triggers for every row when it is bound to the data source. In the event handler, you can get the [RowDataBoundEventArgs](../../api/grid/rowDataBoundEventArgs) object, which contains details of the row. You can use this object to modify the row's appearance, add custom elements, or perform any other customization.

Here's an example of how you can use the `rowDataBound` event to customize the styles of rows based on the value of the **Freight** column. This example involves checking the value of the Freight column for each row and adding a CSS class to the row based on the value. The CSS classes **below-30**, **below-80**, and **above-80** can then be defined in your stylesheet to apply the desired styles to the rows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-row-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-row-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-row-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-row-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-row-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-row-cs3" %}
{% endif %}

### Using CSS

You can apply styles to the rows using CSS selectors. The Grid provides a class name for each row element, which you can use to apply styles to that specific row. 

**Customize alternate rows**

You can customize the appearance of the alternate rows using CSS. This can be useful for improving the readability of the data and making it easier to distinguish between rows. By default, Syncfusion Grid provides the CSS class **.e-altrow** to style the alternate rows. You can customize this default style by overriding the **.e-altrow** class with your custom CSS styles. 

To change the background color of the alternate rows, you can add the following CSS code to your application's stylesheet:

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

Here's an example of how to use the **.e-altrow** class to style alternate rows:


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/how-to-alt-row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/how-to-alt-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to-alt-row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/how-to-alt-row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/how-to-alt-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/how-to-alt-row-cs1" %}
{% endif %}

**Customize selected row**

You can customize the appearance of the selected row using CSS. This is useful when you want to highlight the currently selected row for improve the visual appeal of the Grid. By default, the Grid provides the CSS class **.e-selectionbackground** to style the selected row. You can customize this default style by overriding the **.e-selectionbackground** class with your own custom CSS styles.

To change the background color of the selected row, you can add the following CSS code to your application:

```css
.e-grid .e-selectionbackground {
    background-color: #f9920b;
}
```

Here's an example of how to use the **.e-selectionbackground** class to style the selected row:

```
.e-grid td.e-active {
    background-color: #f9920b;
}
```

This is demonstrated in the following sample:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/how-to-alt-row-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/how-to-alt-row-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to-alt-row-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/how-to-alt-row-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/how-to-alt-row-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/how-to-alt-row-cs2" %}
{% endif %}

## Adding a new row programmatically

The Grid can add a new row between the existing rows using the [addRecord](../../api/grid/#addrecord) method of the Grid.

This is demonstrated in the following sample:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/add-row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/add-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/add-row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/add-row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/add-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/add-row-cs1" %}
{% endif %}

> When working with remote data, it is impossible to add a new row between the existing rows.

## How to get the row information when hovering over the cell

It is possible to get the row information when hovering over the specific cell. This can be achieved by using the [rowDataBound](../../api/grid#rowdatabound) event and [getRowInfo](../../api/grid#getrowinfo) method of the Grid.

In the following sample, the `mouseover` event is bound to a grid row in the `rowDataBound` event, and when hovering over the specific cell, using the `getRowInfo` method, row information will be retrieved and displayed in the console.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs154/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs154/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs154" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs154/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs154/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs154" %}
{% endif %}

### See Also

* [How to get Data table row value on onclick event using JavaScript?](https://www.syncfusion.com/kb/11797/how-to-get-data-table-row-value-on-onclick-event-using-javascript)
* [How to maintain selected rows after adding new record](https://www.syncfusion.com/kb/11691/how-to-maintain-selected-rows-after-adding-new-record)
* [How to select the specific record in the grid using its primary key value](https://www.syncfusion.com/kb/11399/how-to-select-the-specific-record-in-the-grid-using-its-primary-key-value)
* [How to achieve drag and drop the rows in Grid with custom data binding](https://www.syncfusion.com/kb/11325/how-to-achieve-drag-and-drop-the-rows-in-grid-with-custom-data-binding)
* [How to get selected records on custom toolbar click](https://www.syncfusion.com/kb/11296/how-to-get-selected-records-on-custom-toolbar-click)
