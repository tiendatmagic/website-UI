<template>
  <div class="smainn">
    <br />
    <div id="s54">
      <div class="screen-border">
        <div class="screen">
          <div class="taitho"></div>

          <div class="setvolume"></div>
          <div class="volume"></div>
          <div class="power"></div>

          <div class="statusbar">
            <div class="time">
              <p>12:00</p>
            </div>
            <div class="status">
              <div class="wifi">
                <img
                  src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//wifi.png"
                  alt=""
                />
              </div>
              <div class="battery">
                <img
                  src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//songpin.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="apps">
            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//calc.png"
                alt=""
                class="calculator"
                width="66px"
              />
              <p>Máy tính</p>
            </div>

            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//clock.png"
                alt=""
                class="clock"
                width="66px"
              />
              <p>Đồng hồ</p>
            </div>

            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//gdondep.png"
                alt=""
                class="gdondep"
                width="66px"
              />
              <p>Dọn dẹp</p>
            </div>

            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//suckhoe.png"
                alt=""
                class="suckhoe"
                width="66px"
              />
              <p>Sức khỏe</p>
            </div>

            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//safari.png"
                alt=""
                class=""
                width="66px"
              />
              <p>Safari</p>
            </div>
          </div>

          <div class="apps-footer">
            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//Messages.png"
                alt=""
                class="message"
                width="66px"
              />
            </div>

            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//app-store.png"
                alt=""
                class="appstore"
                width="66px"
              />
            </div>

            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//safari.png"
                alt=""
                class="safari"
                width="66px"
              />
            </div>

            <div class="app">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//mail.png"
                alt=""
                class="mail"
                width="66px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
         Xem HTML
      </button>
      <button @click="css()" class="btn">
         Xem CSS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s54").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[54].innerHTML;
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

.screen-border {
  width: 100%;
  max-width: 350px;
  height: 680px;
  border-radius: 50px;
  margin: 0 auto;
  box-shadow: 0px 0px 2px 7px #b6b2ab;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.screen {
  width: 94%;
  height: 97%;
  background-color: pink;
  border-radius: 50px;
  background-image: url("https://raw.githubusercontent.com/tiendatmagic/drawiphoneX/master/images//border.jpg");
  background-size: 375px;
  position: relative;
}

.taitho {
  width: 130px;
  height: 30px;
  border-radius: 30px;
  margin: 0 auto;
  background-color: black;
  margin-top: -10px;
}

.statusbar {
  display: flex;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 30px;
  margin-top: -15px;
}

.statusbar img {
  width: 20px;
}

.statusbar .status {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.statusbar .status div {
  margin-left: 10px;
}

.statusbar .status .battery {
  width: 30px;
  height: 12px;
  margin-bottom: 3px;
  border-radius: 100px;
  background-color: green;
  -webkit-box-shadow: 0px 0px 0px 2px #ffffff;
  box-shadow: 0px 0px 0px 2px #ffffff;
  display: flex;
  justify-content: center;
}

.apps {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.apps .app {
  margin: 6px;
  text-align: center;
}

.apps-footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 93%;
  height: 75px;
  background-color: #fff;
  align-items: center;
  margin: 0 auto;
  border-radius: 20px;
  position: absolute;
  bottom: 30px;
  left: 10px;
}

.setvolume {
  width: 10px;
  height: 40px;
  background-color: gray;
  position: absolute;
  top: 85px;
  left: -21px;
  border-radius: 10px 0px 0px 10px;
  cursor: pointer;
}

.volume {
  width: 10px;
  height: 90px;
  background-color: gray;
  position: absolute;
  top: 147px;
  left: -21px;
  border-radius: 10px 0px 0px 10px;
  cursor: pointer;
}

.power {
  width: 12px;
  height: 60px;
  background-color: gray;
  position: absolute;
  top: 150px;
  right: -22px;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
}
</style>
