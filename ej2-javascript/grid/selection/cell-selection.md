---
layout: post
title: Cell selection in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Cell selection in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Cell selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in ##Platform_Name## Grid control

Cell selection in the Grid component allows you to interactively select specific cells or ranges of cells within the grid. This selection can be done effortlessly through mouse clicks or arrow keys (up, down, left, and right). This feature is useful when you want to highlight, manipulate, or perform actions on specific cell within the Grid.

> To enable cell selection, you should set the [selectionSettings.mode](../../api/grid/selectionSettings/#mode) property to either **Cell** or **Both**. This property determines the selection mode of the grid.

## Single cell selection 

Single cell selection allows you to select a single cell within a Grid. This feature is useful when you want to focus on a specific cell or perform actions on individual cells within the grid.

To enable single cell selection, set the [selectionSettings.mode](../../api/grid/selectionSettings/#mode) property to **Cell** and the [selectionSettings.type](../../api/grid/selectionSettings/#type) property to **Single**. This configuration allows you to select a single cell at a time within the grid.

In the following example demonstrates how to enable single cell selection using property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs157/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs157/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs157" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs157/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs157/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs157" %}
{% endif %}

## Multiple cell selection 

Multiple cell selection allows you to select multiple cells within a Grid. This feature is beneficial when you need to perform actions on multiple cells simultaneously or focus on specific areas of your data.

To enable multiple cell selection, set the [selectionSettings.mode](../../api/grid/selectionSettings/#mode) property to **Cell** and the [selectionSettings.type](../../api/grid/selectionSettings/#type) property to **Multiple**. This configuration allows you to select and interact with multiple cells within the grid.

In the following example demonstrates how to enable multiple cell selection using property:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs193/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs193/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs193" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs193/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs193/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs193" %}
{% endif %}

## Cell selection mode 

The cell selection mode allows you to interactively select specific cells or ranges of cells within the grid. This feature is particularly useful when you want to perform actions on specific cells or obtain data from selected cells.

The grid supports three types of cell selection mode which can be set by using [selectionSettings.cellSelectionMode](../../api/grid/selectionSettings/#cellselectionmode). These modes are:

* **Flow** - This is the default mode. It allows you to select a range of cells between the start index and end index, including all cells in between the rows. It provides a continuous flow of cell selection.
* **Box** - In this mode, you can select a range of cells within the start and end column indexes, including all cells in between the rows within the specified range. This mode is useful when you need to select cells within specific columns.
* **BoxWithBorder**:  This mode is similar to the Box mode, but it adds borders to the selected range of cells. This visual distinction makes it easy to identify the selected cells within the grid.

> Cell Selection requires the `selectionSettings.mode` to be **Cell** or  **Both** and [type](../../api/grid/selectionSettings/#type) should be **Multiple**.

In the following example demonstrates how to dynamically enable and change the `cellSelectionMode` using the `DropDownList` component:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs194/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs194/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs194" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs194/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs194/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs194" %}
{% endif %}

## Select cells externally 

You can perform single cell selection, multiple cell selection, and range of cell selection externally in a Grid using built-in methods. This feature allows you to interact with specific cells within the Grid. The following topic demonstrates how you can achieve these selections using methods.

### Single cell selection 

The ##Platform_Name## Grid allows you to select a single cell within a grid. This feature is useful when you want to focus on a specific cell or perform actions on individual cells within the grid.

To achieve single cell selection, you can use the [selectCell](../../api/grid/selection/#selectcell) method. This method selects a cell based on the given index.

The following example demonstrates how to select a single cell within the Grid by obtaining the selected row index and cell index through a textbox component and passing these row and cell indexes as arguments to the `selectCell` method. When the button event is triggered by clicking the **Select cell** button, a single cell is selected within the Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs195/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs195/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs195" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs195/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs195/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs195" %}
{% endif %}

### Multiple cell selection

Multiple cell selection allows you to select multiple cells within a Grid. This feature is beneficial when you need to perform actions on multiple cells simultaneously or focus on specific areas of your data.

To achieve multiple cell selection, you can use the [selectCells](../../api/grid/selection/#selectcells) method. This method allows you to select a collection of cells based on their row and column indexes.

In the following example, it demonstrates how to select multiple cells in the Grid by calling the `selectCells` method within the button click event and passing an collection of row and column indexes as arguments.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs196/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs196/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs196" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs196/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs196/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs196" %}
{% endif %}

### Range of cell selection 

Range of cell selection in the Grid allows you to select multiple cells in a continuous range. This capability is particularly useful when you need to perform actions on multiple cells simultaneously or focus on specific areas of your data.

To achieve range of cell selection, you can use the [selectCellsByRange](../../api/grid/selection/#selectcellsbyrange) method. This method selects a range of cells based on the specified start and end indexes.

>* Range cell selection allows you to select multiple cells in box mode when `cellSelectionMode` is set to **Box**. However, if you set `cellSelectionMode` to **Flow**, it will select the range of cells between the start and end indexes, including other cells of the selected rows.
> * Cell Selection requires the `selectionSettings.mode` to be **Cell** or  **Both** and [type](../../api/grid/selectionSettings/#type) should be **Multiple**.

The following example demonstrates how to select a range of cells within the Grid by obtaining the selected cells start index and end index through textbox components. Then, pass these row and cell indexes as arguments to the `selectCellsByRange` method. When you trigger the button event by clicking the **Select Cells** button, a range of cells is selected within the Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs197/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs197/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs197" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs197/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs197/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs197" %}
{% endif %}

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell or column. To enable toggle selection, set [`enableToggle`](../../api/grid/selectionSettings/#enabletoggle) property of the selectionSettings as true. If you click on the selected row or cell or column then it will be unselected and vice versa.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs158/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs158/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs158" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs158/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs158/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs158" %}
{% endif %}

> * If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.