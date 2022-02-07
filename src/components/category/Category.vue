<template>
  <h1 class="title">Categorias</h1>
  <p v-show="error">{{ message }}</p>
  <div class="block is-flex is-justify-content-start">
    <button class="button is-primary" @click="toggleCreateSection">
      Crear Nuevo
    </button>
  </div>
  <div class="box" v-show="isCreateActive">
    <h2 class="subtitle is-4">Crear nueva categoria</h2>
    <CategoryForm
      :categoryForm="categoryForm"
      :handleSubmit="submit"
      :loading="loading"
    />
  </div>
  <div class="block">
    <h2 class="subtitle is-4">Lista de Categorias</h2>
    <CategoryList :category-list="categories" />
  </div>
</template>
<script>
import { ref, watch, onMounted } from "vue";
import useCategory from "../../composables/useCategory";
import CategoryForm from "./CategoryForm.vue";
import CategoryList from "./CategoryList.vue";

export default {
  components: {
    CategoryForm,
    CategoryList,
  },
  setup() {
    const {
      text,
      categoryForm,
      loading,
      category,
      categories,
      createCategory,
      fetchCategories,
      message,
      error,
      setMessage,
      textReverse,
    } = useCategory();
    const isCreateActive = ref(false);

    // metodos del ciclo de vida de un componente
    onMounted(() => {
      fetchCategories();
    });

    // methods == metodos del componente
    const submit = (event) => {
      event.preventDefault();
      if (categoryForm.title !== "" && categoryForm.description !== "") {
        createCategory({
          title: categoryForm.title,
          description: categoryForm.description,
          gasto: categoryForm.gasto ? true : false,
        });
      } else {
        alert("Llene todos los campos del formulario");
      }
    };

    const toggleCreateSection = () => {
      isCreateActive.value = !isCreateActive.value;
    };

    // watch == escuchar cambios en valores especificos
    watch(category, (newValue, oldValue) => {
      if (oldValue !== undefined && oldValue !== newValue) {
        toggleCreateSection();
      }
    });

    return {
      submit,
      toggleCreateSection,
      isCreateActive,
      loading,
      categoryForm,
      categories,
      text,
      message,
      error,
      setMessage,
      textReverse,
    };
  },
};
</script>
