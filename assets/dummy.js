'use strict';



;define("dummy/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("dummy/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("dummy/components/site-drawer", ["exports", "site-drawer-component/components/site-drawer"], function (_exports, _siteDrawer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _siteDrawer.default;
    }
  });
});
;define("dummy/components/site-drawer/aside", ["exports", "site-drawer-component/components/site-drawer/aside"], function (_exports, _aside) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _aside.default;
    }
  });
});
;define("dummy/components/site-drawer/overlay", ["exports", "site-drawer-component/components/site-drawer/overlay"], function (_exports, _overlay) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _overlay.default;
    }
  });
});
;define("dummy/components/site-drawer/trigger", ["exports", "site-drawer-component/components/site-drawer/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("dummy/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("dummy/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("dummy/initializers/export-application-global", ["exports", "ember", "dummy/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dummy/router", ["exports", "@ember/routing/router", "dummy/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("dummy/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("dummy/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("dummy/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("dummy/site-drawer-component/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/components/site-drawer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/site-drawer.js should pass ESLint\n\n');
  });
});
;define("dummy/site-drawer-component/tests/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app/components/site-drawer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/site-drawer.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/site-drawer/aside.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/site-drawer/aside.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/site-drawer/overlay.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/site-drawer/overlay.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/site-drawer/trigger.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/site-drawer/trigger.js should pass ESLint\n\n');
  });
});
;define("dummy/site-drawer-component/tests/templates.template.lint-test", [], function () {
  "use strict";
});
;define("dummy/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "o8h9oE2z",
    "block": "[[[1,[28,[35,0],[\"Site Drawer\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[30,1,[\"overlay\"]],null,null,null],[1,\"\\n    \"],[8,[30,1,[\"aside\"]],null,null,[[\"default\"],[[[[1,\"\\n        \"],[10,2],[12],[1,\"this is drawer content\"],[13],[1,\"\\n\\n        \"],[11,\"button\"],[24,0,\"close-drawer-button\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,1,[\"closeDrawer\"]]],null],[12],[1,\"\\n        close drawer\\n        \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[11,\"button\"],[24,0,\"open-drawer-button\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,1,[\"openDrawer\"]]],null],[12],[1,\"\\n        open drawer\\n    \"],[13],[1,\"\\n    \"],[11,\"button\"],[24,0,\"toggle-drawer-button\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,1,[\"toggleDrawer\"]]],null],[12],[1,\"\\n        toggle drawer\\n    \"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n    \"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n    \"],[13],[1,\"\\n\\n    \"],[8,[30,1,[\"trigger\"]],[[24,0,\"test\"]],null,[[\"default\"],[[[[1,\"\\n        also trigger\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[10,2],[12],[1,\"\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n    \"],[13],[1,\"\\n\\n    \"],[10,2],[12],[1,\"\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n    \"],[13],[1,\"\\n\"]],[1]]]]],[1,\"\\n\"]],[\"drawer\"],false,[\"page-title\",\"site-drawer\",\"on\"]]",
    "moduleName": "dummy/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
