---
layout: post
title: Auto fit columns in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Auto fit columns in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Auto fit columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Auto fit columns in ##Platform_Name## Grid control

The [`autoFitColumns`](../../api/grid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](../../api/grid/#autofitcolumns) method in [`dataBound`](../../api/grid/#dataBound) event.

To use the [`autoFitColumns`](../../api/grid/#autofitcolumns) method, inject the **Resize** module in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/autofit-columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autofit-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/autofit-columns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/autofit-columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autofit-columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/autofit-columns-cs1" %}
{% endif %}

> You can autofit all the columns by invoking the [`autoFitColumns`](../../api/grid/#autofitcolumns) method without column names.

## AutoFit columns with specific rows

To adjust the column widths of a specific range of rows based on their content, you can use the [autoFitColumns](https://ej2.syncfusion.com/documentation/api/grid/#autofitcolumns) method by simply passing the second and third parameters (optional) as the start and end index for the column you want to fit. You can autofit specific columns at initial rendering by invoking the `autoFitColumns` method in [dataBound](https://ej2.syncfusion.com/documentation/api/grid/#databound) event.

This feature will calculate the appropriate width based on the maximum content width of the specified range of rows or the header text width. Subsequently, the maximum width of the content of the specified rows or header text will be applied to the entire column of the grid.

Here is an example of how to autofit columns with specific rows. The first parameter is an array containing the specific column field names, such as  **Inventor**, **Number of INPADOC patents** and **Main fields of invention**  is passed to apply the autofit functionality to these columns. After, the second parameter are start index is set to **1** and third parameter are end index is set to **3**. When specifying these start and end index, the autofit operation is applied only to the range of rows from 1 to 3 for column width adjustment.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/autofit-columns-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autofit-columns-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/autofit-columns-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/autofit-columns-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/autofit-columns-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/autofit-columns-cs3" %}
{% endif %}