<template>
  <div class="smainn">
    <div id="s5">
      <button class="gradient button1">Đây là button 1</button>
      <button class="gradient button2">Đây là button 2</button>
      <button class="gradient button3">Đây là button 3</button>
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
      var a = document.getElementById("s5").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
    },
    css() {
      var b = document.getElementsByTagName("style")[5].innerHTML;
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
.gradient {
  width: 100%;
  height: 60px;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  outline: none;
  border: none;
  margin: 5px;
  cursor: pointer;
  background-size: 200%;
  transition: 0.5s ease-out;
}

.gradient:hover {
  background-position: right;
}
.button1 {
  background-image: linear-gradient(to left, purple, hotpink, purple);
}

.button2 {
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0),
    rgb(241, 158, 2),
    rgb(255, 238, 0)
  );
}

.button3 {
  background-image: linear-gradient(150deg, deeppink, pink, deeppink);
}
</style>
