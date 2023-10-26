---
layout: post
title: Column selection in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Column selection in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Column selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Column selection in ##Platform_Name## Grid component

Column selection in grid component allows you to select one or more columns using mouse interactions or arrow keys. This feature is useful when you want to highlight, manipulate, or perform actions on specific columns within the Grid.

To enable column selection in the Grid, you need to set the [selectionSettings.allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true**. 

Here's an example of how to enable column selection using `allowColumnSelection` property in the Grid component:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-selection-cs1" %}
{% endif %}

## Single column selection 

The ##Platform_Name## Grid allows you to select a single column within the Grid. This feature is particularly useful when you want to focus on specific columns or perform actions on the data within a particular column.

To enable single column selection, set the [selectionSettings.allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true**. This property enables column selection and set the [selectionSettings.type](../../api/grid/selectionSettings/#type) property to **Single**. This configuration allows you to select a single column at a time within the grid.

Here's an example of how to enable single column selection using `allowColumnSelection` and `type` property :

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-single-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-single-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-single-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-single-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-single-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-single-selection-cs1" %}
{% endif %}

## Multiple column selection 

The ##Platform_Name## Grid allows you to select multiple columns within the Grid. This feature is particularly useful when you need to focus on or perform actions on several columns simultaneously.

To enable multiple column selection, set the [selectionSettings.allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true**. This property enables column selection and set the [selectionSettings.type](../../api/grid/selectionSettings/#type) property to **Multiple**. This configuration allows you to select a multiple column at a time within the grid.

Here's an example of how to enable multiple column selection using `allowColumnSelection` and `type` property :

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-multi-selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-multi-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-multi-selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-multi-selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-multi-selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-multi-selection-cs1" %}
{% endif %}

## Select columns externally 

You can perform single column selection, multiple column selection, and range of column selection externally in a Grid using built-in methods. This feature allows you to interact with specific columns within the Grid. The following topic demonstrates how you can achieve these selections using methods.

### Single column selection

The ##Platform_Name## grid allows you to select a single column within the Grid. This feature is particularly useful when you want to focus on specific columns or perform actions on the data within a particular column.

To achieve single column selection, you can use the [selectColumn](../../api/grid/selection/#selectcolumn) method. This method selects the column by passing the column index as a parameter.

> Column selection requires the [selectionSettings.allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true** and [type](../../api/grid/selectionSettings/#type) should be **Single**.

The following example, demonstrates how to select a single column within the Grid by obtaining the selected column index through a textbox component and passing these column index as argument to the `selectColumn` method. When the button event is triggered by clicking the **Select Column** button, a single column is selected within the Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-external-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-external-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-external-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-external-cs1" %}
{% endif %}

### Multiple column selection

The ##Platform_Name## Grid allows you to select multiple columns within the Grid. This feature is particularly useful when you need to focus on or perform actions on several columns simultaneously.

To achieve multiple column selection, you can use the [selectColumns](../../api/grid/selection/#selectcolumns) method. This method selects the columns by passing an array of column indexes as a parameter.

> Column selection requires the [selectionSettings.allowColumnSelection](../../api/grid/selectionSettings/#allowcolumnselection) property to **true** and [type](../../api/grid/selectionSettings/#type) should be **Multiple**.

The following example demonstrates how to select multiple columns in the Grid by calling the `selectColumns` method within the button click event and passing an array of column indexes as arguments.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/column-external-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column-external-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/column-external-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/column-external-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-external-cs2" %}
{% endif %}
