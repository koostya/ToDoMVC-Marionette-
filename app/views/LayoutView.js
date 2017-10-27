import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import InputView from './InputView';
import ListView from './ListView';
import MenuView from './MenuView';

var LayoutView = Marionette.View.extend({
    template: "#mvc",

    regions: {
        input: "#main_input_wrapper",
        listItems: "#items",
        menu: "#menu"
    }
});
var layoutView = new LayoutView();
layoutView.render();