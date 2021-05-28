<template>
  <div class="smainn">
    <br />
    <div id="s96">
      <div class="button-group">
        <div class="button1">
          <p>GO</p>
        </div>
        <div class="button2">
          <p>GO</p>
        </div>
        <div class="button3">
          <p>GO</p>
        </div>
        <div class="button4">
          <p>GO</p>
        </div>
        <div class="button5">
          <p>GO</p>
        </div>
        <div class="button6">
          <div class="buttons"></div>
          <div class="buttons"></div>
          <div class="buttons"></div>
          <div class="buttons"></div>
          <p>GO</p>
        </div>
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
      var a = document.getElementById("s96").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[96].innerHTML;
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

.button-group {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.button-group > div {
  margin: 10px;
}
.button1 {
  width: 200px;
  height: 60px;
  background-color: #d782ff;
  color: #000005;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 0.5s ease-out;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.button1::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(-100%);
  transition: 0.2s ease-out;
}

.button1:hover::after {
  transform: translateX(0%);
}
.button1 p {
  color: #fff;
  z-index: 1;
}

.button2 {
  width: 200px;
  height: 60px;
  background-color: #d782ff;
  color: #000005;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 0.5s ease-out;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.button2::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #b803ff;
  transform: translateY(-100%);
  transition: 0.5s ease-out;
}
.button2::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #b803ff;
  transform: translateY(100%);
  transition: 0.5s ease-out;
}

.button2:hover::after {
  transform: translateY(0%);
}
.button2:hover::before {
  transform: translateY(0%);
}
.button2 p {
  color: #fff;
  z-index: 1;
}

.button3 {
  width: 200px;
  height: 60px;
  background-color: #d782ff;
  color: #000005;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 0.5s ease-out;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.button3::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 30%;
  width: 40%;
  height: 100%;
  background-color: #b803ff;
  transform: scaleX(1);
  opacity: 0;
  transition: 0.25s ease-out;
}

.button3:hover::after {
  opacity: 1;
  transform: scaleX(2.5);
}

.button3 p {
  color: #fff;
  z-index: 1;
}

.button4 {
  width: 200px;
  height: 60px;
  background-color: #d782ff;
  color: #000005;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 0.5s ease-out;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.button4::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 115%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(-70%) translateY(-70%) skew(-50deg);
  opacity: 0;
  transition: 0.25s ease-out;
}
.button4::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  width: 115%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(70%) translateY(70%) skew(-50deg);
  opacity: 0;
  transition: 0.25s ease-out;
}
.button4:hover::after {
  transform: translateX(0%) translateY(0%) skew(-50deg);
  opacity: 1;
}
.button4:hover::before {
  transform: translateX(0%) translateY(0%) skew(-50deg);
  opacity: 1;
}
.button4 p {
  color: #fff;
  z-index: 1;
}

.button5 {
  width: 200px;
  height: 60px;
  background-color: #d782ff;
  color: #000005;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 0.5s ease-out;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.button5::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 115%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(70%) translateY(-70%) skew(-50deg);
  opacity: 0;
  transition: 0.25s ease-out;
}
.button5::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  width: 115%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(-70%) translateY(70%) skew(-50deg);
  opacity: 0;
  transition: 0.25s ease-out;
}
.button5:hover::after {
  transform: translateX(0%) translateY(0%) skew(-50deg);
  opacity: 1;
}
.button5:hover::before {
  transform: translateX(0%) translateY(0%) skew(-50deg);
  opacity: 1;
}
.button5 p {
  color: #fff;
  z-index: 1;
}

.button6 {
  width: 200px;
  height: 60px;
  background-color: #d782ff;
  color: #000005;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 0.5s ease-out;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.button6 .buttons:nth-child(1) {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(-100%) translateY(-100%);
  transition: 0.25s ease-out;
}

.button6 .buttons:nth-child(2) {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(100%) translateY(-100%);
  transition: 0.25s ease-out;
}

.button6 .buttons:nth-child(3) {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(-100%) translateY(100%);
  transition: 0.25s ease-out;
}

.button6 .buttons:nth-child(4) {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: #b803ff;
  transform: translateX(100%) translateY(100%);
  transition: 0.25s ease-out;
}

.button6:hover .buttons:nth-child(1),
.button6:hover .buttons:nth-child(2),
.button6:hover .buttons:nth-child(3),
.button6:hover .buttons:nth-child(4) {
  transform: translateX(0%) translateY(0%);
}
.button6 p {
  color: #fff;
  z-index: 1;
}
</style>
