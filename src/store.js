import Vue from 'vue'
import Vuex from 'vuex'
import { API } from "./utils/Api";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProducts: [],
    product: {},
    productDetail: {},
    loader: false
  },
  getters: {
    allProducts: (state) => {
      return state.allProducts;
    },
    product: (state) => {
      return state.product;
    },
    productDetail: (state) => {
      return state.productDetail;
    }
  },
  mutations: {
    getAllProducts: (state, payload) => {
      state.loading = false;
      state.allProducts = payload;
    },
    getProduct: (state, payload) => {
      state.loading = false;
      state.product = payload;
    },
    getProductDetail: (state, payload) => {
      state.loading = false;
      state.productDetail = payload;
    }
  },
  actions: {
    getAllProducts: ({state, commit}) =>{
      state.loader = true;
      API.get('products?page=1&limit=9&description_length=120')
        .then(res => {
          commit("getAllProducts", res.data.rows);
        })
        .catch(() => console.log("Error in getAllProducts"));
    },
    getProduct: ({state, commit}, payload) =>{
      state.loader = true;
      API.get(`/products/${payload}`)
        .then(res => {
          commit("getProduct", res.data);
        })
        .catch(() => console.log("Error in getProduct"));
    },
    getProductDetail: ({state, commit}, payload) =>{
      state.loader = true;
      API.get(`/products/${payload}/details`)
        .then(res => {
          commit("getProductDetail", res.data[0]);
        })
        .catch(() => console.log("Error in getProductDetail"));
    }
  }
})
