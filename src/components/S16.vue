<template>
  <div class="smainn">
    <br />
    <div id="s16">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="bell">
        <div class="circle"></div>
        <i class="fas fa-bell"></i>
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
      var a = document.getElementById("s16").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[16].innerHTML;
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

.bell {
  font-size: 50px;
  position: relative;
  cursor: pointer;
  width: 45px;
  color: rgb(209, 209, 209);
}
.bell:hover {
  color: #000;
  animation: bell 0.4s infinite;
}
.circle {
  width: 10px;
  height: 10px;
  background-color: #ff37ac;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
}

@keyframes bell {
  from {
    transform: rotate(-15deg);
  }

  to {
    transform: rotate(15deg);
  }
}
</style>
