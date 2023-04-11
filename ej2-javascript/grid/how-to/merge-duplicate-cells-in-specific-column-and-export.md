---
layout: post
title: Merge duplicate cells in specific column and export in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Merge duplicate cells in specific column and export in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Merge duplicate cells in specific column and export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Merge duplicate cells in specific column and export in ##Platform_Name## Grid control

You can merge the duplicate cells (based on the value) for the particular column of Grid by using ['dataBound'](../../api/grid/#databound) event.  At the same time, you can also merge the duplicate cells for particular column while exporting by using the [`excelQueryCellInfo`](../../api/grid/#excelquerycellinfo) event for Excel/CSV  and [`pdfQueryCellInfo`](../../api/grid/#pdfquerycellinfo) event for PDF exporting.

In the below demo,  the duplicate cells are merged for the `OrderID` column  in Grid view and its exporting.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-cellmerge-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-cellmerge-export-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-cellmerge-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-cellmerge-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-cellmerge-export-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-cellmerge-export-cs1" %}
{% endif %}
