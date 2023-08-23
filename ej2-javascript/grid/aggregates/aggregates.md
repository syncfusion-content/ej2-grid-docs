---
layout: post
title: Aggregates in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Aggregates in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Aggregates 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in ##Platform_Name## Grid control

Aggregate values are displayed in the footer, group footer, or group caption of the Grid. It can be configured through `aggregates` property.
[`Field`](../../api/grid/aggregateColumn/#field) and [`type`](../../api/grid/aggregateColumn/#type) are the minimum properties required to represent an aggregate column. It is the demo.

By default, the aggregate value can be displayed in the footer, group, and caption cells. To show the aggregate value in one of the cells, use the [`footerTemplate`](../../api/grid/aggregateColumn/#footertemplate), [`groupFooterTemplate`](../../api/grid/aggregateColumn#groupfootertemplate), or [`groupCaptionTemplate`](../../api/grid/aggregateColumn/#groupcaptiontemplate) property.

## Built-in aggregate types

The aggregate type should be specified in the [`type`](../../api/grid/aggregateColumn/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* Truecount
* Falsecount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](../../api/grid/aggregateColumn/#type) property
with an array of aggregate types.
> * Multiple types for a column is supported only when one of the aggregate templates is used.