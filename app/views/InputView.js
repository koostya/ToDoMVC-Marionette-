import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import InputTemplate from '../templates/InputTemplate.html';

var InputView = Marionette.View.extend({
    template: InputTemplate
});

export default InputView;