<template>
  <div class="smainn">
    <br />
    <div id="s80">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="socials">
        <div class="buttonsocial">
          <i class="fas fa-bars"></i>
        </div>
        <div class="social-group">
          <div class="facebook">
            <i class="fab fa-facebook-f"></i>
          </div>

          <div class="twitter">
            <i class="fab fa-twitter"></i>
          </div>

          <div class="instagram">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="youtube">
            <i class="fab fa-youtube"></i>
          </div>

          <div class="github">
            <i class="fab fa-github"></i>
          </div>
          <div class="linkedin">
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>

    <code style="display: none">
      document .getElementsByClassName("buttonsocial")[0]
      .addEventListener("click", () => { for ( i = 0; i >=
      document.getElementsByClassName("btn").length - 1; i++ ) document
      .getElementsByClassName("btn") [i].classList.toggle("active"); });
    </code>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
        <i class="fa fa-eye"></i> Xem HTML
      </button>
      <button @click="js()" class="btn">
        <i class="fa fa-eye"></i> Xem Javascript
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
      var a = document.getElementById("s80").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[80].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[2].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
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

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  position: relative;
  margin: 0 auto;
}

.social-group {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
}
.buttonsocial {
  width: 80px;
  height: 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease-out;
  background-color: #fff;
  box-shadow: 2px 3px 0px 0px #fff, 3px 3px 5px #ceced1;
  z-index: 1;
}
.buttonsocial:hover {
  transform: scale(1.1);
}

.social-group div {
  width: 80px;
  height: 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 0px 0px #fff, 3px 3px 5px #ceced1;
  transition: 0.2s ease-out;
}

.social-group .facebook.active {
  background-color: red;
  transform: translateY(-150%);
  transition-delay: 0.2s;
}
.social-group .facebook:hover {
  background-color: #fff;
  color: red;
}

.social-group .twitter.active {
  background-color: orange;
  transform: translateX(120%) translateY(-70%);
  transition-delay: 0.3s;
}
.social-group .twitter:hover {
  background-color: #fff;
  color: orange;
}

.social-group .instagram.active {
  background-color: yellow;
  transform: translateX(120%) translateY(70%);
  transition-delay: 0.4s;
}
.social-group .instagram:hover {
  background-color: #fff;
  color: yellow;
}
.social-group .youtube.active {
  background-color: blue;
  transform: translateY(150%);
  transition-delay: 0.5s;
}
.social-group .youtube:hover {
  background-color: #fff;
  color: blue;
}
.social-group .github.active {
  background-color: aqua;
  transform: translateX(-120%) translateY(70%);
  transition-delay: 0.6s;
}
.social-group .github:hover {
  background-color: #fff;
  color: aqua;
}
.social-group .linkedin.active {
  background-color: rgb(0, 255, 149);
  transform: translateX(-120%) translateY(-70%);
  transition-delay: 0.7s;
}
.social-group .linkedin:hover {
  background-color: #fff;
  color: rgb(0, 255, 149);
}
</style>
