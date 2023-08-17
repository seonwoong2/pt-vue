<template>
  <h1>변수 연습</h1>
  <div>number1 = {{ number1 }}</div>
  <div>number2 = {{ number2 }}</div>
  <h1>반복문 연습</h1>
  <div v-for="(el, idx) in arrayData" :key="idx" class="forClass">
    <div @click="increase(idx)" class="buttonText">{{ el.text }} Click Me!</div>
    <div>{{ el.num }}</div>
    <div @click="decrease(idx)" class="buttonText">decrease</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      number1: 10,
      number2: 20,
      arrayData: [
        { text: "test1", num: 0 },
        { text: "test2", num: 0 },
        { text: "test3", num: 0 },
      ],
    };
  },
  methods: {
    decrease(idx) {
      this.arrayData[idx].num--;
    },
    increase(idx) {
      this.arrayData[idx].num++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.forClass {
  padding: 15px;
}
.buttonText {
  cursor: pointer;
  user-select: none;
}
</style>
