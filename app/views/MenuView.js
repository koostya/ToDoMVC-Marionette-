import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import MenuTemplate from '../templates/MenuTemplate.html';

var MenuView = Marionette.View.extend({
    template: MenuTemplate
});

export default MenuView;