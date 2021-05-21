<template>
  <div class="smainn">
    <br />
    <div id="s51">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="search">
        <input type="text" placeholder="Search" />
        <button><i class="fa fa-search"></i></button>
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.search {
  display: flex;
}
.search input {
  width: 100%;
  max-width: 400px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 8px;
  text-indent: 20px;
  font-size: 17px;
  margin-right: 15px;
  background-color: #fafafa;
}

.search button {
  width: 45px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #fc8383;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
