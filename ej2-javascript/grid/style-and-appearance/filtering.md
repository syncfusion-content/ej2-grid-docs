---
layout: post
title: Filtering in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Filtering in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filtering 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in ##Platform_Name## Grid control

## Customizing the filterbar cell element

Use the below CSS to customize the Grid Filterbar cell element present in the Grid header.

```

.e-grid .e-filterbarcell {
      background-color: #deecf9;
}

```

## Customizing the filterbar input element

Customize the Grid Filterbar input element using this CSS.

```

.e-grid .e-filterbarcell .e-input-group input.e-input{
      font-family: cursive;
}

```

## Customizing the filterbar input focus

Use the below CSS to customize the Grid Filterbar highlight color of focused filterbar input element.

```

.e-grid .e-filterbarcell .e-input-group.e-input-focus::after,
.e-grid .e-filterbarcell .e-input-group.e-input-focus::before{
      background-color: #0078d7;
}

```

## Customizing the Filterbar input clear icon

Use the below CSS to customize the Grid Filterbar input clear icon.

```

.e-grid .e-filterbarcell .e-input-group .e-clear-icon::before {
    content: '\e825';
}

```

## Customizing the Grid filtering icon

Below CSS customizes the Grid filter icon which present in the Grid header. You can also use custom icons. Here we have used bootstrap icon for filter icon element.

```

.e-grid .e-icon-filter::before{
    content: '\002a';
}

```

## Customizing the filter dialog content

Use the below CSS to customize the Grid filter dialog content element.

```

.e-grid .e-filter-popup .e-dlg-content {
    background-color: #deecf9;
}

```

## Customizing the filter dialog footer

Grid filter dialog footer element an be customized by using the below CSS.

```

.e-grid .e-filter-popup .e-footer-content {
    background-color: #deecf9;
}

```

## Customizing the filter dialog input element

Use the below CSS to customize the Grid filter dialog input element.

```

.e-grid .e-filter-popup .e-input-group input.e-input{
      font-family: cursive;
}

```

## Customizing the filter dialog button element

Use the below CSS to customize the Grid filter dialog button element.

```

.e-grid .e-filter-popup .e-btn{
      font-family: cursive;
}

```

## Customizing the excel filter dialog number filters element

Grid Excel filter dialog number filters element can be customized using the below CSS.

```

.e-grid .e-filter-popup .e-contextmenu-wrapper ul{
      background-color: #deecf9;
}

```