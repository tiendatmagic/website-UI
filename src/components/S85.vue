<template>
  <div class="smainn">
    <br />
    <div id="s85">
      <div class="personal-information">
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
        />
        <div class="imgprofile" @click="action">
          <img
            src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
            alt=""
          />
        </div>
        <div class="menu">
          <div class="name">
            <h3>
              Someone Famous

              <br />
              <span> Website Designer </span>
            </h3>
          </div>
          <ul>
            <li>
              <a href="###">
                <i class="fas fa-user"></i>
                <span> My Profile </span>
              </a>
            </li>
            <li>
              <a href="###">
                <i class="fas fa-user-md"></i>
                <span> Edit Profile </span>
              </a>
            </li>
            <li>
              <a href="###">
                <i class="fas fa-inbox"></i>
                <span> Inbox </span>
              </a>
            </li>
            <li>
              <a href="###">
                <i class="fas fa-cog"></i>
                <span> Setting </span>
              </a>
            </li>
            <li>
              <a href="###">
                <i class="fas fa-question-circle"></i>
                <span> Help </span>
              </a>
            </li>
            <li>
              <a href="###">
                <i class="fas fa-sign-out-alt"></i>
                <span> Log out </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <code style="display: none">
      document.getElementsByClassName("imgprofile")[0]
      .addEventListener("click", () => {
      document.getElementsByClassName("menu")[0].classList.toggle("active"); });
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
      var a = document.getElementById("s85").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[85].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[4].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
    },
    action() {
      document.getElementsByClassName("menu")[0].classList.toggle("active");
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

.personal-information {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}
.imgprofile {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  height: 100px;
}
.imgprofile img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.menu {
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  position: absolute;
  width: 100%;
  top: 130px;
  visibility: hidden;
  opacity: 0;
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.425);
  z-index: 3;
  transition: 0.35s ease-out;
}
.menu.active {
  top: 100px;
  visibility: visible;
  opacity: 1;
}

.menu .name {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu::after {
  content: "";
  position: absolute;
  top: -12px;
  right: 20px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #fff;
}
.menu h3 {
  text-align: center;
  color: #6a6464;
}
.menu span {
  color: #cacaca;
  font-size: 15px;
}
.menu li {
  list-style: none;
  font-size: 18px;
  padding: 12px;
  border-top: 0.1px solid #d1d1d1b4;
  border-bottom: 0.1px solid #d1d1d1b4;
}
.menu li:hover i {
  color: #6e6e6e;
}
.menu li:hover span {
  color: #ff0095;
}

.menu li a {
  text-decoration: none;
  display: flex;
  align-items: center;
}
.menu li i {
  color: #aaaaaa;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu li span {
  color: #5a5a5a;
  font-weight: bold;
  margin-left: 10px;
}
</style>
