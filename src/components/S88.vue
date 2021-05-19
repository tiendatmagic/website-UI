<template>
  <div class="smainn">
    <br />
    <div id="s88">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="siderbar">
        <ul>
          <li>
            <a href="###"
              ><i class="fad fa-home"></i>
              <span> Home </span>
            </a>
          </li>
          <li>
            <a href="###">
              <i class="fad fa-users sidebar-icon"></i>

              <span> Following </span>
            </a>
          </li>
          <li>
            <a href="###">
              <i class="fal fa-chart-line sidebar-icon"></i>
              <span> Trending </span>
            </a>
          </li>
          <li>
            <a href="###">
              <i class="fal fa-camera-retro sidebar-icon"></i>
              <span> Your photos </span>
            </a>
          </li>
          <li>
            <a href="###">
              <i class="fal fa-music sidebar-icon"></i>
              <span> Playlist </span>
            </a>
          </li>
        </ul>
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
      var a = document.getElementById("s88").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[88].innerHTML;
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

.siderbar {
  width: 100%;
  max-width: 250px;
  font-family: Arial, Helvetica, sans-serif;
}
.siderbar ul li {
  border-radius: 10px;
  padding: 15px;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-out;
}
.siderbar ul li:hover {
  background-color: #7a6ed2;
}
.siderbar ul li a {
  color: #474747;
  text-decoration: none;
}
.siderbar ul li:hover a {
  color: #fff;
}

.siderbar ul li a i {
  margin-right: 10px;
}
</style>
