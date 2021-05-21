<template>
  <div class="smainn">
    <br />
    <div id="s38">
      <div class="bigbox">
        <div class="box1"></div>
        <div class="box2"></div>
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
      var a = document.getElementById("s38").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[38].innerHTML;
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

.bigbox {
  width: 95%;
  max-width: 330px;
  height: 250px;
  position: relative;
}

.box1 {
  border-bottom: 70px solid rgb(173, 78, 0);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  height: 0;
  width: 250px;
  transform: rotateZ(-90deg);
  position: absolute;
  z-index: 1;
  top: 90px;
  left: -95px;
}

.box2 {
  width: 80%;
  height: 100%;
  position: absolute;
  left: 65px;
  background-color: rgb(223, 101, 1);
}
</style>
