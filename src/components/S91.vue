<template>
  <div class="smainn">
    <br />
    <div id="s91">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="profile">
        <div class="main">
          <div class="toggle">
            <i class="fas fa-moon"></i><i class="fas fa-sun"></i>
          </div>

          <div class="image">
            <img
              src="
  https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png
  "
              alt=""
            />
          </div>

          <div class="info">
            <h3>Tiến Đạt Magic</h3>
            <p>Front end, UX/UI Designer</p>

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
            </div>
          </div>
        </div>
      </div>
    </div>
    <code style="display: none">
      var dark = 0; document.getElementsByClassName("toggle")[0].onclick = () =>
      { document.getElementsByClassName("profile")[0].classList.toggle("dark");
      if (dark === 1) { document.querySelectorAll(".toggle
      i.fas.fa-moon")[0].style.display = "none"; document.querySelectorAll("
      .toggle i.fas.fa-sun")[0].style.display = "block"; dark = 0; } else {
      document.querySelectorAll(".toggle i.fas.fa-moon")[0].style.display =
      "block"; document.querySelectorAll(" .toggle
      i.fas.fa-sun")[0].style.display = "none"; dark = 1; } };
    </code>
    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">Xem HTML</button
      ><button @click="js()" class="btn">Xem Javascript</button>
      <button @click="css()" class="btn">Xem CSS</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s91").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    js() {
      var c = document.getElementsByTagName("code")[6].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
    },
    css() {
      var b = document.getElementsByTagName("style")[91].innerHTML;
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

.profile {
  width: 100%;
  height: 320px;
  max-width: 250px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  box-shadow: 0 15px 25px #0000001a;
  transition: 0.5s ease-out;
}

.profile.dark {
  background-color: #323640;
}

.profile .image img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
}
.profile .info {
  margin: 10px;
  line-height: 25px;
}
.profile .info h3 {
  color: #008cff;
}

.profile .info p {
  color: #808080;
  font-size: 15px;
}
.profile.profile.dark .info p {
  color: #dadada;
}
.social-group {
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0px;
}

.social-group div {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #dae5ef;
  position: relative;
  cursor: pointer;
  transition: 0.5s ease-out;
}

.profile.dark .social-group div {
  background-color: #3d414d;
}
.social-group div:hover::after {
  transform: scale(1);
}
.social-group div::after {
  content: "";
  background-color: #2d96ec;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: 0.2s ease-out;
}

.social-group div i {
  color: #2d96ec;
  z-index: 2;
}
.toggle i.fas.fa-moon {
  display: none;
}
.social-group div:hover i {
  color: #fff;
}
.toggle {
  width: 30px;
  height: 30px;
  background-color: #dae5ef;
  color: #2d96ec;
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
