[![Build Status](https://travis-ci.org/ollar/site-drawer-component.svg?branch=master)](https://travis-ci.org/ollar/site-drawer-component)

site-drawer-component
==============================================================================

Simple site drawer component


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above


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
<SiteDrawer as |drawer|>
    <drawer.overlay />
    <drawer.aside>
        drawer content here
        You can place everything you need here
    </drawer.aside>

    <drawer.trigger>
        toggle drawer button
    </drawer.trigger>

    ...you main content here...
</SiteDrawer>
```

drawer object also has `toggleDrawer`, `closeDrawer`, `openDrawer` functions and `opened` state variable.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
