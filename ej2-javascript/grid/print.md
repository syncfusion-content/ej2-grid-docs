---
layout: post
title: Print in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Print in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Print 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Print in ##Platform_Name## Grid control

The printing feature in Syncfusion Grid allows you to easily generate and print a representation of the grid's content for better offline accessibility and documentation. You can enable this feature using either the grid's toolbar or the programmatically available `print` method.

To add the printing option to the grid's toolbar, simply include the [toolbar](../../api/grid/#toolbar) property in your grid configuration and add the **Print** as toolbar item. This will allow you to directly initiate the printing process while click on the Print item from the toolbar.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs152/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs152/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs152" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs152/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs152/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs152" %}
{% endif %}

## Page setup

When printing a webpage, some print options, such as layout, paper size, and margin settings, cannot be configured through JavaScript code. Instead, you need to customize these settings using the browser's page setup dialog. Below are links to the page setup guides for popular web browsers:

* [Chrome](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)
* [Safari](http://www.mintprintables.com/print-tips/adjust-margins-osx/)
* [IE](http://www.helpteaching.com/help/print/index.htm)

## Print by external button

You can print the grid's content using an external button by utilizing the [print](../../api/grid/#print) method. This method allows you to trigger the printing process programmatically.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/print-method-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/print-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print-method-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/print-method-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/print-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/print-method-cs1" %}
{% endif %}

## Print visible Page

By default, the Syncfusion ##Platform_Name## Grid prints all the pages of the grid. The [printMode](../../api/grid/#printmode) property within the grid grants you control over the printing process. However, if you want to print only the current visible page, you can achieve this by setting the [printMode](../../api/grid/#printmode) property to **CurrentPage**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs153/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs153/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs153" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs153/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs153/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs153" %}
{% endif %}

## Print only selected records

By default, the Syncfusion ##Platform_Name## Grid prints all the data bound to its dataSource. However, there might be cases where you want to print only the selected records from the grid. The ##Platform_Name## Grid provides an option to achieve this by binding to the [beforePrint](../../api/grid/#beforeprint) event, where you can replace the rows of the printing grid with the selected rows.

Below is an example code that demonstrates how to print only the selected records from the ##Platform_Name## Grid:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/print-record-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/print-record-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print-record-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/print-record-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/print-record-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/print-record-cs1" %}
{% endif %}

## Print the hierarchy grid

The Syncfusion ##Platform_Name## Grid allows you to print hierarchy grids, which consist of a parent grid and its child grids. By default, when you print a hierarchy grid, it includes the parent grid and expanded child grids only. However, you can customize the print behavior using the [hierarchyPrintMode](../../api/grid/#hierarchyprintmode) property.

The `hierarchyPrintMode` property in the ##Platform_Name## Grid lets you control the printing behavior for hierarchy grids. You can choose from three options:

| Mode     | Behavior                                                                         |
| -------- | -------------------------------------------------------------------------------  |
| Expanded | Prints the parent grid with expanded child grids.                                |
| All      | Prints the parent grid with all the child grids, whether expanded or collapsed.  |
| None     | Prints the parent grid alone.                                                    |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/hierarchy-print-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-print-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hierarchy-print-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hierarchy-print-cs3" %}
{% endif %}

## Print the master detail grid

The Syncfusion ##Platform_Name## Grid provides the option to visualize details of a record in another grid in a master-detail manner. By default, when you print a master-detail grid, only the master grid is included in the print output. However, you can customize the print behavior to include both the master and detail grids using the `beforePrint` event of the grid.

The [beforePrint](../../api/grid/#beforeprint) event in the ##Platform_Name## Grid is triggered before the actual printing process begins. You can handle this event to customize the print output. By adding the detail grid to the `element` argument of the `beforePrint` event, you can ensure that both the master and detail grids are printed on the page.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/printmastergrid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/printmastergrid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/printmastergrid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/printmastergrid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/printmastergrid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/printmastergrid-cs1" %}
{% endif %}

## Print large number of columns

When printing a grid with a large number of columns, the browser's default page size (usually A4) might not be sufficient to display all the columns properly. As a result, the browser's print preview may automatically hide the overflowed content, leading to a cut-off appearance.

To show a large number of columns when printing, you can adjust the scale option from the print option panel based on your content size. This will allow you to fit the entire grid content within the printable area.

![Scale Option Setting](./images/print-preview.png)

## Show or hide columns while printing

In the Syncfusion ##Platform_Name## Grid, you have the flexibility to control the visibility of columns during the printing process. You can dynamically show or hide specific columns using the [toolbarClick](../../api/grid#toolbarclick) and [printComplete](../../api/grid#printcomplete) events while printing. This capability enhances your control over which columns are included in the printed output, allowing you to tailor the printed grid to your specific needs.

In the [toolbarClick](../../api/grid#toolbarclick) event, you can show or hide columns by setting [column.visible](../../api/grid/column/#visible) property to **true** or **false** respectively.

In the `printComplete` event, the column visibility state is reset back to its original configuration.

Here's a code example that demonstrates how to show a hidden column (CustomerID) and hide a visible column (ShipCity) during printing and then reset their visibility after printing:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/showhideColumns-print-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/showhideColumns-print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/showhideColumns-print-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/showhideColumns-print-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/showhideColumns-print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/showhideColumns-print-cs1" %}
{% endif %}

## Limitations of printing large data

Printing a large volume of data all at once in the grid can have certain limitations due to potential browser performance issues. Rendering numerous DOM elements on a single page can lead to browser slowdowns or even hang the browser. The grid offers a solution to manage extensive datasets through virtualization. However, it's important to note that virtualization for both rows and columns is not feasible during the printing process.

If printing all the data remains a requirement, an alternative approach is recommended. Exporting the grid data to formats like [Excel](../../grid/excel-exporting/) or [CSV](../../grid/excel-exporting/) or [Pdf](../../grid/pdf-export/) is advised. This exported data can then be printed using non-web-based applications, mitigating the potential performance challenges associated with printing large datasets directly from the browser.

## Retain grid styles while printing

The Syncfusion ##Platform_Name## Grid provides a [beforePrint](../../api/grid/#beforeprint) event that allows you to customize the appearance and styles of the grid before it is sent to the printer. By handling this event, you can ensure that the grid retains its styles and appearance while printing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/print-style-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/print-style-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print-style-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/print-style-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/print-style-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/print-style-cs1" %}
{% endif %}

## Print grid along with other controls

To print the Syncfusion ##Platform_Name## Grid along with another control, such as a chart, you can use the [beforePrint](../../api/grid/#beforeprint) event of the grid. In this event, you can clone the content of the other control and append it to the print document.

Here is an example of how to print grid along with chart control:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/print-component-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/print-component-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/print-component-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/print-component-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/print-component-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/print-component-cs1" %}
{% endif %}

## See Also

* [How to Print the expanded state grid from all pages](./how-to#print-the-expanded-state-from-other-pages)
* [How to print only selected records in grid](https://www.syncfusion.com/kb/11252/how-to-print-only-selected-records-in-grid)