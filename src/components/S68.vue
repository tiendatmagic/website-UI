<template>
  <div class="smainn">
    <br />
    <div id="s68">
      <div class="table">
        <div class="header">
          <p>$</p>
          <p>19</p>
        </div>

        <div class="package">
          <p>BASIC</p>
        </div>

        <div class="info">
          <p>
            <b>20GB</b>
            STORAGE
          </p>
          <div class="line"></div>
          <p>
            <b>4</b>
            EMAIL ADDRESS
          </p>
          <div class="line"></div>
          <p>
            <b>1</b>
            DOMAIN NAME
          </p>
          <div class="line"></div>
          <p>
            <b>24H</b>
            SUPPORT
          </p>
        </div>

        <div class="button">
          <button>ORDER NOW</button>
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
      var a = document.getElementById("s68").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[68].innerHTML;
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

.table {
  width: 100%;
  max-width: 320px;
  height: 350px;
  margin: 0 auto;
  background-color: #f2f1f2;
}

.header {
  height: 30%;
  background-color: #227abd;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.header p:nth-child(1) {
  font-size: 25px;
}

.header p:nth-child(2) {
  font-size: 40px;
}

.package {
  width: 80%;
  height: 35px;

  background-image: linear-gradient(40deg, #3190dc, #9c66c1);
  color: rgb(231, 231, 231);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
}

.info {
  text-align: center;
  line-height: 35px;
  font-size: 18px;
  height: 40%;
}

.info b {
  color: #646c6f;
}

.info p {
  color: #627990;
}

.line {
  border-bottom: 1px solid #62799038;
  width: 50%;
  margin: 0 auto;
}

.button {
  text-align: center;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button button {
  width: 80%;
  height: 35px;
  border: 2px solid #608dc4;
  color: #608dc4;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-out;
}

.button button:hover {
  border-radius: 20px;
  background-color: #608dc4;
  color: #fff;
  font-weight: bold;
}
</style>
