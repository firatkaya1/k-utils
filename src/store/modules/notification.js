const state = {
    notifications:[]
}

const getters = {
    getNotifications:state => state.notifications

 };

const actions = {

};

const mutations = {
    pushNotification(state,notification){
        notification.id = (Math.floor(Math.random() * 9999) +1) /* Rastgele bir id vermemiz gerekiyor ki kullanıcı sonradan istediği bir notification'ı ID'ye göre silebilsin.*/
        state.notifications.push(notification);
    },
    deleteNotification(state,id){
        state.notifications = state.notifications.filter((item) => item.id !== id);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};