import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { schedule } from '@ember/runloop';

import layout from '../templates/components/site-drawer';

export default Component.extend({
  layout,

  classNames: ['site-drawer-component'],
  classNameBindings: ['opened'],
  opened: false,

  router: service(),

  init() {
    this._super(...arguments);

    const router = this.get('router');
    router.addObserver('currentRouteName', this, 'closeDrawer');
  },

  openDrawer() {
    schedule('afterRender', () => this.set('opened', true));
  },

  closeDrawer() {
    schedule('afterRender', () => this.set('opened', false));
  },

  actions: {
    toggleDrawer() {
      this.toggleProperty('opened');
    },

    openDrawer() {
      this.openDrawer();
    },

    closeDrawer() {
      this.closeDrawer();
    },
  },
});
