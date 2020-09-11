import Cookies from "~/middleware/utils";

export const state = () => ({
  token: null
});

export const getters = {
  get_token(state) {
    return state.token || Cookies.getCookieValue('capture_token');
  },
  is_authenticated(state) {
    return state.token != null;
  },
};

export const mutations = {
  login(vuexContext, token) {
    Cookies.setCookie('capture_token', token, 7);
    state.token = token;
    vuexContext.token = token;
  },
  logout(vuexContext) {
    state.token = null;
    vuexContext.token = null;
    Cookies.setCookie('capture_token', '', 7);
  }
};

export const actions = {};
