const message = (state) => state.message;
const textReverse = (state) => state.message.split("").reverse().join("");
const error = (state) => state.error;
const category = (state) => state.category;
const loading = (state) => state.loading;
const categories = (state) => state.categories;

export default {
  message,
  textReverse,
  error,
  category,
  loading,
  categories,
};
