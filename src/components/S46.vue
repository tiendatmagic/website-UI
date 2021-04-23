<template>
  <div class="smainn">
    <br />
    <div id="s46">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="package-group">
        <div class="package">
          <div class="header">
            <div class="logo">
              <i class="fas fa-star"></i>
            </div>
            <div class="title">
              <b>Simple Package</b>
              <p>Rp 50.0000</p>
            </div>
          </div>

          <div class="main">
            <div class="selectedcheck">
              <input type="checkbox" checked name="package" /> 14 Gb Internet
            </div>

            <div class="selectedcheck">
              <input type="checkbox" checked name="package" /> 15 Gb Internet
            </div>

            <div class="selectedcheck">
              <input type="checkbox" checked name="package" /> 16 Gb Internet
            </div>
          </div>

          <div class="button">
            <button>Selected</button>
          </div>
        </div>
        <div class="package package-active">
          <div class="circle">
            <i class="fas fa-check"></i>
          </div>

          <div class="header">
            <div class="logo">
              <i class="fas fa-star"></i>
            </div>
            <div class="title">
              <b>Pro Package</b>
              <p>Rp 100.0000</p>
            </div>
          </div>

          <div class="main">
            <div class="selectedcheck">
              <input type="checkbox" checked name="package" /> 14 Gb Internet
            </div>

            <div class="selectedcheck">
              <input type="checkbox" checked name="package" /> 15 Gb Internet
            </div>

            <div class="selectedcheck">
              <input type="checkbox" checked name="package" /> 16 Gb Internet
            </div>
          </div>

          <div class="button">
            <button>Selected</button>
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
      var a = document.getElementById("s46").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[46].innerHTML;
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

.package-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.package {
  width: 100%;
  max-width: 350px;
  position: relative;
  padding: 10px;
  margin: 5px;
  border: 2px solid blue;
  border-radius: 20px;
  border: 2px solid rgb(173, 173, 173);
}

.package-active {
  border: 3px solid blue;
}

.circle {
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(71, 71, 255);
  color: #fff;
  border-radius: 50%;
}

.header {
  display: flex;
  align-items: center;
}

.header .logo {
  padding: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 185, 231);
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 10px;
  color: #fff;
}

.header:nth-child(2) .logo {
  background-color: rgb(255, 149, 9);
}

.title b {
  font-size: 20px;
}

.main {
  margin: 20px;
  line-height: 40px;
  font-size: 20px;
}

.button button {
  width: 100%;
  height: 40px;
  background-color: rgb(75, 75, 255);
  border-radius: 30px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  font-size: 17px;
}

.selectedcheck {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.selectedcheck input {
  width: 20px;
  height: 20px;
}
</style>
