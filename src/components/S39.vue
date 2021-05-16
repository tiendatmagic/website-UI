<template>
  <div class="smainn">
    <br />
    <div id="s39">
      <div class="box-group">
        <div class="box">
          <div class="day">
            <div class="top">
              <p>Mo</p>
            </div>
            <div class="dot"></div>
            <div class="bottom">
              <p>T2</p>
            </div>
          </div>

          <div class="day">
            <div class="top">
              <p>Tu</p>
            </div>
            <div class="dot"></div>
            <div class="bottom">
              <p>T3</p>
            </div>
          </div>

          <div class="day">
            <div class="top">
              <p>We</p>
            </div>
            <div class="dot"></div>
            <div class="bottom">
              <p>T4</p>
            </div>
          </div>

          <div class="day">
            <div class="top">
              <p>Th</p>
            </div>
            <div class="dot"></div>
            <div class="bottom">
              <p>T5</p>
            </div>
          </div>

          <div class="day">
            <div class="top">
              <p>Fr</p>
            </div>
            <div class="dot"></div>
            <div class="bottom">
              <p>T6</p>
            </div>
          </div>

          <div class="day">
            <div class="top">
              <p>Sa</p>
            </div>
            <div class="dot"></div>
            <div class="bottom">
              <p>T7</p>
            </div>
          </div>

          <div class="day">
            <div class="top disable">
              <p>Su</p>
            </div>
            <div class="dot"></div>
            <div class="bottom disable">
              <p>CN</p>
            </div>
          </div>
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
      var a = document.getElementById("s39").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[39].innerHTML;
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

.box-group {
  width: 100%;
  max-width: 800px;
  background-color: #ffffff33;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 0px 15px #00000041;
  padding: 20px;
}

.box {
  background-color: #fafafad5;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  flex-wrap: wrap;
}

.box .day {
  width: 90px;
  height: 130px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  transition: 0.5s ease-out;
}

.box .day:hover {
  background-color: #8566ff;
  box-shadow: -10px 5px 17px 0px #0000002c;
  transition: 0.5s ease-out;
}

.box .day .top {
  color: #b7beeb;
  font-size: 16px;
}

.box .day .top:hover {
  color: #9ca6e7;
}

.box .day .bottom {
  color: #8089c6;
  font-size: 20px;
}

.box .day:hover .bottom {
  color: #ebebeb;
}

.box .day .disable {
  color: #d7daeb;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 50%;
}
</style>
