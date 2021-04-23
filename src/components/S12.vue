<template>
  <div class="smainn">
    <div id="s12">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="listbutton">
        <button type="button" class="button btn1">
          <i class="fab fa-facebook"></i>
        </button>

        <button type="button" class="button btn2">
          <i class="fab fa-instagram"></i>
        </button>

        <button type="button" class="button btn3">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="button btn4">
          <i class="fab fa-github"></i>
        </button>
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
      var a = document.getElementById("s12").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
    },
    css() {
      var b = document.getElementsByTagName("style")[12].innerHTML;
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
  outline: none;
  border: none;
}
.listbutton {
  border-radius: 10px;
  background-color: red;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}

button.button {
  width: 100%;
  height: 50px;
  cursor: pointer;
}
button.button:hover {
  filter: hue-rotate(-69deg);
}
button.button i {
  font-size: 20px;
  color: #fff;
}

.btn1 {
  background-color: #3b5999;
}
.btn2 {
  background-color: #e4405f;
}
.btn3 {
  background-color: #55acee;
}

.btn4 {
  background-color: purple;
}
</style>
