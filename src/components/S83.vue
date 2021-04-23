<template>
  <div class="smainn">
    <br />
    <div id="s83">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
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

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
         Xem HTML
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
    html() {
      var a = document.getElementById("s83").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[83].innerHTML;
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

.menu-icon {
  display: block;
  width: 70px;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  margin: 0 auto;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
}

.menu-icon li {
  list-style: none;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 4px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.menu-icon li:hover {
  background-color: #0076fe;
}

.menu-icon li:hover .icon {
  color: #fff;
}

.menu-icon li a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-icon li .icon {
  position: absolute;
  color: #0076fe;
  font-size: 25px;
  z-index: 2;
}

.menu-icon li .title {
  position: absolute;
  top: 5px;
  left: 70px;
  padding: 10px;
  visibility: hidden;
  opacity: 0;
  border-radius: 10px;
  background-color: #fff;
  color: #0076fe;
  font-weight: bold;
  font-size: 17px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-out;
}

.menu-icon li .title::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 10px;
  left: -19px;
  border-left: 10px solid transparent;
  border-right: 10px solid #fff;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
}

.menu-icon li:hover .title {
  visibility: visible;
  opacity: 1;
  left: 90px;
}
</style>
