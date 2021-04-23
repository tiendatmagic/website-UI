<template>
  <div class="smainn">
    <br />
    <div id="s80">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="socials">
        <div class="buttonsocial" @click="btn">
          <i class="fas fa-bars"></i>
        </div>
        <div class="social-group">
          <div class="bfacebook">
            <i class="fab fa-facebook-f"></i>
          </div>

          <div class="btwitter">
            <i class="fab fa-twitter"></i>
          </div>

          <div class="binstagram">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="byoutube">
            <i class="fab fa-youtube"></i>
          </div>

          <div class="bgithub">
            <i class="fab fa-github"></i>
          </div>
          <div class="blinkedin">
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
         Xem HTML
      </button>
      <button @click="js()" class="btn">
         Xem Javascript
      </button>
      <button @click="css()" class="btn">
         Xem CSS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      document
        .getElementsByClassName("bfacebook")[0]
        .classList.toggle("active");

      document.getElementsByClassName("btwitter")[0].classList.toggle("active");

      document
        .getElementsByClassName("binstagram")[0]
        .classList.toggle("active");

      document.getElementsByClassName("byoutube")[0].classList.toggle("active");

      document.getElementsByClassName("bgithub")[0].classList.toggle("active");

      document
        .getElementsByClassName("blinkedin")[0]
        .classList.toggle("active");
    },
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
  width: 70px;
  height: 70px;
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
  z-index: 2;
}
.buttonsocial:hover {
  transform: scale(1.1);
}

.social-group div {
  width: 70px;
  height: 70px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0px 0px 0px 0px #fff, 3px 3px 5px #ceced1;
  transition: 0.3s ease-out;
}

.social-group .bfacebook.active {
  background-color: #3c5996;
  transform: translateY(-150%);
}
.social-group .bfacebook:hover {
  background-color: #fff;
  color: #3c5996;
}

.social-group .btwitter.active {
  background-color: #47c0f1;
  transform: translateX(120%) translateY(-70%);
  transition-delay: 0.1s;
}
.social-group .btwitter:hover {
  background-color: #fff;
  color: #47c0f1;
}

.social-group .binstagram.active {
  background-color: #df306a;
  transform: translateX(120%) translateY(70%);
  transition-delay: 0.2s;
}
.social-group .binstagram:hover {
  background-color: #fff;
  color: #df306a;
}
.social-group .byoutube.active {
  background-color: #e0453c;
  transform: translateY(150%);
  transition-delay: 0.3s;
}
.social-group .byoutube:hover {
  background-color: #fff;
  color: #e0453c;
}
.social-group .bgithub.active {
  background-color: #343334;
  transform: translateX(-120%) translateY(70%);
  transition-delay: 0.4s;
}
.social-group .bgithub:hover {
  background-color: #fff;
  color: #343334;
}
.social-group .blinkedin.active {
  background-color: #0a66c2;
  transform: translateX(-120%) translateY(-70%);
  transition-delay: 0.5s;
}
.social-group .blinkedin:hover {
  background-color: #fff;
  color: #0a66c2;
}
</style>
