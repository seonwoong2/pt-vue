<template>
  <div class="haeder-container">
    <div class="header-box">
      <div class="icon-section">아이콘</div>
      <div class="menu-box">
        <div class="menu-list-box">
          <a
            class="top-menu"
            v-for="(menu, idx) in topMenu"
            :key="idx"
            :class="{ 'right-border': idx !== topMenu.length - 1 }"
          >
            {{ menu }}
          </a>
        </div>
        <div class="menu-list-box">
          <a
            class="bottom-menu"
            v-for="(menu, idx) in bottomMenu"
            :key="idx"
            @mouseover="bottomMenu[idx].open = true"
            @mouseleave="bottomMenu[idx].open = false"
            >{{ menu.name }}</a
          >
        </div>
      </div>
    </div>
    <ul
      class="sub-menu-box"
      :class="{
        'open-height': bottomMenu.filter((el) => el.open === ture).lenght !== 0,
      }"
    ></ul>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      bottomMenu: [
        { name: "coffee", open: false },
        { name: "menu", open: false },
        { name: "store", open: false },
        { name: "responsibility", open: false },
        { name: "starbucks rewards", open: false },
        { name: "corporate sales", open: false },
        { name: "what's new", open: false },
      ],
      topMenu: [
        "Sign In",
        "My Starbucs",
        "Customer Service & Ideas",
        "Find a Store",
      ],
    };
  },
};
</script>

<style>
.header-container {
  position: relative;
}
.header-box {
  background-color: #f6f5ef;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px 16px 0 16px;
  box-sizing: border-box;
}
.icon-section {
  border: 1px solid black;
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-box {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.menu-list-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;
  flex: 1;
}
.top-menu {
  line-height: 20px;
  color: #555;
  font-size: 13px;
  padding: 0 10px;
  cursor: pointer;
}
.right-border {
  border-right: 1px solid lightgray;
}
.bottom-menu {
  line-height: 20px;
  color: #333;
  font-size: 13;
  text-transform: uppercase;
  padding: 0 10px;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom-menu:hover {
  background-color: #2c2a29;
  color: #669900;
  text-decoration: underline;
}
.sub-menu-box {
  position: absolute;
  background-color: #2c2a29;
  width: 100%;
  margin: 0;
  transition: all 0.35s ease-in-out;
}
.open-height {
  height: 50px;
}
</style>
