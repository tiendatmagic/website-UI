<template>
  <div class="smainn">
    <br />
    <div id="s87">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="list-box">
        <div class="box">
          <div class="title">
            <div class="name">
              <b> Đồng bộ dấu trang </b>
            </div>
            <div class="icon">
              <i class="far fa-star"></i>
            </div>
          </div>
          <div class="main">
            <div class="info">
              Đồng bộ các trang bạn đã đánh dấu từ trình duyệt khác
            </div>
            <button>Đồng bộ</button>
          </div>
        </div>

        <div class="box">
          <div class="title">
            <div class="name">
              <b> Trò chuyện chat </b>
            </div>
            <div class="icon">
              <i class="fas fa-comment-dots"></i>
            </div>
          </div>
          <div class="main">
            <div class="info">
              Trò chuyện với bạn bè ngay trên thanh công cụ
            </div>

            <div class="social-group">
              <div class="facebook">
                <i class="fab fa-facebook-f"></i>
              </div>

              <div class="google">
                <i class="fab fa-google"></i>
              </div>

              <div class="instagram">
                <i class="fab fa-instagram"></i>
              </div>
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
      var a = document.getElementById("s87").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[87].innerHTML;
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

.list-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.box {
  width: 100%;
  max-width: 325px;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 1px 1px 20px 1px rgb(0 0 0 / 15%);
  margin: 10px;
}

.title {
  display: flex;
}

.title .name {
  flex: 3;
  display: flex;
  color: #464545;
  font-size: 26px;
}
.title .icon {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  color: #bbe3c5;
}
.title .icon {
  font-size: 37px;
}
.main {
  margin-top: 40px;
  letter-spacing: 0.6px;
  color: #202020;
}
.main button {
  padding: 9px;
  display: block;
  width: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #42a059;
  color: #f5f5f5;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
}

.social-group {
  display: flex;
  justify-content: space-evenly;
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  display: flex;
}

.social-group div {
  background-color: #ececec;
  width: 42px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
}

.social-group div:nth-child(1) {
  color: #3b5999;
}
.social-group div:nth-child(2) {
  color: red;
}
.social-group div:nth-child(3) {
  color: #ff1493;
}
</style>
