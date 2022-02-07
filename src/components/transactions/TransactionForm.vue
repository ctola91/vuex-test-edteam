<template>
  <h2 class="title">Agregar {{ isGasto ? "Gasto" : "Ingreso" }}</h2>
  <div class="block">
    <form v-on:submit.prevent="handleSubmit">
      <div class="field">
        <div class="control">
          <label class="label">Monto</label>
          <input
            type="number"
            class="input"
            placeholder="Monto"
            v-model="transactionForm.amount"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Categoria</label>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select v-model="transactionForm.category">
              <option value="">Seleccione una categoria</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.title }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Descripcion</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Descripcion"
            v-model="transactionForm.description"
          ></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Fecha</label>
        <div class="control">
          <input
            class="input"
            type="date"
            placeholder="Fecha"
            v-model="transactionForm.date"
          />
        </div>
      </div>
      <input type="hidden" name="gasto" v-model="transactionForm.gasto" />
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Registrar</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancelar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { computed, onMounted, reactive, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import useCategory from "../../composables/useCategory";

export default {
  setup() {
    // variables
    const store = useStore(); // this.$store
    const route = useRoute(); // this.$route
    const router = useRouter(); // this.$router
    const { categories, fetchCategories } = useCategory();

    const transactionForm = reactive({
      amount: null,
      description: "",
      date: Date.now(),
      gasto: route.query.isGasto == "true" ? true : false,
      category: "",
    });

    // computed properties
    const transaction = computed(() => {
      return store.getters["transactions/transaction"];
    });
    // metodos del ciclo de vida
    onMounted(() => {
      fetchCategories();
    });
    // methods
    const handleSubmit = () => {
      if (transactionForm.description !== "" && transactionForm.amount !== 0) {
        createTransaction();
      } else {
        alert("Llene todos los campos");
      }
    };

    const createTransaction = () => {
      store.dispatch("transactions/createTransaction", {
        description: transactionForm.description,
        amount: transactionForm.amount,
        gasto: transactionForm.gasto,
        category: transactionForm.category,
        date: transactionForm.date,
      });
    };

    // watch
    watch(transaction, (newValue, oldValue) => {
      if (oldValue !== undefined && oldValue !== newValue) {
        router.push("/");
      }
    });

    return {
      transaction,
      isGasto: route.query.isGasto == "true" ? true : false,
      categories,
      transactionForm,
      handleSubmit,
    };
  },
};
</script>
