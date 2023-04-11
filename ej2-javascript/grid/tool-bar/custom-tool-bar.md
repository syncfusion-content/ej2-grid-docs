---
layout: post
title: Custom tool bar in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Custom tool bar in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom tool bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom tool bar in ##Platform_Name## Grid control

Custom toolbar is used to customize the whole toolbar. It can be added by defining **toolbarTemplate** as an HTML element ID.

Actions for this toolbar template items are defined in the [`toolbarClick`](../../api/grid/#toolbarclick) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-template-cs2/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-template-cs2/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-template-cs2" %}
{% endif %}

## Render drop-down list in custom toolbar

You can create your own ToolBar items in the Grid. It can be added by defining the [`toolbar`](../../api/grid/#toolbar) as HTML element ID. Actions for this ToolBar template items are defined in the [`toolbarClick`](../../api/grid/#toolbarclick).

To include components in the ToolBar, please ensure the following steps:

**Step 1**:

Initialize the template for your custom component. Using the following code add the DropDownList component to the ToolBar.

```
        <div id='toolbar-template'>
            <div id='dropdown' style="margin-top:5px">
                <input type="text" tabindex="1" id='ddlelement' />
            </div>
        </div>

```

**Step 2**:

To render the DropDownList component, use the [`dataBound`](../../api/grid/#databound) event of the Grid.

* You can select the grid row index based on the selected data in the DropDownList. The output will appear as follows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/toolbar-dropdown-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-dropdown-cs3/ts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar-dropdown-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/toolbar-dropdown-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/toolbar-dropdown-cs3/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-dropdown-cs3" %}
{% endif %}