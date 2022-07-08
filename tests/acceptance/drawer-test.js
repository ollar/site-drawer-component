import { module, test } from 'qunit';
import { visit, find, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | drawer', function (hooks) {
    setupApplicationTest(hooks);

    test('has drawer', async function (assert) {
        await visit('/');

        assert.ok(find('.drawer-wrapper'));
    });

    test('toggle drawer', async function (assert) {
        await visit('/');
        await click('.toggle-drawer-button');
        assert.ok(find('.drawer-wrapper.opened'));

        await click('.toggle-drawer-button');
        assert.notOk(find('.drawer-wrapper.opened'));
    });

    test('open drawer', async function (assert) {
        await visit('/');
        await click('.open-drawer-button');
        assert.ok(find('.drawer-wrapper.opened'));

        await click('.open-drawer-button');
        assert.ok(find('.drawer-wrapper.opened'));
    });

    test('close drawer', async function (assert) {
        await visit('/');

        await click('.toggle-drawer-button');
        await click('.close-drawer-button');

        assert.notOk(find('.drawer-wrapper.opened'));
    });
});
