---
layout: post
title: Getting started with ##Platform_Name## Pager control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Pager control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Pager control

This section explains you the steps required to create a simple Pager and demonstrate the basic usage of the Pager component using the Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository. This seed repository is preconfigured with all Essential JS 2 package.

## Dependencies

Below is the list of minimum dependencies required to use the Pager.

```javascript
|-- @syncfusion/ej2-grids
```

## Setup for Local Development

Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git) and install necessary npm packages using following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Configuring System JS

[Syncfusion Pager packages](#dependencies) need to be mapped in `system.config.js` configuration file.

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Adding CSS reference

Combined CSS files are available in the Essential JS 2 package root folder. This can be referenced in your `[src/styles/styles.css]` using following code.

```
@import '../../node_modules/@syncfusion/ej2/material.css';
```

> To refer individual component CSS, please refer to [Individual Component theme files](../../appearance/theme/#referring-individual-control-theme) section.

## Adding Pager component

Now, you can start adding Essential JS 2 Pager component in the application. For getting started, add the Pager component in `app.ts` and `index.html` file using following code.

Now place the below Pager code in the `app.ts`. Here the Pager is rendered with `totalRecordsCount` which is used to render numeric container.

```ts
import { Pager } from '@syncfusion/ej2-grids';

let pager: Pager = new Pager({ totalRecordsCount: 20 });

pager.appendTo('#Pager');

```

Now, add a HTML Div element to act as Pager element in `index.html` using following code.

```
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

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as Pager-->
    <div id="Pager"></div>
</body>

</html>
```

## Page Size

`pageSize` value defines the number records to be displayed per page. The default value for the `pageSize` is 12.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pager/pager-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pager/pager-cs4/ts/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pager/pager-cs4" %}

## Page Count

`pageCount` value defines the number of pages to be displayed in the pager component for navigation. The default value for `pageCount` is 10 and value will be updated based on `totalRecordsCount` and [`pageSize`](#pagesize) values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pager/pager-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pager/pager-cs5/ts/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pager/pager-cs5" %}

## Run the application

The quickstart project is configured to compile and run the application in browser. Use the following command to run the application.

```
npm start
```

Output will be appears as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pager/pager-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pager/pager-cs6/ts/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pager/pager-cs6" %}