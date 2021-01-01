<template>
  <div class="smainn">
    <br />
    <div id="s33">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="box">
        <div class="boxs">
          <div class="header">
            <div class="title">
              <i class="fas fa-sync"></i>
              <span>Update avilable</span>
            </div>

            <div class="close">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <div class="main">
            <p>A new software version is available for download</p>
          </div>
          <div class="button-group">
            <div class="button-item">
              <button class="button button-update">Update</button>
            </div>

            <div class="button-item">
              <button class="button button-notnow">Not now</button>
            </div>
          </div>
        </div>
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
      var a = document.getElementById("s33").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[33].innerHTML;
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

.box {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  box-shadow: -2px 5px 15px 0px rgba(0, 0, 0, 0.212);
}

.boxs {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  display: flex;
  align-items: center;
}

.title span {
  font-weight: bold;
  font-size: 25px;
}

.title i {
  padding: 7px;
  border-radius: 50%;
  background-color: #e3f8ff;
  font-size: 12px;
  margin-right: 10px;
  color: #00b1ff;
}

.close {
  font-size: 30px;
  color: #a0a1a1;
  cursor: pointer;
}

.main {
  font-size: 20px;
  color: #6d7a88;
}

.button-group {
  display: flex;
  height: 60%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
  align-items: center;
}

.button {
  padding: 20px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

.button-update {
  background-color: #00b1ff;
  color: rgb(248, 248, 248);

  border: none;
}

.button-notnow {
  color: #1b3550;
  background-color: rgba(245, 245, 245, 0.192);
  border: 2px solid #486581;
  font-weight: 550;
}

.button-update:hover {
  color: #1b3550;
  background-color: rgba(245, 245, 245, 0.192);
  border: 2px solid #486581;
  font-weight: 550;
}

.button-notnow:hover {
  background-color: #00b1ff;
  color: rgb(248, 248, 248);
  border: none;
}
</style>
