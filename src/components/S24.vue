<template>
  <div class="smainn">
    <br />
    <div id="s24">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="box">
        <div class="info">
          <div class="img">
            <img
              src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
              alt=""
            />
          </div>
          <div class="info-name">
            <p>Tiến Đạt Magic</p>
            <p>Xem trang cá nhân của bạn</p>
          </div>
        </div>

        <hr />
        <div class="selected">
          <li>
            <a href="###">
              <i class="far fa-comment"></i>
              <span>Đóng góp ý kiến</span>
            </a>
          </li>
          <li>
            <a href="###">
              <i class="fas fa-cog"></i>
              <span> Cài đặt và quyền riêng tư </span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="###">
              <i class="far fa-question-circle"></i>

              <span>Trợ giúp và hỗ trợ</span>
              <i class="fas fa-chevron-right"></i
            ></a>
          </li>
          <li>
            <a href="###">
              <i class="fas fa-sun"></i>

              <span> Hiển thị tùy chọn </span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="###  ">
              <i class="fas fa-power-off"></i>
              <span> Đăng xuất </span>
            </a>
          </li>
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
      var a = document.getElementById("s24").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[24].innerHTML;
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

hr {
  width: 90%;
  height: 2.5px;
  margin: 10px auto;
  background-color: black;
}
.box {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  box-shadow: 0 12px 28px 0 rgb(0 0 0 / 20%), 0 2px 4px 0 rgb(0 0 0 / 10%),
    inset 0 0 0 1px rgb(255 255 255 / 10%);
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  padding: 10px;
}

.info {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
}

.info img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: pink;
}
.info:hover {
  background-color: #f2f2f2;
  border-radius: 15px;
  cursor: pointer;
}

.info-name p:nth-child(1) {
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serifs;
}

.info-name p:nth-child(2) {
  color: rgb(148, 148, 148);
  font-family: Arial, Helvetica, sans-serifs;
}

.selected li {
  list-style: none;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  position: relative;
}

.selected li:hover {
  background-color: #f2f2f2;
  border-radius: 15px;
}

.selected a {
  text-decoration: none;
  font-size: 16px;
  color: #1c1d21;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.selected a i:nth-child(1) {
  margin-right: 30px;
  background-color: #d8dadf;
  padding: 10px;
  border-radius: 50%;
  font-size: 22px;
}

.selected a i:nth-child(3) {
  font-size: 17px;
  position: absolute;
  right: 10px;
}
</style>
