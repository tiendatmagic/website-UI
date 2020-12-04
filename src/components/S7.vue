<template>
  <div class="smainn">
    <div id="s7">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="spinner">
        <i class="fas fa-spinner"></i>
      </div>
    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
        <i class="fa fa-eye"></i> Xem HTML
      </button>
      <button @click="css()" class="btn">
        <i class="fa fa-eye"></i> Xem CSS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s7").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
    },
    css() {
      var b = document.getElementsByTagName("style")[7].innerHTML;
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
.spinner {
text-align: center;
}
.spinner i {
  color: deeppink;
  font-size: 15vw;

  animation: rotate 2s linear 2s infinite;
  transform: rotateZ(0deg);
}

@keyframes rotate {
  0% {
    color: red;
  }

  40% {
    color: yellow;
  }
  60% {
    color: green;
  }

  75% {
    color: blue;
  }
  85% {
    color: purple;
  }
  100% {
    color: deeppink;
    transform: rotateZ(360deg);
  }
}
</style>
