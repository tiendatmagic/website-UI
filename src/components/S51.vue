<template>
  <div class="smainn">
    <br />
    <div id="s51">
      <div class="search">
        <input type="text" placeholder="Search" />
        <button>LOOK UP</button>
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
      var a = document.getElementById("s51").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[51].innerHTML;
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

.search {
  width: 100%;
  display: flex;
  justify-content: center;
}

.search input {
  width: 300px;
  height: 40px;
  outline: none;
  border: 0.1px solid #000;
  border-radius: 8px;
  text-indent: 20px;
  font-size: 17px;
  margin-right: 5px;
}

.search button {
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-image: linear-gradient(
    50deg,
    #85abf3,
    #8885f3,
    #b745e1,
    #dc53c8,
    #e557c6
  );
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
