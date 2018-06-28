import Component from '@ember/component';
import layout from '../templates/components/site-drawer-aside';

export default Component.extend({
  layout,
  tagName: 'aside',
  classNames: ['drawer'],

  actions: {
    toggleDrawer() {
      if (this.toggleDrawer && this.toggleDrawer.call) this.toggleDrawer();
    },
  },
});
