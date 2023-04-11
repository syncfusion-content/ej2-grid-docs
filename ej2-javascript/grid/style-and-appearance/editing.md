---
layout: post
title: Editing in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Editing in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Editing in ##Platform_Name## Grid control

## Customizing the edited and added row element

Use the below CSS to customize the Grid edited and added row table elements

```

.e-grid .e-editedrow table,
.e-grid .e-addedrow table {
    background-color: #deecf9;
}

```

## Customizing the edited row input element

Grid edited row input elements can be customized using the below CSS.

```

.e-grid .e-gridform .e-rowcell .e-input-group .e-input.e-field {
    font-family: cursive;
}

```

## Customizing the edit dialog header element

Use the below CSS to customize the Grid edit dialog header element

```

.e-edit-dialog .e-dlg-header-content {
    background-color: #deecf9;
}

```

## Customizing the edited row input element in dialog edit mode

Below CSS customizes the Grid edited row input element in Dialog edit mode

```

.e-gridform .e-rowcell .e-float-input .e-field {
    font-family: cursive;
}

```

## Customizing the command column buttons

Use the below CSS to customize the command column buttons such as edit, delete, update, and cancel.

```

.e-grid .e-edit::before, .e-grid .e-delete::before {
    color: #FF8787;
}

.e-grid .e-update::before, .e-grid .e-cancel-icon::before {
    color: #0078d7;
}

```

![Customize command column button](../images/commandbutton.jpg)