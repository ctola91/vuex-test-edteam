<template>
  <form v-on:submit="handleSubmit">
    <div class="field">
      <label class="label">Titulo</label>
      <input
        type="text"
        class="input"
        placeholder="Titulo"
        v-model="category.title"
      />
    </div>
    <div class="field">
      <label class="label">Descripcion</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Agrega tu descripcion"
          v-model="category.description"
        ></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="radio">
          <input
            type="radio"
            name="gasto"
            value="true"
            v-model="category.gasto"
          />
          Gasto
        </label>
        <label class="radio">
          <input
            type="radio"
            name="gasto"
            value="false"
            v-model="category.gasto"
          />
          Ingreso
        </label>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Guardar</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancelar</button>
      </div>
    </div>
  </form>
  <p v-show="isLoading">Cargando...</p>
</template>
<script>
import { toRefs } from "vue";
// import { computed, reactive, watch } from "vue";
// import { useStore } from "vuex";
export default {
  // title, description, tipo (gasto, ingreso)
  props: {
    categoryForm: {
      title: String,
      description: String,
      gasto: Boolean,
    },
    handleSubmit: Function,
    loading: Boolean,
  },
  setup(props) {
    const { categoryForm, handleSubmit, loading } = toRefs(props);
    // const store = useStore();
    // const categoryForm = reactive({
    //   title: "",
    //   description: "",
    //   gasto: false,
    // });

    // const loading = computed(() => {
    //   return store.getters["categories/loading"];
    // });

    // const category = computed(() => {
    //   return store.getters["categories/category"];
    // });

    // const createCategory = (category) => {
    //   store.dispatch("categories/addCategory", category);
    // };

    // const submit = (event) => {
    //   event.preventDefault();
    //   if (categoryForm.title !== "" && categoryForm.description !== "") {
    //     createCategory({
    //       title: categoryForm.title,
    //       description: categoryForm.description,
    //       gasto: categoryForm.gasto ? true : false,
    //     });
    //   } else {
    //     alert("Llene todos los campos del formulario");
    //   }
    // };

    // watch(category, (newValue, oldValue) => {
    //   if (oldValue !== undefined && oldValue !== newValue) {
    //     console.log("created: ", newValue);
    //   }
    // });

    return {
      category: categoryForm,
      isLoading: loading,
      submit: handleSubmit,
    };
  },
};
</script>
