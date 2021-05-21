<template>
  <div class="smainn">
    <br />
    <div id="s58">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="search-box">
        <div class="title">
          <h2>
            MONTHLY
            <h3>NEWSLETTER</h3>
          </h2>
          <p>Ngày mai chẳng biết ra sao nữa. Mà có ra sao cũng chẳng sao</p>
        </div>
        <div class="search">
          <input type="text" placeholder="Enter your email address" />
          <a href="###" class="btn">
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
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
      var a = document.getElementById("s58").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[58].innerHTML;
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

.search-box {
  width: 100%;
  max-width: 450px;
  padding: 35px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 0 30px 10px rgba(73, 73, 73, 0.233);
  background-image: linear-gradient(to right, #7a8fee, #da96a6);
}

.search-box .title {
  color: #fff;
  text-align: center;
  margin: 0 auto;
}

.title h2 {
  margin: 0 auto;
  font-size: 35px;
  letter-spacing: 3px;
}

.title h3 {
  font-size: 28px;
}

.title p {
  margin-top: 10px;
  font-size: 15px;
}

.search {
  margin-top: 30px;
  width: 100%;
  height: 60px;

  border-radius: 30px;
  overflow: hidden;
  background-color: #dfcddf;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search input {
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  text-indent: 30px;
  color: #000;
  font-weight: bold;
  background-color: transparent;
}

.search input::placeholder {
  color: gray;
  font-weight: normal;
}

.search .btn {
  background-color: #554e92;
  color: #fff;
  border-radius: 50%;
  padding: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 10px;
  font-size: 15px;
  transition: 1s ease-out;
}

.search .btn:hover {
  opacity: 0.5;
}
</style>
