---
layout: post
title: State Management in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about State Management in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: State Management 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# State Management in ##Platform_Name## Grid control

State management in the ##Platform_Name## Grid control allows you to maintain the grid's state even after a browser refresh or when navigating to a different page within the same browser session. This feature is particularly useful for retaining the grid's configuration and data even after a page reload.

To enable state persistence in the Grid, you can utilize the [enablePersistence](../../api/grid/#enablepersistence) property. When this property is set to **true**, the grid will automatically save its state in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#), ensuring that the state is preserved across page reloads.

```ts
let grid: Grid = new Grid({
    dataSource: data,
    enablePersistence: true,
});     
grid.appendTo('#Grid');
```

> The grid will store the state using the combination of the control name and control ID in the storage. For example, if the control name is **grid** and the ID is **OrderDetails**, the state will be stored as **gridOrderDetails**.

When enabling state persistence, the following grid settings will persist in the local storage.

| Grid Settings    | Properties persist                                                                                                                                                                                                                                                                                                                | Ignored properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pageSettings     | currentPage<br> pageCount<br> pageSize<br> pageSizes<br> totalRecordsCount                                                                                                                                                                                                                                                        | template<br> enableQueryString                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| groupSettings    | allowReordering<br> columns<br> disablePageWiseAggregates<br> enableLazyLoading<br> showDropArea<br> showGroupedColumn<br> showToggleButton<br> showUngroupButton                                                                                                                                                                 | captionTemplate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| columns          | allowEditing<br> allowFiltering<br> allowGrouping<br> allowReordering<br> allowResizing<br> allowSearching<br> allowSorting<br> autoFit<br> disableHtmlEncode<br> enableGroupByFormat<br> field<br> foreignKeyField<br> index<br> showColumnMenu<br> showInColumnChooser<br> sortDirection<br> type<br> uid<br> visible<br> width | clipMode<br> commands<br> customAttributes<br> dataSource<br> defaultValue<br> displayAsCheckBox<br> edit<br> editTemplate<br> editType<br> filter<br> filterBarTemplate<br> filterTemplate<br> foreignKeyValue<br> format<br> formatter<br> freeze<br> headerTemplate<br> headerText<br> headerTextAlign<br> headerValueAccessor<br> hideAtMedia<br> isFrozen<br> isIdentity<br> isPrimaryKey<br> lockColumn<br> maxWidth<br> minWidth<br> sortComparer<br> template<br> textAlign<br> validationRules<br> valueAccessor |
| sortSettings     | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| filterSettings   | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| searchSettings   | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| selectedRowIndex | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |


The grid will persist only the last selected row index.

## Restore initial Grid state

In the Syncfusion ##Platform_Name## Grid control, you have the capability to restore the grid to its initial state, reverting all changes and configurations made during the interaction. This feature can be particularly useful when you want to reset the grid to its original settings, eliminating any applied filters, sorting, or column reordering.

Here are the steps to reset the grid to its initial state, even when the [enablePersistence](../../api/grid/#enablepersistence) property is enabled:

### Changing control id

If you want to restore the initial state of the grid, consider changing the control ID. This step ensures that the grid is treated as a new instance, effectively reverting to its default settings.

Here is an example code to change the control id dynamically to restore initial grid state.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/state-management-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/state-management-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/state-management-cs1" %}
{% endif %}

### Clearing local storage

Another method to reset the grid is by clearing the local storage associated with the grid control. This action removes any stored state information, allowing the grid to return to its original configuration.

Here is an example code on how to clear local storage to retain its default state.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/initial-grid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/initial-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/initial-grid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/initial-grid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/initial-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/initial-grid-cs1" %}
{% endif %}

## Restore to specific state version

Syncfusion ##Platform_Name## Grid supports version-based persistence for easy restoration to a specific state. To enable version based persistence, import `enableVersionBasedPersistence` from `@syncfusion/ej2-base` and set it globally to **true**. Define the grid in the template with properties, bind data, and configure persistence using [enablePersistence](../../api/grid/#enablepersistence) and [ej2state-persistenceVersion](../../api/grid/#ej2state-persistenceversion). 

In the below example, the `clickHandler` method is responsible for handling button clicks corresponding to different versions. Inside this method, the targeted version is assigned to the grid's `ej2state-persistenceVersion` dynamically. The code checks if there is already a persisted state for the selected version in the local storage. If found, the grid is updated with the settings retrieved from the local storage, including columns, filter settings, group settings, sort settings, page settings, and selected row index. If no persisted state is found, the current grid state is persisted to the local storage using the [getPersistData](../../api/grid/#getpersistdata) method.

Here is an example of how to integrate version-based persistence into your ##Platform_Name## control and restore to specific state version:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/state-management-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/state-management-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/state-management-cs3" %}
{% endif %}

## Restore to previous state

The Syncfusion ##Platform_Name## Grid control allows you to save and restore its state using local storage. This feature is helpful when you want to preserve the current state of the Grid, such as column order, sorting, and filtering, so that you can return to your previous work or configurations.

To implement this functionality, use the `getItem` and `setItem` methods for local storage, along with the Grid control's `setProperties` and [getPersistData](../../api/grid/#getpersistdata) methods.

The provided code demonstrates how to save and restore the previous state of a Syncfusion ##Platform_Name## Grid control using local storage.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/state-management-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/state-management-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/state-management-cs4" %}
{% endif %}

## Maintaining custom query in a persistent state

When [enablePersistence](../../api/grid/#enablepersistence) is enabled, the Grid does not automatically maintain custom query parameters after a page load. This is because the Grid refreshes its query params for every page load. You can maintain the custom query params by resetting the [addParams](../../api/data/query/#addparams) method in the [actionBegin](../../api/grid/#actionbegin) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grouping-event-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grouping-event-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grouping-event-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grouping-event-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Get or set local storage value

If the [enablePersistence](../../api/grid/#enablepersistence) property is set to **true**, the Grid property value is saved in the **window.localStorage** for reference. You can get or set the localStorage value by using the **getItem** and **setItem** methods in **window.localStorage**.

To retrieve the Grid model from Local Storage, follow these steps:

```typescript
//get the Grid model.
let value: string = window.localStorage.getItem('gridOrders'); //"gridOrders" is control name + control id.
let model: Object = JSON.parse(value);

```

```typescript
//set the Grid model.
window.localStorage.setItem('gridOrders', JSON.stringify(value)); //"gridOrders" is control name + control id.

```

## Prevent columns from persisting

In the Syncfusion ##Platform_Name## Grid control, you may sometimes want to prevent certain settings from being persisted when using the [enablePersistence](../../api/grid/#enablepersistence) feature. When the `enablePersistence` property is set to **true**, the Grid properties such as [Grouping](../../api/grid/groupSettings/), [Paging](../../api/grid/pageSettings/), [Filtering](../../api/grid/filterSettings/), [Sorting](../../api/grid/sortSettings/), and [Columns](../../api/grid/column/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](../../api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/state-management-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/state-management-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/state-management-cs5" %}
{% endif %}

## Add to persist

Persistence can be added to a Syncfusion ##Platform_Name## Grid control to enhance the user experience. Persistence allows saving and restoring the state of the grid, including column layouts, sorting, filtering, and other user-specific settings. In this documentation, you will explore how to persist column templates, header templates, and header text settings in the ##Platform_Name## Grid.

### Add a new column in persisted columns list

When the [enablePersistence](../../api/grid/#enablepersistence) property is set to true in the Syncfusion Grid control, column configurations are persisted. If you need to add new columns to the existing persisted state, you can achieve this by using the Grid's built-in methods like `column.push`, and then call the [refreshColumns](../../api/grid/#refreshcolumns) method to update the UI with the new columns.

Here's an example of how to add a new column to a list of persisted columns:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/state-management-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/state-management-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/state-management-cs6" %}
{% endif %}

> * Adding new columns using `Columns` directly in the grid initialization is not recommended if you intend to persist the new columns with the existing columns list 

### Persist the column template, header template and header text

By default, when the [enablePersistence](../../api/grid/#enablepersistence) property is set to **true** in the Syncfusion Grid control, certain column properties such as column template, header text, header template, column formatter, and value accessor are not persisted. This is because these properties can be customized at the application level.

To restore these column properties and achieve persistence, you can follow the approach of cloning the grid's columns property using JavaScript Object's assign method and manually storing it along with the persist data. When restoring the settings, this cloned column object must be assigned to the grid's columns property to restore the column settings. The following sample demonstrates this process:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/state-management-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/state-management-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/state-management-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/state-management-cs7" %}
{% endif %}