<template>
  <div class="smainn">
    <br />
    <div id="s31">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="box">
        <div class="box-item">
          <div class="item">
            <div class="items">
              <div class="itemss">
                <b>VISA</b>
                <p>1234 5678 9012 3456</p>
              </div>
            </div>
            <div class="items">
              <i class="fas fa-plus"></i>
            </div>
          </div>
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
      var a = document.getElementById("s31").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[31].innerHTML;
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

.box {
  display: flex;
  justify-content: center;
}

.box-item {
  width: 100%;
  height: 200px;
  border-radius: 60px 0px 60px 0px;
  background-image: linear-gradient(
    rgba(255, 0, 255, 0.705),
    rgb(252, 5, 128)
  );
  overflow: hidden;
}

.item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.itemss b {
  background-color: gold;
  display: inline-block;
  font-weight: bold;
  font-size: 30px;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

.itemss p {
  margin-top: 10px;
  font-size: 17px;
  letter-spacing: 2px;
  color: #fff;
  font-size: 22px;
}

.items:nth-child(2) i {
  background-color: rgb(3, 101, 139);
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 33px;
  cursor: pointer;
  color: #fff;
}
</style>
