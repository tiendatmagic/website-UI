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
            Ngày mai chẳng biết ra sao nữa. Mà có ra sao cũng chẳng sao
          </div>
          <div class="card-next">
            <div class="icon-next">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="card-item">
          <div class="card-img">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="card-title">
            <p>Tiến Đạt</p>
            <p>Magic</p>
          </div>
          <div class="card-content">
            Ngày mai chẳng biết ra sao nữa. Mà có ra sao cũng chẳng sao
          </div>
          <div class="card-next">
            <div class="icon-next">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="card-item">
          <div class="card-img">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="card-title">
            <p>Tiến Đạt</p>
            <p>Magic</p>
          </div>
          <div class="card-content">
            Ngày mai chẳng biết ra sao nữa. Mà có ra sao cũng chẳng sao
          </div>
          <div class="card-next">
            <div class="icon-next">
              <i class="fas fa-arrow-right"></i>
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

h1 {
  text-align: center;
  color: purple;
}
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-item {
  max-width: 180px;
  border-radius: 15px;
  background-color: #fff;
  margin: 10px;
  cursor: pointer;
  position: relative;
  bottom: 0px;
  transition: 0.2s ease-out;
}

.card-item:hover {
  box-shadow: 0 5px 20px rgba(116, 116, 116, 0.226);
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
  margin-top: 30px;
  margin-left: 30px;
  position: relative;
  font-size: 20px;
}

.card-img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 6px;
  background-color: currentColor;
  font-size: 20px;
  opacity: 0.2;
}

.card-item:nth-child(1) .card-img,
.card-item:nth-child(1) .icon-next {
  color: #800080ce;
}
.card-item:nth-child(2) .card-img,
.card-item:nth-child(2) .icon-next {
  color: #36d7f3ce;
}
.card-item:nth-child(3) .card-img,
.card-item:nth-child(3) .icon-next {
  color: #ff8724ce;
}
.card-title {
  color: #000;
  font-weight: bold;
  font-size: 22px;
  margin-left: 30px;
  margin-top: 10px;
}

.card-content {
  margin: 10px 30px;
  color: #333;
  font-size: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-next {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 22px;
}
</style>
