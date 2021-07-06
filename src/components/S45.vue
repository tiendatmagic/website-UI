<template>
  <div class="smainn">
    <br />
    <div id="s45">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="box-group">
        <div class="box">
          <div class="title">
            <p>Choose Bank Account</p>
          </div>

          <div class="main">
            <div class="item">
              <div class="icon">
                <i class="fas fa-address-card"></i>
              </div>
              <div class="content">
                <b>Personal Account</b>
                <p>.... _ .... _</p>
                <p>2345</p>
              </div>
              <div class="check">
                <input type="radio" name="bank" id="" />
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <i class="fad fa-address-book"></i>
              </div>
              <div class="content">
                <b>Personal Account</b>
                <p>.... _ .... _</p>
                <p>4567</p>
              </div>
              <div class="check">
                <input type="radio" name="bank" id="" />
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <i class="fas fa-portrait"></i>
              </div>
              <div class="content">
                <b>Personal Account</b>
                <p>.... _ .... _</p>
                <p>8901</p>
              </div>
              <div class="check">
                <input type="radio" name="bank" id="" />
              </div>
            </div>
          </div>
          <div class="button">
            <button>CONTINUE</button>
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
      var a = document.getElementById("s45").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[45].innerHTML;
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

.box {
  width: 100%;
}

.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  width: 100%;
  height: 100px;
}

.item:hover {
  border: 2px solid rgb(0, 195, 255);
  border-radius: 20px;
}

.title {
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  color: rgb(68, 68, 68);
}

.main {
  margin: 20px auto;
}

.main .icon {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 17px;
  font-size: 25px;
}

.main .item:nth-child(1) .icon {
  background-color: #ffbf47;
}

.main .item:nth-child(2) .icon {
  background-color: #12cdd9;
}

.main .item:nth-child(3) .icon {
  background-color: #9471f6;
}

.main .content b {
  font-size: 20px;
  color: rgb(68, 68, 68);
}

.main .content p {
  letter-spacing: 2px;
  font-weight: bold;
  color: rgb(126, 126, 126);
}

.main .check input {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.button button {
  background-color: #525298;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-size: 15px;
  color: #fff;
  outline: none;
  border: none;
  box-shadow: 0 10px 20px -5px #525298;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
