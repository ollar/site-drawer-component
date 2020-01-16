import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SiteDrawerAsideComponent extends Component {
    @action
    closeDrawer() {
        if (this.closeDrawer && this.closeDrawer.call) this.args.closeDrawer();
    }
}
