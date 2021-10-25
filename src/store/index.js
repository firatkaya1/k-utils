import { createStore } from 'vuex'
import notification from './modules/notification';

const store = createStore({
  modules: {
    notification,
  }
});

export default store;