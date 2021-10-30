const state = {
    detail:{}
}

const getters = {
    getDetail:state => state.detail

 };

const actions = {

};

const mutations = {
    setDetail(state,body){
        state.detail.body = body
        state.detail.isOpen = true
    }
 
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};