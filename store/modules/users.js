import { api, setToken, clearToken } from "../api";
export default {
  namespaced: true,
  state: {
    user: null,
    profile: null
  },
  getUser: async function({ commit }) {
    const user = await api.get("/user");
    commit("setUser", user);
  },
  getters: {
    username(state) {
      return (state.user && state.user.username) || null;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    loginUser: async function({ commit }, { email, password }) {
      clearToken();
      try {
        const response = await api.post("/users/login", {
          user: {
            email,
            password
          }
        });
        if (response.data.user) {
          setToken(response.data.user.token);
          commit("setUser", response.data.user);
        }
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    logoutUser: async function({ commit }) {
        commit("setUser", null);
    },
  }
};