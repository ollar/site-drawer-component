import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class SiteDrawerComponent extends Component {
  @tracked opened = false;

  asideComponent = 'site-drawer-aside';
  overlayComponent = 'site-drawer-overlay';
  triggerComponent = 'site-drawer-trigger';

  _openDrawer() {
      this.opened = true;
  }

  _closeDrawer() {
      this.opened = false;
  }

  @action
  toggleDrawer(event) {
    event && event?.preventDefault();
    this.opened = !this.opened;
  }

  @action
  openDrawer(event) {
    event && event?.preventDefault();
    this._openDrawer();
  }

  @action
  closeDrawer(event) {
    event && event?.preventDefault();
    this._closeDrawer();
  }
}
