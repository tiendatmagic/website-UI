<template>
  <div class="smainn">
    <br />
    <div id="s64">
      <div class="list">
        <div class="list-group">
          <ul>
            <li>
              <input type="checkbox" name="" id="" />
              <span> Cá chiên </span>
            </li>

            <li>
              <input type="checkbox" name="" id="" />
              <span> Rau muống </span>
            </li>

            <li>
              <input type="checkbox" name="" id="" />

              <span> Tôm hùm </span>
            </li>

            <li>
              <input type="checkbox" name="" id="" />

              <span> Bánh mì </span>
            </li>

            <li>
              <input type="checkbox" name="" id="" />

              <span> Thịt bò </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">Xem HTML</button>
      <button @click="css()" class="btn">Xem CSS</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s64").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[64].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.list-group::-webkit-scrollbar {
  width: 7px;
}

.list-group::-webkit-scrollbar-thumb {
  background: #6d7696;
  border-radius: 30px;
}

.list-group::-webkit-scrollbar-thumb:hover {
  background: #232f5e;
}

.list {
  width: 250px;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #353f66;
}

.list-group {
  height: 150px;
  overflow-y: auto;
}

.list-group ul {
  list-style: none;
}

.list-group li {
  margin: 15px;
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
}

.list-group li input {
  width: 15px;
  height: 15px;
  background-color: #fff;
  position: relative;
}

.list-group li input::after {
  content: "";
  width: 20px;
  height: 20px;
  top: -4px;
  left: -2.5px;
  position: relative;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: #353f66;
  display: inline-block;
}

.list-group li input:checked:after {
  background-color: #aeb2c2;
}

.list-group li span {
  margin-left: 20px;
}
</style>
