<template>
  <div class="smainn">
    <div id="s11">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="button-group">
        <button type="button" class="button btn1">
          <div class="icon">
            <i class="fab fa-facebook"></i>
          </div>
          <div class="name">
            Share on Facebook
          </div>
        </button>

        <button type="button" class="button btn2">
          <div class="icon">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="name">
            Share on Instagram
          </div>
        </button>

        <button type="button" class="button btn3">
          <div class="icon">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="name">
            Share on Twitter
          </div>
        </button>
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
      var a = document.getElementById("s11").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[11].innerHTML;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 228, 215);
}
.button-group {
  display: flex;
  flex-wrap: wrap;
}
.button-group button {
  width: 320px;
  padding: 10px;
  border: none;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
}
.button-group button .icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: inherit;
  justify-content: center;
  font-size: 20px;
  background-color: #fff;
}

.button-group button .name {
  font-size: 16px;
  margin-left: 20px;
  color: #fff;
  letter-spacing: 1px;
}

.button-group .btn1 {
  background-color: #3b5999;
}
.button-group .btn1 .icon {
  color: #3b5999;
}
.button-group .btn2 {
  background-color: #e4405f;
}
.button-group .btn2 .icon {
  color: #e4405f;
}

.button-group .btn3 {
  background-color: #55acee;
}
.button-group .btn3 .icon {
  color: #55acee;
}
</style>
