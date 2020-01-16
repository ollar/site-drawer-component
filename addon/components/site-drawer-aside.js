import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SiteDrawerAsideComponent extends Component {
    @action
    toggleDrawer() {
        if (this.toggleDrawer && this.toggleDrawer.call) this.toggleDrawer();
    }
}
