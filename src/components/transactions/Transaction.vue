<template>
  <div class="home">
    <TransactionButtons />
    <div class="block is-flex is-justify-content-center">
      <h1 class="title is-1">
        Saldo: <span class="has-text-primary">{{ saldo }}</span>
      </h1>
    </div>
    <div class="block">
      <h2 class="title is-4">Total de Transacciones</h2>
      <Chart id="pieChart" :data="pieData" />
    </div>
    <div class="block">
      <h2 class="title is-4">Reporte de Transacciones</h2>
      <Chart id="barChart" :data="barData" />
    </div>
    <TransactionTable :transactions="transactions" />
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

import TransactionTable from "./TransactionTable.vue";
import TransactionButtons from "./TransactionButtons.vue";
import Chart from "../../shared/components/Chart.vue";

export default {
  name: "Home",
  components: {
    TransactionTable,
    TransactionButtons,
    Chart,
  },
  setup() {
    const store = useStore();

    // computed properties
    const saldo = computed(() => {
      return store.getters["transactions/saldo"];
    });
    const pieData = computed(() => {
      return {
        type: "pie",
        columns: [
          ["gastos", store.getters["transactions/totalGastos"]],
          ["ingresos", store.getters["transactions/totalIngresos"]],
        ],
      };
    });
    const barData = computed(() => {
      return {
        type: "bar",
        columns: [
          ["gastos", ...store.getters["transactions/gastos"]],
          ["ingresos", ...store.getters["transactions/ingresos"]],
        ],
      };
    });

    const transactions = computed(() => {
      return store.getters["transactions/transactions"];
    });
    onMounted(() => {
      getTransactions();
    });

    const getTransactions = () => {
      store.dispatch("transactions/fetchTransactions");
    };

    return {
      saldo,
      pieData,
      barData,
      transactions,
    };
  },
};
</script>
