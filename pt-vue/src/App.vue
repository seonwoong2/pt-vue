<template>
  <div
    v-if="modal_isOpen === true"
    @click="modal_isOpen = false"
    class="modal-back-bg"
  >
    <div class="modal-main-bg"></div>
  </div>
  <div class="title">변수 연습</div>
  <div>number1 = {{ number1 }}</div>
  <div>number2 = {{ number2 }}</div>
  <div class="title">반복문 연습</div>
  <div v-for="(el, idx) in arrayData" :key="idx" class="forClass">
    <div @click="increase(idx)" class="buttonText">{{ el.text }} Click Me!</div>
    <div>{{ el.num }}</div>
    <div @click="decrease(idx)" class="buttonText">decrease</div>
  </div>
  <div class="title">모달창</div>
  <button @click="modal_isOpen = true">Click Me!</button>
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
      modal_isOpen: false,
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
body {
  margin: 0;
}
.forClass {
  padding: 15px;
}
.buttonText {
  cursor: pointer;
  user-select: none;
}
div {
  box-sizing: border-box;
}
.modal-back-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.modal-main-bg {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
}
.title {
  font-size: 24px;
  font-weight: bold;
  color: black;
  padding: 12px;
}
</style>
