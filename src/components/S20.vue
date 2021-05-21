<template>
  <div class="smainn">
    <br />
    <div id="s20">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="info">
        <div class="title-header">
          <div class="title">
            <p>Profile</p>
          </div>
        </div>

        <div class="content">
          <div class="img">
            <img
              src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
              alt=""
            />
          </div>
          <div class="name-email">
            <p>Tiến Đạt Magic</p>
            <p>tiendatmagic8@gmail.com</p>
          </div>
          <div class="infos">
            <div class="infos-l">
              <p>Language</p>
              <p>English level</p>
              <p>Course completed</p>
              <p>Last openid</p>
              <p>Registered</p>
            </div>
            <div class="infos-r">
              <p>English</p>
              <p>Intermediate</p>
              <p>73%</p>
              <p>Nov 26, 2019</p>
              <p>Jul 18, 2019</p>
            </div>
          </div>

          <div class="button">
            <button>SEE PROGRESS</button>
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
      var a = document.getElementById("s20").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[20].innerHTML;
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

.info {
  width: 90%;
  height: 550px;
  background-image: url(../img/theme.png);
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 10px 28px #8880df;
  background-size: 100% 100%;
}

.title-header {
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
}

.img {
  text-align: center;
}

.img img {
  width: 100px;
  height: 100px;
  box-shadow: 0 10px 20px #aca7e5;
  border-radius: 10px;
  background-color: pink;
}

.name-email {
  text-align: center;
  margin-top: 20px;
  word-wrap: break-word;
}

.name-email p:nth-child(1) {
  color: rgb(87, 85, 85);
  font-size: 20px;
  font-weight: 600;
}

.name-email p:nth-child(2) {
  color: rgb(121, 121, 121);
  font-weight: 300;
}

.infos {
  display: flex;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
}

.info .infos-l {
  color: #444250cc;
  font-weight: 700;
}

.info .infos-r {
  text-align: left;
  color: #161336;
  font-weight: bold;
}

.infos div {
  width: 100%;
  flex: 50%;
}

.infos p {
  height: 50px;
  display: flex;
  align-items: center;
}

.button {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.button button {
  width: 60%;
  border-radius: 10px;
  outline: none;
  border: none;
  height: 50px;
  background-color: #584dd0;
  color: #fff;
  cursor: pointer;
  transform: scale(1);
  cursor: pointer;
  box-shadow: 0 10px 20px -5px #584dd0;
  transition: 0.25s ease-out;
}

.button button:hover {
  transform: scale(1.08);
  transition: 0.5 ease-out;
}
</style>
