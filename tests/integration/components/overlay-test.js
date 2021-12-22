import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | overlay', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        this.set('toggleDrawer', () => null);

        await render(
            hbs`<SiteDrawer::Overlay @toggleDrawer={{this.toggleDrawer}} />`
        );

        assert.equal(this.element.textContent.trim(), '');

        // Template block usage:
        await render(hbs`
          <SiteDrawer::Overlay @toggleDrawer={{this.toggleDrawer}} >
            template block text
          </SiteDrawer::Overlay>
        `);

        assert.equal(this.element.textContent.trim(), 'template block text');
    });
});
