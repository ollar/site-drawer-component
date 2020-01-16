import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { schedule } from '@ember/runloop';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class SiteDrawerComponent extends Component {
  @service router;

  @tracked opened = false;

  constructor() {
      super(...arguments);

      this.router.addObserver('currentRouteName', this, 'closeDrawer');
  }

  _openDrawer() {
    schedule('afterRender', () => {
      this.opened = true;
    });
  }

  _closeDrawer() {
    schedule('afterRender', () => {
      this.opened = false;
    });
  }

  @action
  toggleDrawer() {
    this.opened = !this.opened;
  }

  @action
  openDrawer() {
    this._openDrawer();
  }

  @action
  closeDrawer() {
    this._closeDrawer();
  }
}
