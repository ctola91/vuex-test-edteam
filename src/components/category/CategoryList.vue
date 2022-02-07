<template>
  <div class="table-container">
    <table class="table is-fullwidth is-striped is-hoverable">
      <thead>
        <th>Categoria</th>
        <th>Tipo</th>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.title }}</td>
          <td>
            <span
              class="tag"
              :class="{
                'is-primary': !category.gasto,
                'is-info': category.gasto,
              }"
              >{{ category.gasto ? "Gasto" : "Ingreso" }}</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { toRefs } from "@vue/reactivity";
export default {
  props: ["categoryList"],
  setup(props) {
    const { categoryList } = toRefs(props);

    return {
      categories: categoryList,
    };
  },
};
</script>
