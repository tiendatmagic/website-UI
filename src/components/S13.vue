<template>
  <div class="smainn">
    <div id="s13">
      <div class="proccessbar">
        <div class="bar"></div>
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
      var a = document.getElementById("s13").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
    },
    css() {
      var b = document.getElementsByTagName("style")[13].innerHTML;
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

.proccessbar {
  width: 100%;
  height: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 50px;
  overflow: hidden;
  border: 0.1px solid #eee;
  position: relative;
  top: 0px;
  left: 0px;
}
.bar {
  width: 50%;
  height: 100%;
  background-color: blueviolet;
  border-radius: 5px;
  animation: run 1.5s infinite;
  transform: translateX(-200%);
}

@keyframes run {
  to {
    transform: translateX(200%);
  }
}
</style>
