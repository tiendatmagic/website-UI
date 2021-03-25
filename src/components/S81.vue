<template>
  <div class="smainn">
    <br />
    <div id="s81">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="sidebar">
        <ul>
          <li>
            <div class="icon">
              <i class="fas fa-home"></i>
            </div>
            <div class="icon2">
              <i class="fas fa-home"></i>
            </div>
            <div class="name">
              <a href="###">Home</a>
            </div>
            <div class="name2">
              <a href="###">Home</a>
            </div>
            <div class="dots"></div>
          </li>

          <li>
            <div class="icon">
              <i class="far fa-address-card"></i>
            </div>
            <div class="icon2">
              <i class="far fa-address-card"></i>
            </div>
            <div class="name">
              <a href="###">About</a>
            </div>
            <div class="name2">
              <a href="###">About</a>
            </div>
            <div class="dots"></div>
          </li>

          <li>
            <div class="icon">
              <i class="fas fa-cogs"></i>
            </div>
            <div class="icon2">
              <i class="fas fa-cogs"></i>
            </div>
            <div class="name">
              <a href="###">Services</a>
            </div>
            <div class="name2">
              <a href="###">Services</a>
            </div>
            <div class="dots"></div>
          </li>

          <li>
            <div class="icon">
              <i class="fas fa-image"></i>
            </div>
            <div class="icon2">
              <i class="fas fa-image"></i>
            </div>
            <div class="name">
              <a href="###">Portfolio</a>
            </div>
            <div class="name2">
              <a href="###">Portfolio</a>
            </div>
            <div class="dots"></div>
          </li>

          <li>
            <div class="icon">
              <i class="fas fa-users"></i>
            </div>
            <div class="icon2">
              <i class="fas fa-users"></i>
            </div>
            <div class="name">
              <a href="###">Team</a>
            </div>
            <div class="name2">
              <a href="###">Team</a>
            </div>
            <div class="dots"></div>
          </li>
          <li>
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="icon2">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="name">
              <a href="###">Contact</a>
            </div>
            <div class="name2">
              <a href="###">Contact</a>
            </div>
            <div class="dots"></div>
          </li>
        </ul>
      </div>
    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
        <i class="fa fa-eye"></i> Xem HTML
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
      var a = document.getElementById("s81").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[81].innerHTML;
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

.sidebar {
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 20px;
  padding: 0px 30px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.sidebar ul li {
  list-style: none;
  height: 40px;
  margin: 15px 0px;
  position: relative;
  font-weight: bold;
  overflow: hidden;
}

.sidebar ul li a {
  text-decoration: none;
  font-size: 20px;
}

.sidebar .icon {
  position: absolute;
  top: 5px;
  left: 0px;
  color: #363333;
  font-size: 28px;
  transition: 0.3s ease-in-out;
}

.sidebar .icon2 {
  position: absolute;
  top: 50px;
  left: 0px;
  color: #3f93ea;
  font-size: 28px;
  transition: 0.3s ease-in-out;
}

.sidebar .name {
  position: absolute;
  top: 10px;
  left: 50px;
  transition: 0.3s ease-in-out;
}

.sidebar .name a {
  color: #363333;
}

.sidebar .name2 a {
  color: #3f93ea;
}

.sidebar .name2 {
  position: absolute;
  top: -50px;
  left: 50px;
  transition: 0.3s ease-in-out;
}

.sidebar .dots {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e3e2e3;
  position: absolute;
  top: 15px;
  right: 0px;
  transition: 0.3s ease-in-out;
}

.sidebar ul li:hover .icon {
  top: -50px;
  left: 0px;
}

.sidebar ul li:hover .icon2 {
  top: 5px;
  left: 0px;
}

.sidebar ul li:hover .name {
  top: 50px;
  left: 50px;
}

.sidebar ul li:hover .name2 {
  top: 10px;
  left: 50px;
}

.sidebar ul li:hover .dots {
  background-color: #3f93ea;
}
</style>
