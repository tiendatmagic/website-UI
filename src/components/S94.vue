<template>
  <div class="smainn">
    <br />
    <div id="s94">
      <div class="search">
        <input type="text" placeholder="Find" />
        <button>Search</button>
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
      var a = document.getElementById("s94").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[94].innerHTML;
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
  width: 100%;
  max-width: 600px;
  display: flex;
}
.search input {
  height: 50px;
  outline: none;
  border: none;
  border-radius: 8px 0px 0px 8px;
  text-indent: 20px;
  font-size: 17px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.05);
}

.search button {
  width: 100px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 0px 8px 8px 0px;
  background-color: #cc5fff;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}
</style>
