---
layout: post
title: Frozen in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Frozen in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Frozen 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Frozen in ##Platform_Name## Grid control

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the grid while scrolling.

To use frozen rows and columns support, inject the `Freeze` module in the grid.

In this demo, the [`frozenColumns`](../api/grid/#frozencolumns) is set as '2' and the [`frozenRows`](../api/grid/#frozenrows) is set as '3'. Hence, the left two columns and top three rows are frozen.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/scroller-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroller-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/scroller-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/scroller-cs1" %}
{% endif %}

> * Frozen rows and columns should not be set outside the grid view port.
> * Frozen Grid will support row and column virtualization feature, which helps to improve the Grid performance while loading a large dataset.

## Limitations of Frozen Grid

The following features are not supported in frozen rows and columns:

* Grouping
* Row Template
* Detail Template
* Hierarchy Grid

## Freeze particular columns

You can use [`isFrozen`](../api/grid/column/#isfrozen) property to freeze selected columns in grid.

In this demo, the columns with field name `OrderID` and `EmployeeID` is frozen using the `isFrozen` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/scroller-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroller-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/scroller-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/scroller-cs2" %}
{% endif %}

> * [`isFrozen`](../api/grid/column/#isfrozen) is not compatible with the Freeze direction feature.

## Freeze Direction

You can freeze the Grid columns on the left or right side by using the [`column.freeze`](../api/grid/column/#freeze) property and the remaining columns will be movable. The grid will automatically move the columns to the left or right position based on the [`column.freeze`](../api/grid/column/#freeze) value.

Types of the [`column.freeze`](../api/grid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.

In this demo, the **ShipCountry** column is frozen at the left and the **CustomerID** column is frozen at the right side of the content table.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/scroller-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroller-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/scroller-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/scroller-cs3" %}
{% endif %}

> * Freeze Direction is not compatible with the [`isFrozen`](../api/grid/column/#isfrozen) and [`frozenColumns`](../api/grid/#frozencolumns) properties.

## Limitations of Freeze Direction

This feature has the below limitations, along with the above mentioned Frozen Grid limitations.

* Column virtualization
* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

## Add validation rule for frozen Grid

In a frozen column enabled Grid, Grid content will be separated into frozen and movable parts. The following code can be used to dynamically add validation to input fields that are placed in the movable part. In the [actionComplete](../api/grid/#actioncomplete) event args, you can find the movableform instance as an argument. Here, you can add validation rules dynamically.

```ts
  actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 }); // Here, 'Freight' is the column name.
        }
    }

```

Validation rules for the 'EmployeeID' and 'Freight' columns can be added in the sample below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/scroller-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/scroller-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/scroller-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/scroller-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/scroller-cs4" %}
{% endif %}

> This is applicable when a frozen column is enabled and the edit mode is set as "**Normal**" in the Grid.