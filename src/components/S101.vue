<template>
  <div class="smainn">
    <br />
    <div id="s101">
      <link
        data-v-24ce4b33=""
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="addfriend">
        <div class="title">
          <div class="icon">
            <i class="fas fa-user-friends"></i>
          </div>
          <div class="nametitle">
            <span>Lời mời kết bạn</span>
          </div>
          <div class="more" @click="showmore()">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <div class="main">
          <div class="img">
            <img
              src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
              alt=""
            />
          </div>

          <div class="info">
            <div class="name">
              <p>Thu Hải</p>
            </div>
            <div class="button-group">
              <button>Xác nhận</button>
              <button>Xóa</button>
            </div>
          </div>
        </div>
        <div class="showmore">
          <ul>
            <li>
              <div class="icon">
                <i class="fas fa-window-close"></i>
              </div>
              <div class="name">
                <span> Ẩn lời mời kết bạn </span>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fas fa-user-plus"></i>
              </div>
              <div class="name">
                <span> Đi đến Lời mời kết bạn </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <code style="display: none">
      document.getElementsByClassName("more")[0].onclick = () => { document
      .getElementsByClassName("showmore")[0] .classList.toggle("active"); };
    </code>
    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">Xem HTML</button>
      <button @click="js()" class="btn">Xem Javascript</button>
      <button @click="css()" class="btn">Xem CSS</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s101").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[101].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[10].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
    },
    showmore() {
      document.getElementsByClassName("showmore")[0].classList.toggle("active");
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

.addfriend {
  width: 100%;
  max-width: 420px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 1.2px 0px 1.5px rgb(228, 228, 228);
  position: relative;
  margin: 0 auto;
}

.addfriend .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.addfriend .title .icon {
  font-size: 20px;
}

.addfriend .title .nametitle {
  font-size: 18px;
  flex: 1;
  margin-left: 10px;
  font-weight: bold;
}
.addfriend .title .more {
  font-size: 16.5px;
  color: #646464;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

@supports (-webkit-background-clip: text) {
  .addfriend .title .icon {
    color: transparent;
    background-image: linear-gradient(50deg, #1b84f5, #00ffdd);
    -webkit-background-clip: text;
    font-size: 20px;
  }
}

.addfriend .main {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
}

.addfriend .main .img {
  margin-left: 15px;
}

.addfriend .main .img img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.addfriend .main .info {
  margin-left: 15px;
}

.addfriend .main .info div {
  margin: 10px 0px;
}
.addfriend .main .info .name {
  font-size: 18px;
  font-weight: bold;
  word-break: break-word;
}

.addfriend .main .info .button-group button {
  width: 120px;
  height: 45px;
  border-radius: 6px;
  margin: 3px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
}
.addfriend .main .info .button-group button:hover {
  filter: brightness(95%);
}

.addfriend .main .info .button-group button:nth-child(1) {
  background-color: #1877f2;
  color: #f0f0f0;
}
.addfriend .main .info .button-group button:nth-child(2) {
  background-color: #e4e6eb;
  color: #505050;
}

.addfriend .showmore {
  display: none;
}

.addfriend .showmore.active {
  display: block;
  position: absolute;
  top: 60px;
  right: 10px;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 1.2px 0px 1.5px rgb(228, 228, 228), 0 10px 25px #0000001a;
  padding: 10px;
}
.addfriend .showmore li {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  font-size: 17px;
}
.addfriend .showmore li .icon {
  width: 40px;
  height: 40px;
  background-color: #d8dadf;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 17px;
}
.addfriend .showmore li:hover {
  background-color: #f2f2f2;
}
</style>
