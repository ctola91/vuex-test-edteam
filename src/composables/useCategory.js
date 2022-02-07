import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";

const useCategory = () => {
  const text = ref("");
  const store = useStore();
  const categoryForm = reactive({
    title: "",
    description: "",
    gasto: false,
  });

  // computed properties --- getters
  const loading = computed(() => {
    return store.getters["categories/loading"];
  });

  const category = computed(() => store.getters["categories/category"]);

  const categories = computed(() => {
    return store.getters["categories/categories"];
  });

  // dispatch == disparar el Action
  const createCategory = (category) => {
    store.dispatch("categories/addCategory", category);
  };

  const fetchCategories = () => {
    store.dispatch("categories/fetchCategories");
  };

  return {
    text,
    categoryForm,
    loading,
    category,
    categories,
    createCategory,
    fetchCategories,
    message: computed(() => store.getters["categories/message"]),
    error: computed(() => store.getters["categories/error"]),
    setMessage: () => store.dispatch("categories/setMessage", text.value),
    textReverse: computed(() => store.getters["categories/textReverse"]),
  };
};

export default useCategory;
