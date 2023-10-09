---
layout: post
title: Hierarchy grid in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Hierarchy grid in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hierarchy grid 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchy grid in ##Platform_Name## Grid component

The Hierarchy Grid in an ##Platform_Name## Grid component is typically used when you need to display hierarchical data in a tabular format with expandable and collapsible rows. It allows you to represent parent and child relationships within the grid, making it easier for you to navigate and understand the data.

This feature can be enabled by utilizing the [childGrid](../../api/grid/#childgrid) and [childGrid.queryString](../../api/grid/#querystring) properties of the grid component.

To enable the Hierarchy Grid feature:

1. Inject the **DetailRow** module in the grid. This module is essential for handling the hierarchy grid functionality.

2. Define the `childGrid` property within the Grid component configuration. This property describes the options of the child grid.

3. Specify the `childGrid.queryString` property to establish the relation between the parent and child grids and visualizes the data in a hierarchical structure. This property determines how the child records are fetched based on the parent record.

The following example demonstrates how to enable the hierarchy feature in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs85/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs85/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs85" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs85/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs85/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs85" %}
{% endif %}

> * Grid supports n level of child grids.
> * Hierarchical binding is not supported when [DetailTemplate](../../api/grid/#detailtemplate) is enabled.

## Bind hierarchy grid with different field

By default, the parent and child grids have the same field name to map and render a hierarchical grid. However, the component supports establishing a parent-child relationship between grids with different field names. This feature is beneficial when you want to create a parent-child relationship between grids but need to use distinct field names for mapping the data. As a result, you can easily establish the desired relationship between the parent and child grids, even with different field names for data mapping.

By default, the parent and child grid relation is maintained using the [queryString](../../api/grid/#querystring) property, which requires the same field name for both grids. However, to achieve the parent and child relation with different fields, you need to modify the mapping value in the [load](../../api/grid/#load) event of child grid. 

In the following example, the `load` event is utilized to customize the mapping value for the child grid. By accessing the `parentDetails` property and its **parentKeyFieldValue**, you can set the desired mapping value. The `parentRowData` property contains the data of the parent row, and by using the **EmployeeID** field name, you can extract the corresponding value from the parent row data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs88/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs88/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs88" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs88/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs88/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs88" %}
{% endif %}

> Make sure to adjust the field name according to your specific scenario.

## Expand child grid initially

Expanding the child grid initially in the Syncfusion ##Platform_Name## Grid component is helpful when you want to display the child rows of the hierarchical grid expanded by default upon grid load. This can be beneficial in scenarios where you want to provide immediate visibility into the hierarchical data without requiring you to manually expand each child row.

To achieve this, you can use the [expand](../../api/grid/detailRow/#expand) method with the desired target index (number) in the [dataBound](../../api/grid/#databound) event of the grid. 

In the provided example, expand the third record of the grid by utilizing the `expand` method within the `dataBound` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs86/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs86/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs86" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs86/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs86/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs86" %}
{% endif %}

> Index values begin with **"0"**, allowing you to provide the desired target index to expand a specific child grid initially.

## Dynamically load child grid data

Dynamically load child grid data in Syncfusion ##Platform_Name## Grid helps improve performance, optimize data transmission, and enhance the your experience by providing on-demand access to relevant information. Additionally, it offers flexibility in data presentation, which helps improve the overall efficiency of your application.

To dynamically load the `dataSource` of a child grid in the Grid, you can utilize the [load](../../api/grid/#load) event of parent grid. This event allows you to customize the loading behavior of the child grid based on the data of parent grid.

The following example demonstrates how to dynamically load child grid data using the `load` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs87/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs87/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs87" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs87/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs87/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs87" %}
{% endif %}

## Dynamically bind data to child grid based on parent row Data

Dynamically binding data to a child grid based on the parent row data in the Syncfusion ##Platform_Name## Grid component is useful when you want to display child grid data that is specific to each parent row. This feature allows for a dynamic and contextual representation of data within the child grid.

To dynamically bind data to the child grid based on the parent row data instead of using the [queryString](../../api/grid/#querystring) property, you can utilize the [detailDataBound](../../api/grid/#detaildatabound) event of the grid. This event is triggered when expanding the child grid.

In the `detailDataBound` event handler, you can filter the child grid's dataSource based on the **EmployeeID** column value of the parent row data. This can be achieved by using the `DataManager` plugin and applying a filter to the child grid's dataSource. The filtered data can be assigned as the new dataSource for the child grid. This can be demonstrated by the following sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs90/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs90/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs90" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs90/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs90/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs90" %}
{% endif %}

## ExpandAll by external button

By default, grid renders in collapsed state. You can expand all child grid rows by invoking the [`expandAll`](../api/grid/detailRow/#expandall) method, and collapse all grid rows by invoking the [`collapseAll`](../api/grid/detailRow/#collapseall) through an external button.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/hierarchy-method-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/hierarchy-method-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/hierarchy-method-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/hierarchy-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hierarchy-method-cs1" %}
{% endif %}

## Adding Record in ChildGrid

Parent and child grid are related by [`queryString`](../api/grid/#querystring) field value. To maintain this relation in newly added record, You need to set value for [`queryString`](../api/grid/#querystring) field in the added data by the [`actionBegin`](../api/grid/#actionbegin) event.

In the below demo, `EmployeeID` field relates the parent and child grids. To add a new record in child grid, We have to set the `EmployeeID` field with parent record's [`queryString`](../api/grid/#querystring) field value in the [`actionBegin`](../api/grid/#actionbegin) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs89/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs89/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs89" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs89/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs89/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs89" %}
{% endif %}

