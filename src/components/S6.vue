<template>
  <div class="smainn">
    <div id="s6">
      <div class="listimg">
        <img
          src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
          class="img1"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
          class="img2"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
          class="img3"
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
      var a = document.getElementById("s6").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[6].innerHTML;
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

.listimg {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
img {
  width: 30%;
  margin: 5px;
  background-color: rgb(255, 200, 229);
}

.img1 {
  border-radius: 50%;
}
.img2 {
  border-radius: 20px;
}
.img3 {
  border-radius: 20px 0 20px 0;
}
</style>
