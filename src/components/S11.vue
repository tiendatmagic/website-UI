<template>
  <div class="smainn">
    <div id="s11">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <button type="button" class="button btn1">
        <i class="fab fa-facebook"></i> Facebook
      </button>

      <button type="button" class="button btn2">
        <i class="fab fa-instagram"></i> Instagram
      </button>

      <button type="button" class="button btn3">
        <i class="fab fa-twitter"></i> Twitter
      </button>
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
      var a = document.getElementById("s11").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
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
button.button {
  width: 100%;
  height: 60px;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.25s ease-out;
  margin: 5px 5px auto auto;
  cursor: pointer;
  transition: 0.5 ease-out;
}

button.button i {
  font-size: 30px;
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
</style>
