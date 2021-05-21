<template>
  <div class="smainn">
    <br />
    <div id="s53">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="profilecard">
        <div class="header">
          <div class="img">
            <img
              src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
              class="image"
              alt=""
            />
          </div>

          <div class="social">
            <div class="buttons">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="buttons">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="buttons">
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="name">
            <b>Tiến Đạt Magic</b>
          </div>
          <div class="address">
            <p>Nha Trang, Khánh Hòa</p>
          </div>

          <div class="info">
            <p>Master front end 😂</p>
          </div>
        </div>

        <div class="footer">
          <div class="button-group">
            <button>Message</button>
            <button>Following</button>
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
      var a = document.getElementById("s53").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[53].innerHTML;
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

.profilecard {
  padding: 10px;
  background-image: linear-gradient(45deg, #7b00e0, #ae31d9);
  box-shadow: 0px 1px 20px 0px rgb(164, 7, 255);
  font-family: Arial, Helvetica, sans-serif;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  transition: 0.5s ease-out;
  margin: 0 auto;
  display: block;
}

.profilecard:hover {
  width: 300px;
  height: 400px;
  max-width: 300px;
  border-radius: 8px;
}

.profilecard:hover .header .social,
.profilecard:hover .main,
.profilecard:hover .footer {
  display: block;
}

.header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
}

.header img {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid #fff;
}

.header img.active {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0px;
  z-index: 10;
  overflow: hidden;
}

.header .social {
  position: absolute;
  top: -5px;
  left: 0px;
  display: none;

  transition: 0.5s ease-out;
  z-index: 1;
}

.header .social .buttons i {
  padding: 9px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px 5px 0px;
  font-size: 14px;
  background-color: #fff;
  color: #7b00e0;
  cursor: pointer;
  position: relative;
  left: 0px;
  transition: 0.5s ease-out;
  transition-delay: 1s;
}

.header .social .buttons:nth-child(1) i:start {
  position: relative;
  left: 30px;
  transition: 0.5s ease-out;
  transition-delay: 0.5s;
}

.header .social .buttons:hover {
  transform: scale(0.92);
  transition: 0.2s ease-out;
}

.main {
  color: #fff;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  display: none;
  transition: 0.5s ease-out;
}

.main .name {
  font-size: 25px;
}

.main .info {
  margin-top: 20px;
}

.footer {
  display: none;
  transition: 0.5s ease-out;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button-group button {
  width: 49%;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 17px;
  color: #000;
  cursor: pointer;
  transition: 0.2s ease-out;
}

.button-group button:hover {
  transform: scale(0.95);
  transition: 0.2s ease-out;
}
</style>
