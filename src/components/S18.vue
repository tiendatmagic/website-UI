<template>
  <div class="smainn">
    <br />
    <div id="s18">



  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" />
  <div class="dropdown">
    <div class="dropdown-button">
      <ul>
        <li>
          <p>Rê chuột vào đây</p>

          <i class="fa fa-caret-down dropdown__caret"></i>
        </li>
      </ul>
    </div>

    <div class="dropdown-list">
      <ul class="dropdown">
        <li class="triangle">
          <p>HTML</p>
          <i class="fab fa-html5"></i>
        </li>
        <li>
          <p>CSS</p>
          <i class="fab fa-css3-alt"></i>
        </li>
        <li>
          <p>JAVASCRIPT</p>
          <i class="fab fa-js-square"></i>
        </li>
      </ul>
    </div>
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
      var a = document.getElementById("s18").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
    },
    css() {
      var b = document.getElementsByTagName("style")[18].innerHTML;
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

    div.dropdown {
      width: 90%;
      margin: 0 auto;
      position: relative;
    }

    div.dropdown li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      list-style: none;
      height: 58px;
      background-color: hotpink;
      width: 100%;
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      padding-left: 30px;
      padding-right: 30px;
      align-items: center;
      transition: 0.3s ease-out;
      color: #fff;
    }

    .dropdown-button li {
      border-radius: 10px;
    }

    div.dropdown:hover div.dropdown-list {
      display: block;
    }

    div.dropdown-list {
      display: none;
      position: absolute;
      right: 0px;
      width: 90%;
      z-index: 1;
    }

    ul.dropdown {
      width: 100%;
      filter: brightness(100%);
    }

    ul.dropdown li:nth-child(1) {
      border-radius: 10px 10px 0px 0px;
    }

    ul.dropdown li:nth-last-child(1) {
      border-radius: 0px 0px 10px 10px;
    }

    ul.dropdown li:hover {
      filter: brightness(85%);
      transition: 1s ease-out;
    }

    ul.dropdown i {
      font-size: 30px;
    }

    li.triangle {
      margin-top: 30px;
      position: relative;
    }

    li.triangle::before {
      content: "";
      position: absolute;
      top: -40px;
      left: 30px;
      width: 0px;
      height: 0px;
      background-color: transparent;
      border-top: 20px solid transparent;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid hotpink;
    }


</style>
