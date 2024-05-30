export default {
    namespaced: true, // 상태 이름이 같아도 충돌이 나지 않게 한다.

    state: {
        count: 100
    },

    getters: {
        getCount(state, getters, rootState, rootGetters){
            // 매개변수 state - 현재 state, 
            return state.count;
        }
    },

    mutations: {
        setCount(state, payload){
            state.count += payload;
        }
    },

    actions: {
        addAction(context, payload){
            context.commit("setCount", payload);
            }
    }

    
};