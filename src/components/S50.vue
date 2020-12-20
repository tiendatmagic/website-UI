<template>
  <div class="smainn">
    <br />
    <div id="s50">

      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <div class="img">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />
            </div>
          </div>

          <div class="card-info">
            <div class="name">
              <p>Tiến Đạt Magic</p>
            </div>
            <div class="datetime">
              <p>22/11/2020</p>
            </div>
          </div>

          <div class="card-money">
            <div class="money">
              <p>$200</p>
            </div>
            <div class="more">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="img">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />
            </div>
          </div>

          <div class="card-info">
            <div class="name">
              <p>Tiến Đạt Magic</p>
            </div>
            <div class="time">
              <p>22/11/2020</p>
            </div>
          </div>

          <div class="card-money">
            <div class="money">
              <p>$500</p>
            </div>
            <div class="more">
              <i class="fas fa-arrow-right"></i>
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
      var a = document.getElementById("s50").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[50].innerHTML;
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

.card-group {
  display: flex;
  justify-content: space-evenly;
}

.card {
  width: 180px;

  border-radius: 20px;
  padding: 20px;
}

.card:nth-child(1) {
  background-color: rgb(165, 230, 235);
}

.card:nth-child(2) {
  background-color: rgb(235, 165, 200);
}

.card-header img {
  width: 60px;
  height: 60px;
  border-radius: 30%;
}

.card-info {
  margin-top: 10px;
}

.card-info .name {
  color: #000;
  font-weight: 800;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card-info .datetime {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.747);
}

.card-money {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

.card-money .money {
  font-size: 25px;
  font-weight: bold;
}

.card-money .more {
  cursor: pointer;
}
</style>
