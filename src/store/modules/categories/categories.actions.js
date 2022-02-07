import CategoryService from "../../../services/CategoryService";
import {
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "./categories.types";

const setMessage = ({ commit }, message) => {
  // agregar una funcion asincrona
  commit("setMessage", message);
};

const addCategory = async ({ commit }, { title, description, gasto }) => {
  try {
    commit(CREATE_CATEGORY_REQUEST);
    let categoryID = await CategoryService.addCategory({
      title,
      description,
      gasto,
    });
    commit(CREATE_CATEGORY_SUCCESS, categoryID);
  } catch (err) {
    console.log(err);
    commit(CREATE_CATEGORY_ERROR, err);
  }
};

const fetchCategories = async ({ commit }) => {
  try {
    commit(GET_CATEGORIES_REQUEST);
    let categories = await CategoryService.getCategories();
    commit(GET_CATEGORIES_SUCCESS, categories);
  } catch (e) {
    commit(GET_CATEGORIES_ERROR, e);
    console.log(e);
  }
};

export default {
  setMessage,
  addCategory,
  fetchCategories,
};
