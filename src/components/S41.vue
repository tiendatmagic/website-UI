<template>
  <div class="smainn">
    <br />
    <div id="s41">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="box">
        <div class="box2">
          <div class="box-item">
            <div class="boxx">
              <i class="far fa-calendar-alt"></i>
            </div>
            <div class="boxx">
              <b>10:00 - 11:00</b>
              <p>Wednesday June 2020</p>
            </div>
          </div>
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
      var a = document.getElementById("s41").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[41].innerHTML;
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

.box {
  width: 100%;
  max-width: 300px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.308);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 15px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 0px 10px #00000038;
}

.box2 {
  width: 100%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 15px;
}

.box-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.boxx i {
  font-size: 30px;
  padding: 15px;
  background-color: #8566ff;
  border-radius: 12px;
  color: rgb(235, 232, 232);
}

.boxx b {
  font-size: 20px;
}

.boxx p {
  margin-top: 8px;
  font-size: 15px;
  color: grey;
}
</style>
