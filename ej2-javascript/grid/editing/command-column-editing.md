---
layout: post
title: Command column editing in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Command column editing in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Command column editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Command column editing in ##Platform_Name## Grid control

The command column editing feature allows you to add CRUD (Create, Read, Update, Delete) action buttons in a column for performing operations on individual rows.This feature is commonly used when you need to enable inline editing, deletion, or saving of row changes directly within the grid. 

To enable command column editing, you can utilize the [column.commands](../../api/grid/column/#commands) property. By defining this property, you can specify the command buttons to be displayed in the command column, such as Edit, Delete, Save, and Cancel.

To utilize CRUD operations, you need to inject the **CommandColumnService** module into the **@NgModule.providers** section. This service provides the necessary functionalities for handling the command column actions.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

Here's an example that demonstrates how to add CRUD action buttons in a column using the `command` column property : 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/command-column-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/command-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/command-column-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/command-column-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/command-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/command-column-cs1" %}
{% endif %}

## Custom command column

 The custom command column feature in the Grid component allows you to add custom command buttons in a column to perform specific actions on individual rows. This feature is particularly useful when you need to provide customized functionality for editing, deleting, or performing any other operation on a row.

To add custom command buttons in a column, you can utilize the [column.commands](../../api/grid/column/#commands) property. Furthermore, you can define the actions associated with these custom buttons using the [commandClick](../../api/grid/#commandClick) event.

Here's an example that demonstrates how to add custom command buttons using the `commands` property and customize the button click behavior to display grid details in a dialog using the `commandClick` event:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/command-column-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/command-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/command-column-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/command-column-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/command-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/command-column-cs2" %}
{% endif %}