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

# Hierarchy grid in ##Platform_Name## Grid control

The Grid allows display of table data in a hierarchical structure to visualize relations between parent and child records. This feature is enabled by defining the [`childGrid`](../api/grid/#childgrid) and [`childGrid.queryString`](../api/grid/#querystring). The [`childGrid`](../api/grid/#childgrid) describes the options of grid and the [`childGrid.queryString`](../api/grid/#querystring) describes the relation between parent and child grids.

To use hierarchical binding, inject the [`DetailRow`](../api/grid/detailRow/) module in the grid.

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
> * Hierarchical binding is not supported when [`DetailTemplate`](../api/grid/#detailtemplate) is enabled.

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

## Expand child grid initially

You can expand a particular child grid at initial rendering by invoking the [`expand`](../api/grid/detailRow/#expand) method in the [`dataBound`](../api/grid/#databound) event.

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

## Dynamically load child grid data

You can dynamically load child grid dataSource by using the [`load`](../api/grid/#load) event. This [`load`](../api/grid/#load) event triggers when the child grid is expanded for the first time.

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

## Bind hierarchy grid with different field

By default, Parent and child grid relation will be maintained by `queryString` property. We should use the same field name to map both parent and child grid. To achieve parent and child relation with different fields, we need to change the mapping value in the child grid [`load`](../api/grid/#load) event.

In the below sample, we have bound the child and parent grid with different fields. Parent grid field name as `EmployeeID` and the child grid field name as `ID`. We need to define the mapping value of `parentKeyFieldValue` from the parent row data in the child grid `load` event.

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

## Dynamically bind data to child grid based on parent row Data

By default, the [childGrid.queryString](../api/grid/#querystring) describes the relationship between parent and child grids and visualizes the data in a hierarchical structure. Instead of the `queryString` property, we can dynamically bind the datasource to the `childGrid` based on the parent row data using the [detailDataBound](../api/grid/#detaildatabound) event of the grid.

While expanding the child Grid, the `detailDataBound` event will be triggered. In this event, based on the EmployeeID column value of parent row data, filter the equally matched data from the `childGrid` datasource using the `DataManager` plugin and bind the filtered data as a datasource to the `childGrid`. This can be demonstrated by the following sample.

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