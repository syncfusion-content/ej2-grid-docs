---
layout: post
title: Getting started with ##Platform_Name## Grid control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Grid control

This section explains the steps to create a simple Grid and demonstrates the basic usage of the grid component using the Essential JS 2
[quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository. This seed repository is pre-configured with the Essential JS 2 package.

> This application is integrated with the **webpack.config.js** configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node **v14.15.0** or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

Following is the list of minimum dependencies required to use the grid.

```javascript
|-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-excel-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-pdf-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-notifications
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the **ej2-quickstart** folder, run the following command line to navigate to the ej2-quickstart folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent **@syncfusion/ej2** package in the **~/package.json** file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the **Material** theme in the **~/src/styles/styles.css** file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2/material.css';

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Adding Grid component

You can start adding Essential JS 2 grid component to the application. To get started, add the grid component in **app.ts** and **index.html** files using the following code.

Place the following grid code in the **app.ts**.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    height: 315
});

grid.appendTo('#Grid');

{% endhighlight %}
{% endtabs %}

Place the following grid data source code in the **datasource.ts**.

{% tabs %}
{% highlight ts tabtitle="datasource.ts" %}

export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 2, OrderDate: new Date(8368506e5),
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 7, OrderDate: new Date(836937e6),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1
    },
    {
        OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
        ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
        ShipRegion: 'CJ', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0
    },
    {
        OrderID: 10256, CustomerID: 'WELLI', EmployeeID: 3, OrderDate: new Date(837369e6),
        ShipName: 'Wellington Importadora', ShipCity: 'Resende', ShipAddress: 'Rua do Mercado, 12',
        ShipRegion: 'SP', ShipPostalCode: '08737-363', ShipCountry: 'Brazil', Freight: 13.97, Verified: !1
    },
    {
        OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 4, OrderDate: new Date(8374554e5),
        ShipName: 'HILARION-Abastos', ShipCity: 'San Cristóbal', ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        ShipRegion: 'Táchira', ShipPostalCode: '5022', ShipCountry: 'Venezuela', Freight: 81.91, Verified: !0
    },
    {
        OrderID: 10258, CustomerID: 'ERNSH', EmployeeID: 1, OrderDate: new Date(8375418e5),
        ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6',
        ShipRegion: 'CJ', ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 140.51, Verified: !0
    },
    {
        OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 4, OrderDate: new Date(8376282e5),
        ShipName: 'Centro comercial Moctezuma', ShipCity: 'México D.F.', ShipAddress: 'Sierras de Granada 9993',
        ShipRegion: 'CJ', ShipPostalCode: '05022', ShipCountry: 'Mexico', Freight: 3.25, Verified: !1
    },
    {
        OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Ottilies Käseladen', ShipCity: 'Köln', ShipAddress: 'Mehrheimerstr. 369',
        ShipRegion: 'CJ', ShipPostalCode: '50739', ShipCountry: 'Germany', Freight: 55.09, Verified: !0
    },
    {
        OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12',
        ShipRegion: 'RJ', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 3.05, Verified: !1
    },
    {
        OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 8, OrderDate: new Date(8379738e5),
        ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.',
        ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 48.29, Verified: !0
    }];

{% endhighlight %}
{% endtabs %}

Now, add an HTML div element with its `ID` attribute set to `Grid` in your **index.html** using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    ....
    ....
</head>

<body>
    <div>
        <!--HTML grid element, which is going to render as Essential JS 2 Grid-->
        <div id="Grid"></div>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Module injection

To create grids with additional features, inject the required modules. The following modules are used to extend grid's basic functionality.

* [Page](https://ej2.syncfusion.com/documentation/api/grid/page/) - Inject this module to use paging feature.
* [Sort](https://ej2.syncfusion.com/documentation/api/grid/sort/) - Inject this module to use sorting feature.
* [Filter](https://ej2.syncfusion.com/documentation/api/grid/filter/) - Inject this module to use filtering feature.
* [Group](https://ej2.syncfusion.com/documentation/api/grid/group/) - Inject this module to use grouping feature.
* **ExcelExport** - Inject this module to use Excel export feature.
* **PdfExport** - Inject this module to use PDF export feature.

These modules should be injected into the grid using the **Grid.Inject** method.

> Additional feature modules are available [here](https://ej2.syncfusion.com/documentation/grid/module).

## Enable paging

The paging feature enables users to view the grid record in a paged view. It can be enabled by setting the  [allowPaging](https://ej2.syncfusion.com/documentation/api/grid/#allowpaging) property to true. Inject the [Page](https://ej2.syncfusion.com/documentation/api/grid/page/) module as follows. If the **Page** module is not injected, the pager will not be rendered in the grid. Pager can be customized using the [pageSettings](https://ej2.syncfusion.com/documentation/api/grid/pageSettings/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource';
Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowPaging: true,
    pageSettings: { pageSize: 7 }
});

grid.appendTo('#Grid');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs173/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/grid/grid-cs173" %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the [allowSorting](https://ej2.syncfusion.com/documentation/api/grid/#allowsorting) property as **true**. Inject the [Sort](https://ej2.syncfusion.com/documentation/api/grid/sort/) module as follows. If **Sort** module is not injected, you cannot sort when a header is clicked. Sorting feature can be customized using the [sortSettings](https://ej2.syncfusion.com/documentation/api/grid/sortSettings/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Grid, Sort, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource';

Grid.Inject(Sort, Page);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowSorting: true,
    allowPaging: true,
    pageSettings: { pageSize: 7 }
});

grid.appendTo('#Grid');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs174/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/grid/grid-cs174" %}

## Enable filtering

The filtering feature enables you to view reduced amount of records based on filter criteria. It can be enabled by setting the [allowFiltering](https://ej2.syncfusion.com/documentation/api/grid/#allowfiltering) property as **true**. The [Filter](https://ej2.syncfusion.com/documentation/api/grid/filter/) module has to be injected as follows.
If **Filter** module is not injected,  filter bar will not be rendered in the grid. Filtering feature can be customized using the [filterSettings](https://ej2.syncfusion.com/documentation/api/grid/filterSettings/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Grid, Filter, Page, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource';

Grid.Inject(Filter, Page, Sort);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
       { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
       { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
       { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
       { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    allowSorting: true
});

grid.appendTo('#Grid');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs175/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/grid/grid-cs175" %}

## Enable grouping

The grouping feature enables users to view the grid record in a grouped view. It can be enabled by setting the [allowGrouping](https://ej2.syncfusion.com/documentation/api/grid/#allowgrouping) property to true. The [Group](https://ej2.syncfusion.com/documentation/api/grid/group/) module has to be injected as follows. If **Group** module is not injected, the group drop area will not be rendered in the grid. Grouping feature can be customized using the [groupSettings](https://ej2.syncfusion.com/documentation/api/grid/groupSettings/) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Grid, Group, Filter, Page, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource';

Grid.Inject(Group, Filter, Page, Sort);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    height: 175,
    allowGrouping: true,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true
});

grid.appendTo('#Grid');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs176/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/grid/grid-cs176" %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Grid, Group, Filter, Page, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource';

Grid.Inject(Group, Filter, Page, Sort);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    height: 175,
    allowGrouping: true,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true
});

grid.appendTo('#Grid');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs177/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/grid/grid-cs177" %}

## See Also

* [How to open PDF document on button click inside a Grid](https://support.syncfusion.com/kb/article/10246/how-to-open-pdf-document-on-button-click-inside-a-grid)
