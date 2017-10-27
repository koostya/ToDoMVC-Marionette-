import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import ItemView from './ItemView';

var ListView = Marionette.CompositeView.extend({
    childView: ItemView,
    childViewContainer: '#items'
});

export default ListView;