<template>
  <div class="smainn">
    <br />
    <div id="s30">
      <div class="box">
        <div class="button-group">
          <button class="start" ref="start">Start</button>
          <button class="pause">Pause</button>
        </div>

        <div class="boxtime-group">
          <div class="boxtime">
            <div class="boxtime-item">
              <div class="s1">
                <span>Giờ</span>
                <span>Phút</span>
                <span>Giây</span>
              </div>

              <div class="s2">
                <span class="gio">1</span>
                <span> : </span>
                <span class="phut">2</span>
                <span> : </span>
                <span class="giay">3</span>
              </div>
            </div>
          </div>
        </div>

        <div class="alert">
          <p class="alertt"></p>
        </div>
      </div>
    </div>
    <code style="display: none">
      var time; var action = 1; function timeplay() { time =
      setInterval(function () { var day = new Date();
      document.getElementsByClassName("gio")[0].innerHTML = day.getHours();
      document.getElementsByClassName("phut")[0].innerHTML = day.getMinutes();
      document.getElementsByClassName("giay")[0].innerHTML = day.getSeconds();
      }, 1000) }
      document.getElementsByClassName("start")[0].addEventListener("click",
      function () { if (action === 0) { timeplay();
      document.getElementsByClassName("alert")[0].style.display = 'flex';
      document.getElementsByClassName("alertt")[0].innerText = "Thời gian tiếp
      tục"; setTimeout(function () {
      document.getElementsByClassName("alert")[0].style.display = 'none'; },
      3000) action = 1; } });
      document.getElementsByClassName("pause")[0].addEventListener("click",
      function () { clearInterval(time);
      document.getElementsByClassName("alert")[0].style.display = 'flex';
      document.getElementsByClassName("alertt")[0].innerText = "Thời gian dừng
      lại"; setTimeout(function () {
      document.getElementsByClassName("alert")[0].style.display = 'none'; },
      3000) action = 0; }); timeplay();
    </code>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
        <i class="fa fa-eye"></i> Xem HTML
      </button>
      <button @click="js()" class="btn">
        <i class="fa fa-eye"></i> Xem Javascript
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
      var a = document.getElementById("s30").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[30].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
      document.getElementById("javascript").style.display = "none";
    },

    js() {
      var c = document.getElementsByTagName("code")[0].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
            document.getElementById("javascript").style.display = 'block';
    },
  },
};
</script>


<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 100%;
  height: 400px;
  background-color: rgba(102, 51, 153, 0.363);
  border-radius: 20px;
}

.button-group {
  display: flex;
  justify-content: center;
  position: relative;
  top: 50px;
}

.boxtime-group {
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: center;
  align-items: center;
  transition: 0.5 ease-out;
}

.button-group button {
  width: 200px;
  border-radius: 10px;
  outline: none;
  border: none;
  height: 50px;
  background-color: #584dd0;
  color: #fff;
  cursor: pointer;
  transform: scale(1);
  cursor: pointer;
  box-shadow: 0 10px 20px -5px #584dd0;
  transition: 0.25s ease-out;
  margin-left: 20px;
  margin-right: 20px;
}

.button-group button:hover {
  transform: scale(1.08);
  transition: 0.5 ease-out;
}

.boxtime {
  width: 90%;
  height: 200px;
  background-color: rgba(255, 0, 85, 0.356);
  border-radius: 12px;
}

.boxtime-item {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.s1 {
  width: 100%;

  display: flex;
  justify-content: space-around;
  font-size: 20px;
  color: red;
}

.s2 {
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  font-size: 50px;
  color: rgb(255, 0, 0);
}

.alert {
  display: none;
  width: 30%;
  height: 60px;
  background-color: rgba(234, 2, 255, 0.61);
  color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
}
</style>
