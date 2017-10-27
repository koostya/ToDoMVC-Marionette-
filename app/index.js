import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.start();
});