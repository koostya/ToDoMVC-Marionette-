import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import LayoutView from '../views/LayoutView';

export default Marionette.Application({
    region: '#mvc',

    onStart: function() {
        this.showView(new LayoutView());
    }
});