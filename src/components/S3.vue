<template>
  <div class="smainn">
    <br />
    <div id="s3">
      <div class="proccessbar">
        <div class="bar"></div>
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
      var a = document.getElementById("s3").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[3].innerHTML;
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
  height: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 50px;
  overflow: hidden;
  border: 0.1px solid #eee;
}
.bar {
  width: 69%;
  height: 100%;
  background-color: deeppink;
  border-radius: 0px 4px 4px 0px;
}
</style>
