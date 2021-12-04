<template>
  <div class="smainn">
    <br />
    <div id="s108">
      <div class="card">
        <h2>Gradient Box Shadow</h2>
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
      var a = document.getElementById("s108").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[108].innerHTML;
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

.card {
  width: 400px;
  height: 200px;
  background-image: linear-gradient(to right, #a73ef5, #fb53e1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #a63ef5, #fb53e2);
  transform: translateY(30%) scale(0.9);
  filter: blur(50px);
  opacity: 0.6;
}

.card h2 {
  position: relative;
  color: #fff;
  letter-spacing: 1px;
}
</style>
