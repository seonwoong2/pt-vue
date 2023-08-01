// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

new Vue({
  el: "#app",
  data: {
    message: "Hellow Vue!"
  }
});

new Vue({
  el: "#app-2",
  data: {
    message: "이 페이지는 " + new Date() + " 에 로드 되었습니다"
  }
});

new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});
const app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "JavaScript 배우기" },
      { text: "Vue 배우기" },
      { text: "무언가 멋진 것을 만들기" }
    ]
  }
});
app4.todos.push({ text: "New item" });
var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "안녕하세요! Vue.js!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "안녕하세요 Vue!"
  }
});

Vue.component("todo-item", {
  // 이제 todo-item 컴포넌트는 "prop" 이라고 하는
  // 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
  // 이 prop은 todo라는 이름으로 정의했습니다.
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});
var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  }
});
