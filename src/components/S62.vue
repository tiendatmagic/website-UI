<template>
  <div class="smainn">
    <br />
    <div id="s62">

<div class="card">
  <div class="header">
    <div class="img">
      <img src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png" alt="">
    </div>
  </div>
  <div class="info">
    <div class="main">

      <div class="row-group">

        <div class="row">

          <div class="name">
            <p>Đồng hồ</p>
          </div>
          <div class="type">
            <p>Lớn</p>
          </div>
        </div>
        <div class="row">
          <div class="money">
            <p>$100</p>
          </div>
        </div>
      </div>

      <div class="size-group">
        <b>Size</b>
        <p>20mm 25mm 30mm 35mm 40mm</p>
      </div>

      <div class="color-group">
        <b>Colors</b>
        <div class="colors-group">
          <div class="blue">

          </div>
          <div class="red">

          </div>
          <div class="cyan">

          </div>
          <div class="yellow">

          </div>
          <div class="purple">

          </div>

        </div>
      </div>
      <div class="buttons">
        <button>Buy It Now</button>
      </div>
    </div>
  </div>

</div>


    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
         Xem HTML
      </button>
      <button @click="css()" class="btn">
         Xem CSS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s62").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[62].innerHTML;
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
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.card {
  width: 100%;
  max-width: 330px;
  height: 450px;
  background-color: aqua;
  overflow: hidden;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 0 0 30px 10px rgba(73, 73, 73, 0.2);
}

.header {
  width: 100%;
  height: 100%;
  background-color: blue;
}

.img {
  width: 100%;
  height: 100%;
  background-color: brown;
}

.img img {
  width: 100%;
  height: 100%;
}

.info {
  background-color: #fff;
  transform: translateY(-30%);
  transition: 0.5s ease-out;
}

.card:hover .info {
  transform: translateY(-100%);
}

.main {
  padding: 10px;
}

.row-group {
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
}

.row-group div {
  flex: 1;
}

.row-group .row:nth-child(1) {
  flex: 30%;
}

.row-group .row:nth-child(1) .name {
  font-size: 25px;
  font-weight: bold;
}

.row-group .row:nth-child(1) .type {
  color: rgb(151, 151, 151);
  font-size: 18px;
}

.row-group .row:nth-child(2) {
  text-align: right;
  font-size: 26px;
  font-weight: bold;
}

.size-group,
.color-group {
  margin-top: 15px;
}

.size-group b,
.color-group b {
  font-size: 20px;
}

.size-group p {
  color: rgb(151, 151, 151);
  font-size: 18px;
}

.colors-group {
  display: flex;
  justify-content: flex-start;
}

.colors-group div {
  width: 30px;
  height: 30px;
  background-color: indigo;
  margin: 10px;
}

.colors-group .blue {
  background-color: blue;
}

.colors-group .red {
  background-color: red;
}

.colors-group .cyan {
  background-color: cyan;
}

.colors-group .yellow {
  background-color: yellow;
}

.colors-group .purple {
  background-color: purple;
}

.buttons button {
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 35px;
  background-color: #37a1ce;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  color: rgb(240, 240, 240);
  font-size: 17px;
}

.buttons button:hover {
  background-color: #2a81a7;
}

</style>
