---
layout: post
title: Style and appearance in ##Platform_Name## Pager control | Syncfusion
description: Learn here all about Style and appearance in Syncfusion ##Platform_Name## Pager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style and appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in ##Platform_Name## Pager control

To modify the Pager appearance, you need to override the default CSS of Pager. Please find the CSS structure that can be used to modify the Pager appearance. Also, you have an option to create your own custom theme for all the JavaScript controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

## Customizing the Pager

Use the below CSS to customize the Pager root element.

```

.e-pager {
    background-color: #deecf9;
}

```

### Customizing the Pager container element

Use the below CSS to customize the pager container element.

```

.e-pager .e-pagercontainer {
    background-color: #deecf9;
}

```

### Customizing the Pager navigation elements

Customize the pager navigation elements, using the below selector.

```

.e-pager .e-prevpagedisabled,
.e-pager .e-prevpage,
.e-pager .e-nextpage,
.e-pager .e-nextpagedisabled,
.e-pager .e-lastpagedisabled,
.e-pager .e-lastpage,
.e-pager .e-firstpage,
.e-pager .e-firstpagedisabled {
    background-color: #deecf9;
}

```

### Customizing the Pager page numeric link elements

Use the below CSS to customize the pager current page numeric link elements.

```

.e-pager .e-numericitem {
    border-radius: initial;
}

```

### Customizing the Pager current page numeric element

Using this CSS, you can customize the pager current page numeric item.

```

.e-pager .e-currentitem {
    background-color: #0078d7;
}

```