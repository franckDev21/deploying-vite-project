import { createStore } from  'vuex';

const store = createStore({
  state : {
    user : {
      id : 1,
      firstname : '@franckDev'
    }
  },
  getters : {
    user: state => state.user,
  },
  mutations : {
    SET_FIRSTNAME : (state,firstname) => state.user.firstname = firstname,
  },
  actions : {
    setFirstname : ({commit},firstname) => commit('SET_FIRSTNAME',firstname)
  },
  modules : {}
});

export default store;