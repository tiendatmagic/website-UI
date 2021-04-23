<template>
  <div class="smainn">
    <br />
    <div id="s66">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="user">
        <div class="left">
          <div class="img">
            <img
              src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
              alt=""
            />
          </div>

          <div class="info">
            <div class="name">
              <p>Tiến Đạt Magic</p>
            </div>
            <div class="tel">
              <p>0901980543</p>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="icon">
            <i class="fas fa-user"></i>
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
      var a = document.getElementById("s66").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[66].innerHTML;
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

.user {
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #252836;
  padding: 20px;
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
}

.user .left {
  display: flex;
}

.left .info {
  margin-left: 30px;
}

.info .name {
  font-size: 18px;
  color: #fff;
}

.info .tel {
  font-size: 16.5px;
  letter-spacing: 2px;
  color: rgb(194, 194, 194);
}

.img {
  width: 40px;
  height: 40px;
}

.img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.icon {
  width: 40px;
  height: 40px;
  background-color: #2f3142;
  border-radius: 15px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
