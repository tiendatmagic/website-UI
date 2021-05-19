<template>
  <div class="smainn">
    <br />
    <div id="s90">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="user">
        <div class="info">
          <div class="img">
            <img
              src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
              alt=""
            />
          </div>
          <div class="infouser">
            <p>Tiến Đạt Magic</p>
            <li>
              <div class="icon">
                <i class="fas fa-user-friends"></i>
              </div>
              <div class="infofriend">
                <span>
                  4 bạn chung bao gồm

                  <a href="###">
                    <b> Văn Cảnh </b>
                  </a>
                  và
                  <a href="###">
                    <b> Phú Hồng </b>
                  </a>
                </span>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="infoschool">
                <span>
                  Học Công nghệ Thông Tin tại

                  <a href="###">
                    <b>
                      <b> Trường Cao Đẳng Kỹ Thuật Công Nghệ Nha Trang </b>
                    </b>
                  </a>
                </span>
              </div>
            </li>
          </div>
        </div>
        <div class="option">
          <button class="message">
            <i class="fas fa-comment-dots"></i>

            <span> Nhắn tin </span>
          </button>
          <button class="addfriend">
            <i class="fas fa-user-plus"></i>
            <span> Thêm bạn bè </span>
          </button>

          <button class="more">
            <i class="far fa-ellipsis-h"></i>
          </button>
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
      var a = document.getElementById("s90").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[90].innerHTML;
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
  width: 100%;
  max-width: 400px;
  padding: 15px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 10px 25px #00000033;
}
.info {
  display: flex;
  justify-content: center;
  transition: 0.2s ease-out;
}
.info .img {
  flex: 1;
}
.info .img img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
}

.info .infouser {
  flex: 2;
  padding: 10px;
}
.info .infouser p {
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 0.7px;
}
.info .infouser li {
  list-style: none;
  margin: 15px 0px;
  display: flex;
  line-height: 20px;
  font-size: 15.5px;
}
.info .infouser li .icon {
  margin-right: 10px;
}
.info .infouser li i {
  color: #616771;
  margin-right: 0px;
}

.info .infouser li a {
  color: #3a3a3a;
  text-decoration: none;
}
.info .infouser li a:hover {
  text-decoration: underline;
}

.option {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.option button {
  padding: 10px 25px;
  margin: 3px;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #e4e6eb;
}

.option button:hover {
  filter: brightness(90%);
}
.option button.message {
  background-color: #1877f2;
  color: #fff;
}
.option button.more {
  padding: 10px 20px;
}
.option button i {
  font-size: 17px;
}
.option button span {
  padding-left: 5px;
}

@media only screen and (max-width: 335px) {
  .info {
    flex-direction: column;
  }
}
</style>
