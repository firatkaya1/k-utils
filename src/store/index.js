import { createStore } from 'vuex'
import notification from './modules/notification';
import config from './modules/config';

const store = createStore({
  modules: {
    notification,
    config
  }
});

export default store;