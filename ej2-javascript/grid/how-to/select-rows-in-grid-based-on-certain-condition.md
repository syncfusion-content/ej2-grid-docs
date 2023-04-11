---
layout: post
title: Select rows in grid based on certain condition in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Select rows in grid based on certain condition in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Select rows in grid based on certain condition 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Select rows in grid based on certain condition in ##Platform_Name## Grid control

You can select the specific row in the grid based on a certain condition by using the [`selectRows`](../../api/grid/#selectrows) method in the [`dataBound`](../../api/grid/#databound) event of Grid.

In the below demo, we have selected the grid rows only when `EmployeeID` column value greater than `3`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/databasedselect-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/databasedselect-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databasedselect-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/databasedselect-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/databasedselect-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/databasedselect-cs1" %}
{% endif %}