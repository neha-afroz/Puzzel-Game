<template>
  <div class="text-center">
    <div>
      <h1>Puzzel Game</h1>
      <table>
        <tbody>
          <tr v-for="(i, row) in container" :key="i">
            <td v-for="(j, col) in i" :key="j" @click="swapElements(row, col)">
              {{ j }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  createContainer,
  mixEleContainer,
  isSwapEle,
  getSwapIndexes,
  swap,
  isCorrectContainer,
} from "../logicPart";

export default {
  data() {
    return {
      container: [],
      size: 4,
      msg: "Let's Start the Game",
      win: "You are Done!!! Congrats",
    };
  },
  created() {
    alert(this.msg);
    this.container = createContainer(this.size);
    this.container = mixEleContainer(this.container, 1000);
  },

  methods: {
    swapElements(i, j) {
      if (isSwapEle(this.container, [i, j])) {
        const indexes = getSwapIndexes(this.container, [i, j]);
        this.container = swap(this.container, indexes[0], indexes[1]);
      }
      if (isCorrectContainer(this.container)) {
        alert(this.win);
      }
    },
  },
};
</script>

<style>
td {
  width: 140px;
  height: 140px;
  font-size: 60px;
  border: 2px solid rgb(12, 150, 134);
  text-align: center;
  background-color: rgb(20, 5, 34);
}
h1 {
  color: rgb(7, 156, 205);
}
</style>
