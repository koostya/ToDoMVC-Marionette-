import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import ItemTemplate from '../templates/ItemTemplate.html';

var ItemView = Marionette.View.extend({
    template: ItemTemplate
});

export default ItemView;