<template>
  <div class="smainn">
    <br />
    <div id="s48">
      <div class="magic">
        <h1>Tôi là Tiến Đạt Magic</h1>
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
      var a = document.getElementById("s48").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[48].innerHTML;
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
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.magic {
  width: 100%;
  display: flex;
  justify-content: center;
}

.magic h1 {
  font-size: 2rem;
  white-space: nowrap;
  color: hotpink;
  overflow: hidden;
  border-right: 2px solid orangered;
  animation: type 2s infinite;
}

@keyframes type {
  from {
    width: 0px;
  }

  to {
    width: 100%;
  }
}
</style>
