[![Build Status](https://travis-ci.com/ollar/site-drawer-component.svg?branch=master)](https://travis-ci.com/ollar/site-drawer-component)

site-drawer-component
==============================================================================

Simple site drawer component

Installation
------------------------------------------------------------------------------

```
ember install site-drawer-component
```


Usage
------------------------------------------------------------------------------

Just wrap your content with this component:

`application.hbs`


```
{{#site-drawer drawerData as |drawerData|}}

...you main content here...

{{/site-drawer}}

```

drawerData - has `toggleDrawer`, `closeDrawer`, `openDrawer` functions.

then you need to create `site-drawer-aside` component and place drawer content in it.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd site-drawer-component`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
