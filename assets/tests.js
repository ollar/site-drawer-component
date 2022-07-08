'use strict';

define("dummy/tests/acceptance/drawer-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | drawer', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('has drawer', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.ok((0, _testHelpers.find)('.drawer-wrapper'));
    });
    (0, _qunit.test)('toggle drawer', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)('.toggle-drawer-button');
      assert.ok((0, _testHelpers.find)('.drawer-wrapper.opened'));
      await (0, _testHelpers.click)('.toggle-drawer-button');
      assert.notOk((0, _testHelpers.find)('.drawer-wrapper.opened'));
    });
    (0, _qunit.test)('open drawer', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)('.open-drawer-button');
      assert.ok((0, _testHelpers.find)('.drawer-wrapper.opened'));
      await (0, _testHelpers.click)('.open-drawer-button');
      assert.ok((0, _testHelpers.find)('.drawer-wrapper.opened'));
    });
    (0, _qunit.test)('close drawer', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)('.toggle-drawer-button');
      await (0, _testHelpers.click)('.close-drawer-button');
      assert.notOk((0, _testHelpers.find)('.drawer-wrapper.opened'));
    });
  });
});
define("dummy/tests/integration/components/overlay-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | overlay', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('toggleDrawer', () => null);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SiteDrawer::Overlay @toggleDrawer={{this.toggleDrawer}} />
      */
      {
        "id": "sv6bJg/9",
        "block": "[[[8,[39,0],null,[[\"@toggleDrawer\"],[[30,0,[\"toggleDrawer\"]]]],null]],[],false,[\"site-drawer/overlay\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
                <SiteDrawer::Overlay @toggleDrawer={{this.toggleDrawer}} >
                  template block text
                </SiteDrawer::Overlay>
              
      */
      {
        "id": "8cc9lNGm",
        "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@toggleDrawer\"],[[30,0,[\"toggleDrawer\"]]]],[[\"default\"],[[[[1,\"\\n            template block text\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"site-drawer/overlay\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/trigger-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | trigger', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('toggleDrawer', () => null);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SiteDrawer::Trigger @toggleDrawer={{this.toggleDrawer}} />
      */
      {
        "id": "cTtztAuL",
        "block": "[[[8,[39,0],null,[[\"@toggleDrawer\"],[[30,0,[\"toggleDrawer\"]]]],null]],[],false,[\"site-drawer/trigger\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
                <SiteDrawer::Trigger @toggleDrawer={{this.toggleDrawer}}>
                  template block text
                </SiteDrawer::Trigger>
              
      */
      {
        "id": "GZXH3vSU",
        "block": "[[[1,\"\\n          \"],[8,[39,0],null,[[\"@toggleDrawer\"],[[30,0,[\"toggleDrawer\"]]]],[[\"default\"],[[[[1,\"\\n            template block text\\n          \"]],[]]]]],[1,\"\\n        \"]],[],false,[\"site-drawer/trigger\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/drawer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/drawer-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/overlay-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/overlay-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/trigger-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/trigger-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
