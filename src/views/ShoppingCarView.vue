<template>
  <div>
    <table>
      <thead>
        <th>ID</th>
        <th>品名</th>
        <th>日付</th>
        <th>価格</th>
        <th>数量</th>
        <th>操作</th>
      </thead>

      <tbody>
        <tr v-for="(monitor, index) in monitors" :key="index">
          <td>{{ monitor.id }}</td>
          <td>{{ monitor.name }}</td>
          <td>{{ monitor.date }}</td>
          <td>{{ monitor.price }}</td>
          <td>
            <button :disabled="monitor.count <= 1" @click="decrement(index)">
              -</button
            >{{ monitor.count }}<button @click="increment(index)">+</button>
          </td>
          <td><button @click="remove(index)">remove</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      monitors: [
        {
          id: 1,
          name: "BenQ ZOWIE XL2411K ゲーミングモニター",
          date: "2023/04/21",
          price: 31091,
          count: 1,
        },
        {
          id: 2,
          name: "BenQ EW3270U 4K エンターテインメントモニター ",
          date: "2023/04/11",
          price: 23450,
          count: 1,
        },
        {
          id: 3,
          name: "Dell E2318H 23インチ ワイド 液晶モニタ/フルHD",
          date: "2023/04/21",
          price: 330901,
          count: 1,
        },
        {
          id: 4,
          name: "ZFTVNIE 11.6インチモバイルモニター",
          date: "2023/04/21",
          price: 456001,
          count: 1,
        },
      ],
    };
  },
  setup() {
    return {};
  },
  methods: {
    decrement(index: number) {
      this.monitors[index].count--;
      console.log("#### decrement");
    },
    increment(index: number) {
      console.log("#### increment");
      this.monitors[index].count++;
    },
    remove(index: number) {
      this.monitors.splice(index, 1);
      console.log("#### remove ####");
    },
  },
});
</script>

<style scoped>
table {
  border: 1px solid #4169e1;
}

th,
td {
  padding: 8px 16px;
  border: 1px solid #4169e1;
  text-align: left;
}

th {
  background-color: #fffacd;
  color: #000080;
  font-weight: 600;
}
</style>
