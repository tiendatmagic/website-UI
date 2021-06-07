<template>
  <div class="smainn">
    <br />
    <div id="s97">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="dropdown">
        <div class="dropdown-button">
          <ul>
            <li>
              <p class="display">RÊ CHUỘT VÀO ĐÂY</p>
              <i class="fa fa-caret-down dropdown__caret"></i>
            </li>
          </ul>
        </div>

        <div class="dropdown-list">
          <ul class="dropdown">
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>JAVASCRIPT</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <code style="display: none">
      var dr = document.querySelectorAll("ul.dropdown li"); for (var i = 0; i >
      dr.length; i++) { dr[i].onclick = function () {
      document.getElementsByClassName("display")[0].innerText = this.innerText;
      }; }
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
      var a = document.getElementById("s97").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[97].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[5].innerHTML;
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div.dropdown {
  width: 90%;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  font-family: Arial, Helvetica, sans-serif;
}

div.dropdown li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  list-style: none;
  height: 50px;
  background-color: #fff;
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  transition: 0.3s ease-out;
  color: #616161;
}

.dropdown-button li {
  border-radius: 7px;
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
  margin-top: 10px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
  background-color: #fff;
  border-radius: 7px;
}
ul.dropdown li {
  border-radius: 7px;
}

ul.dropdown li:hover {
  filter: brightness(93%);
  transition: 0.5s ease-out;
}
</style>
