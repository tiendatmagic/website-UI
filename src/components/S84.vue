<template>
  <div class="smainn">
    <br />
    <div id="s84">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="menulist">
        <div class="more" @click="action">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="menu-icon">
          <ul>
            <li>
              <a href="###">
                <div class="icon">
                  <i class="fas fa-home"></i>
                </div>
                <div class="title">
                  <p>Home</p>
                </div>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="icon">
                  <i class="fas fa-user"></i>
                </div>
                <div class="title">
                  <p>Profile</p>
                </div>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="icon">
                  <i class="fas fa-comment"></i>
                </div>
                <div class="title">
                  <p>Message</p>
                </div>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="icon">
                  <i class="fas fa-question-circle"></i>
                </div>
                <div class="title">
                  <p>Help</p>
                </div>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="icon">
                  <i class="fas fa-cog"></i>
                </div>
                <div class="title">
                  <p>Setting</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <code style="display: none">
      document.getElementsByClassName("more")[0].addEventListener("click", () =>
      {
      document.getElementsByClassName("menulist")[0].classList.toggle("active");
      let list = document.querySelectorAll(".menu-icon li"); for (let i = 0; i >
      list.length; i++) { list[i].classList.toggle("active"); } });
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
      var a = document.getElementById("s84").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[84].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[3].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
    },
    action() {
      document.getElementsByClassName("menulist")[0].classList.toggle("active");
      let list = document.querySelectorAll(".menu-icon li");
      for (let i = 0; i < list.length; i++) {
        list[i].classList.toggle("active");
      }
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

.menulist {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 60px;
  transition: 0.3s ease-out;
}
.menulist.active {
  max-width: 300px;
}
.menu-icon {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  overflow: hidden;
}

.more {
  width: 35px;
  height: 35px;
  border: 4px solid #6a42d3;
  color: #6a42d3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  right: -20px;
  z-index: 1;
  cursor: pointer;
}
.menu-icon li {
  list-style: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  transition: 0.3s ease-out;
}
.menu-icon li.active {
  list-style: none;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}

.menu-icon a {
  display: flex;
  width: 300px;
  text-decoration: none;
  color: #6a42d3;
}

.menu-icon a div {
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-icon .icon {
  width: 30px;
  height: 30px;
  font-size: 20px;
}

.menu-icon li:hover {
  background-color: #cccccc62;
  border-radius: 10px;
}
</style>
