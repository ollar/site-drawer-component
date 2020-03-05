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
  toggleDrawer(event) {
    event.preventDefault && event.preventDefault();
    this.opened = !this.opened;
  }

  @action
  openDrawer(event) {
    event.preventDefault && event.preventDefault();
    this._openDrawer();
  }

  @action
  closeDrawer(event) {
    event.preventDefault && event.preventDefault();
    this._closeDrawer();
  }
}
