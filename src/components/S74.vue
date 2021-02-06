<template>
  <div class="smainn">
    <br />
    <div id="s74">
      <div class="calculator">
        <div class="screen"></div>
        <div class="line"></div>
        <div class="keyboard">
          <div class="button-item hot">AC</div>
          <div class="button-item hot">+/-</div>
          <div class="button-item hot">%</div>
          <div class="button-item hot">/</div>
          <div class="button-item">7</div>
          <div class="button-item">8</div>
          <div class="button-item">9</div>
          <div class="button-item hot">*</div>
          <div class="button-item">4</div>
          <div class="button-item">5</div>
          <div class="button-item">6</div>
          <div class="button-item hot">-</div>
          <div class="button-item">1</div>
          <div class="button-item">2</div>
          <div class="button-item">3</div>
          <div class="button-item hot">+</div>
          <div class="button-item">0</div>
          <div class="button-item">.</div>
          <div class="button-item result">=</div>
        </div>
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
      var a = document.getElementById("s74").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[74].innerHTML;
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

.calculator {
  width: 100%;
  max-width: 300px;
  background-color: #141414;
  border-radius: 30px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  margin: 0 auto;
}
.screen {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  word-break: break-word;
  font-size: 30px;
}
.line {
  width: 95%;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom: 2.3px solid #5d5d5d;
}
.keyboard {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5px;
  padding: 10px;
}
.button-item {
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bdbbbb;
  cursor: pointer;
}
.button-item:active {
  color: #fff;
}
.hot {
  color: #c4541a;
}
.hot:active {
  color: #862d00;
}
.result {
  background-color: #ff5500;
  transform: scale(0.8);
  border-radius: 25px;
}
</style>
