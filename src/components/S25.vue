<template>
  <div class="smainn">
    <br />
    <div id="s25">
      <div class="img">
        <img
          src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
          alt=""
        />
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
      var a = document.getElementById("s25").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[25].innerHTML;
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

.img {
  height: 260px;
}

img {
  margin: 0 auto;
  background-color: pink;
  margin-top: 50px;
  margin-left: 30px;
  width: 100px;
  height: 120px;
  border-radius: 15px;
  animation: cd 1.2s infinite;
  position: absolute;
  top: 0px;
  left: 0px;
}

@keyframes cd {
  25% {
    top: 30px;
  }

  50% {
    bottom: 30px;
  }
}
</style>
