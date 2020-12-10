<template>
  <div class="smainn">
    <br />
    <div id="s19">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <h1>Danh sách sản phẩm</h1>
      <div class="card">
        <div class="card-item">
          <div class="card-img">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="card-title">
            <p>Tiến Đạt</p>
            <p>Magic</p>
          </div>
          <div class="card-content">
            <p>
              tiến đạt magic tiến đạt magic tiến đạt magic tiến đạt magic tiến
              đạt magic
            </p>
          </div>
          <div class="card-next">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div class="card-item">
          <div class="card-img">
            <i class="fas fa-ice-cream"></i>
          </div>
          <div class="card-title">
            <p>Tiến Đạt</p>
            <p>Magic</p>
          </div>
          <div class="card-content">
            <p>
              tiến đạt magic tiến đạt magic tiến đạt magic tiến đạt magic tiến
              đạt magic
            </p>
          </div>
          <div class="card-next">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div class="card-item">
          <div class="card-img">
            <i class="fas fa-volleyball-ball"></i>
          </div>
          <div class="card-title">
            <p>Tiến Đạt</p>
            <p>Magic</p>
          </div>
          <div class="card-content">
            <p>
              tiến đạt magic tiến đạt magic tiến đạt magic tiến đạt magic tiến
              đạt magic
            </p>
          </div>
          <div class="card-next">
            <i class="fas fa-arrow-right"></i>
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
      var a = document.getElementById("s19").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[19].innerHTML;
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

body {
  background-color: #f2f2f2;
}

h1 {
  text-align: center;
  color: purple;
}
.card {
  display: flex;
  flex-wrap: wrap;
}

.card-item {
  width: 180px;
  height: 300px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  margin: 10px;
  position: relative;
  cursor: pointer;
  position: relative;
  bottom: 0px;
  transition: 0.2s ease-out;
}

.card-item:hover {
  box-shadow: 0 10px 30px rgba(116, 116, 116, 0.226);
  position: relative;
  bottom: 5px;
  transition: 0.2s ease-out;
}

.card-img {
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 30px;
  margin-left: 30px;
}
.card-item:nth-child(1) .card-img {
  background-color: rgba(128, 0, 128, 0.308);
}

.card-item:nth-child(2) .card-img {
  background-color: rgba(54, 215, 243, 0.308);
}

.card-item:nth-child(3) .card-img {
  background-color: rgba(255, 135, 36, 0.308);
}

.card-item:nth-child(1) i {
  font-size: 20px;
  color: rgba(128, 0, 128, 0.808);
}
.card-item:nth-child(2) i {
  font-size: 20px;
  color: rgba(54, 215, 243, 0.808);
}
.card-item:nth-child(3) i {
  font-size: 20px;
  color: rgba(255, 135, 36, 0.808);
}


.card-title {
  color: #000;
  font-weight: bold;
  font-size: 22px;
  margin-left: 30px;
  margin-top: 10px;
}

.card-content {
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
}

.card-next {
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  right: 0px;
  color: rgb(24, 163, 206);
}
</style>
