---
layout: post
title: Data binding in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## Grid control

The Grid uses [`DataManager`](../../data), which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](../../api/grid/#datasource) property can be assigned either with the instance of [`DataManager`](../../data) or JavaScript object array collection.
It supports two kinds of data binding method:
* Local data
* Remote data

## Sending additional parameters to the server

To add a custom parameter to the data request, use the **addParams** method of **Query** class. Assign the **Query** object with additional parameters to the grid [`query`](../../api/grid/#query) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs9/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs9/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs9" %}
{% endif %}

> The parameters added using the [`query`](../../api/grid/#query) property will be sent along with the data request for every grid action.

## Handling HTTP error

During server interaction from the grid, some server-side exceptions may occur, and you can acquire those error messages or exception details
in client-side using the [`actionFailure`](../../api/grid/#actionfailure) event.

The argument passed to the [`actionFailure`](../../api/grid/#actionfailure) event contains the error details returned from the server.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs10/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs10/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs10" %}
{% endif %}

> The [`actionFailure`](../../api/grid/#actionfailure) event will be triggered not only for the server errors, but also when there is an exception while processing the grid actions.

## Binding with ajax

You can use Grid [`dataSource`](../../api/grid/#datasource) property to bind the datasource to Grid from external ajax request. In the below code we have fetched the datasource from the server with the help of ajax request and provided that to [`dataSource`](../../api/grid/#datasource) property by using **onSuccess** event of the ajax.

```ts
import { Grid, Page } from '@syncfusion/ej2-grids';
import { Ajax } from '@syncfusion/ej2-base';

Grid.Inject(Page);
let grid: Grid = new Grid({
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 120 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 120 }
    ]
});
grid.appendTo('#Grid');

let button = document.getElementById('btn');
button.addEventListener("click", function(e){
    let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
    ajax.send();
    ajax.onSuccess = function (data: string) {
        grid.dataSource = JSON.parse(data);
    };
});
```

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## See Also

* [How to bind SQL Server data in TypeScript DataGrid using SqlClient data provider](https://www.syncfusion.com/kb/11452/how-to-bind-sql-server-data-in-typescript-datagrid-using-sqlclient-data-provider)