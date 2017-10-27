import Backbone from 'backbone';

import ItemModel from './ItemModel';

var ListModel = Backbone.Collection.extend({
    model: ItemModel
});

export default ListModel;