<template>
  <div class="smainn">
    <br />
    <div id="s74">

    <div class="calculator">
      <form name="calculator">
        <input type="text" id="display" value="" />

        <div class="line"></div>
        <div class="keyboard">
          <div class="button-item hot" onclick="display.value=''">AC</div>
          <div
            class="button-item hot"
            onclick="display.value=display.value.substr(0, display.value.length-1)"
          >
            --
          </div>
          <div class="button-item hot" onclick="display.value+='%'">%</div>
          <div class="button-item hot" onclick="display.value+='/'">/</div>
          <div class="button-item" onclick="display.value+='7'">7</div>
          <div class="button-item" onclick="display.value+='8'">8</div>
          <div class="button-item" onclick="display.value+='9'">9</div>
          <div class="button-item hot" onclick="display.value+='*'">*</div>
          <div class="button-item" onclick="display.value+='4'">4</div>
          <div class="button-item" onclick="display.value+='5'">5</div>
          <div class="button-item" onclick="display.value+='6'">6</div>
          <div class="button-item hot" onclick="display.value+='-'">-</div>
          <div class="button-item" onclick="display.value+='1'">1</div>
          <div class="button-item" onclick="display.value+='2'">2</div>
          <div class="button-item" onclick="display.value+='3'">3</div>
          <div class="button-item hot" onclick="display.value+='+'">+</div>
          <div class="button-item" onclick="display.value+='0'">0</div>
          <div class="button-item" onclick="display.value+='.'">.</div>
          <div
            class="button-item result"
            onclick="display.value=eval(display.value)"
          >
            =
          </div>
        </div>
      </form>
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
#display {
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: #fff;
  word-wrap: break-word;
  font-size: 30px;
  background-color: #141414;
  border: none;
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
  color: #ff0099;
}
.hot:active {
  color: #920058;
}
.result {
  background-color: #ff0099;
  transform: scale(0.8);
  border-radius: 25px;
}


</style>
