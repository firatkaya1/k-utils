const state = {
    detail:{},
    isCodeEditorOpen:false
}

const getters = {
    getDetail:state => state.detail,
    getCodeEditorOpen:state => state.isCodeEditorOpen

 };

const actions = {

};

const mutations = {
    setDetail(state,detail){
        state.detail.title = detail.title
        state.detail.body = detail.body
        state.detail.isOpen = true
    },
    updateDetailStatus(state){
        state.detail.isOpen = !state.detail.isOpen
    },
    updateCodeEditorStatus(state){
        state.isCodeEditorOpen = !state.isCodeEditorOpen
    }

 
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};