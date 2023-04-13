---
layout: post
title: Complex data binding in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Complex data binding in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Complex data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Complex data binding in ##Platform_Name## Grid control

You can achieve complex data binding in the grid by using the dot(.) operator in the [`column.field`](../../api/grid/column/#field).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/complex-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/complex-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/complex-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/complex-binding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/complex-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/complex-binding-cs1" %}
{% endif %}

For OData and ODataV4 adaptors, you need to add [`expand`](../../api/data/query/#expand) query to the [`query`](../../api/grid/#query) property (of Grid), to eager load the complex data.

```ts
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';

 let  data: DataManager = new DataManager({
       adaptor: new ODataAdaptor(),
       crossDomain: true,
       url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
     });
 let query: Query = new Query().expand('Employee');

 let grid: Grid = new Grid({
    dataSource: data,
    query: query,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'Employee.City', headerText: 'Employee City', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```