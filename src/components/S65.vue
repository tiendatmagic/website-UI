<template>
  <div class="smainn">
    <br />
    <div id="s65">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="packages">
        <h2>Choose Package</h2>

        <div class="package-group">
          <div class="package">
            <div class="header">
              <div class="left">
                <div class="icon">
                  <i class="fas fa-star"></i>
                </div>
                <div class="title">
                  <span>Simple Package</span>
                </div>
              </div>

              <div class="right">
                <div class="money">
                  <span>Rp 50.000</span>
                </div>
              </div>
            </div>
            <div class="main">
              <span> 14GB Internet </span>
              <span> + 2GB Streaming , </span>
              <span> Active Period 30 days </span>
            </div>
          </div>

          <div class="package">
            <div class="header">
              <div class="left">
                <div class="icon">
                  <i class="fas fa-star"></i>
                </div>
                <div class="title">
                  <span>Pro Package</span>
                </div>
              </div>

              <div class="right">
                <div class="money">
                  <span>Rp 100.000</span>
                </div>
              </div>
            </div>
            <div class="main">
              <span> 20GB Internet </span>
              <span> + 4GB Streaming , </span>
              <span> Active Period 90 days </span>
            </div>
          </div>
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
      var a = document.getElementById("s65").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[53].innerHTML;
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

.package {
  width: 100%;
  max-width: 350px;
  background-color: #252836;
  border-radius: 25px;
  padding: 10px;
  margin: 20px auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: rgb(231, 231, 231);
  font-size: 17px;
  border-bottom: 1px solid rgb(104, 104, 104);
  padding: 10px;
}

.header .left {
  display: flex;
  align-items: center;
}

.header .left .title {
  margin-left: 20px;
}

.header .right {
  display: flex;
  justify-content: flex-end;
}

.icon {
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 15px;
}

.package:nth-child(1) .icon {
  background-color: #22b07d;
}

.package:nth-child(2) .icon {
  background-color: orange;
}

.main {
  padding: 10px;
  color: rgb(99, 99, 99);
  font-weight: 650;
}
</style>
