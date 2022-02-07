<template>
  <div :id="idChart"></div>
</template>
<script>
import c3 from "c3";
import { onMounted, onUpdated, toRefs } from "vue";

export default {
  props: ["id", "data"],
  setup(props) {
    const { id, data } = toRefs(props);

    onMounted(() => {
      generateChart();
    });

    onUpdated(() => {
      generateChart();
    });

    // method == logica para renderizar el grafico
    const generateChart = () => {
      c3.generate({
        bindto: `#${id.value}`,
        data: data.value,
      });
    };

    return {
      idChart: id,
    };
  },
};
</script>
