<template>
  <div class="smainn">
    <br />
    <div id="s55">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="formsearch">
        <div class="inputsearch">
          <input type="text" class="searchinput" placeholder="Type to search" />
        </div>

        <a href="###" class="search-btn">
          <i class="fas fa-search"></i>
        </a>
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
      var a = document.getElementById("s55").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[55].innerHTML;
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

.formsearch {
  display: flex;
  background-color: rgb(82, 82, 82);
  width: 50px;
  max-width: 400px;
  padding: 5px;
  border-radius: 30px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-out;
}

.formsearch:hover {
  width: 100%;
}

.formsearch:hover .inputsearch {
  width: 100%;
}

.formsearch:hover .search-btn {
  background-color: #fff;
}

.inputsearch {
  width: 00%;
  transition: 0.6s ease-out;
}

.inputsearch input {
  width: 95%;
  height: 100%;
  display: block;
  border: none;
  outline: none;
  text-indent: 10px;
  color: #fff;
  font-size: 16px;
  background-color: rgb(82, 82, 82);
  margin: 0 auto;
}

.search-btn {
  background-color: rgb(82, 82, 82);
  color: orangered;
  border-radius: 50%;
  padding: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.6s ease-out;
}

.searchinput::placeholder {
  color: rgb(173, 173, 173);
}
</style>
