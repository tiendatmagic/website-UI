<template>
  <div class="smainn">
    <br />
    <div id="s100">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="searchh">
        <div class="icon" @click="long()"><i class="fas fa-search"></i></div>
        <div class="input">
          <input
            type="text"
            name=""
            id="inputsearch"
            placeholder="Search"
          /><span class="clear" @click="clear()"
            ><i class="fas fa-times"></i>
          </span>
        </div>
      </div>
    </div>
    <code style="display: none">
      document.getElementsByClassName("icon")[0].onclick = function () {
      document.getElementsByClassName("search")[0].classList.toggle("active");
      }; document.getElementsByClassName("clear")[0].onclick = function () {
      document.getElementById("inputsearch").value = ""; };
    </code>
    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">Xem HTML</button>
      <button @click="js()" class="btn">Xem Javascript</button>
      <button @click="css()" class="btn">Xem CSS</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s100").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[100].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[9].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
    },
    long() {
      document.getElementsByClassName("searchh")[0].classList.toggle("active");
    },
    clear() {
      document.getElementById("inputsearch").value = "";
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

.searchh {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.03);
  transition: 0.5s ease;
}
.searchh.active {
  width: 100%;
  max-width: 360px;
}

.searchh .icon {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #015aff;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
}
.searchh .input {
  display: none;
  padding-right: 50px;
}
.searchh.active .input {
  display: flex;
  width: 100%;
  height: 100%;
  padding-right: 50px;
}
.searchh .input input {
  border: none;
  outline: none;
  font-size: 20px;
}
.searchh .clear {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
}
</style>
