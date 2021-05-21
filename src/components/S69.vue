<template>
  <div class="smainn">
    <br />
    <div id="s69">
      <div class="datetime">
        <div class="hours">
          <div class="top blue">
            <p class="hour">{{ hour }}</p>
          </div>
          <div class="bottom blue">
            <p>Hours</p>
          </div>
        </div>

        <div class="minutes">
          <div class="top blue">
            <p class="minute">{{ minute }}</p>
          </div>
          <div class="bottom blue">
            <p>Minutes</p>
          </div>
        </div>

        <div class="seconds">
          <div class="top pink">
            <p class="second">{{ second }}</p>
          </div>
          <div class="bottom pink">
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>

    <code style="display: none">
      setInterval(() => { var day = new Date(); var hours = day.getHours(); var
      minutes = day.getMinutes(); var seconds = day.getSeconds();
      document.getElementsByClassName("hour")[0].innerText = hours;
      document.getElementsByClassName("minute")[0].innerText = minutes;
      document.getElementsByClassName("second")[0].innerText = seconds; },
      1000);
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
      var a = document.getElementById("s69").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[69].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },

    js() {
      var c = document.getElementsByTagName("code")[1].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
    },

    getdatetime() {
      this.hour = new Date().getHours();
      this.minute = new Date().getMinutes();
      this.second = new Date().getSeconds();
    },
  },
  data() {
    return {
      hour: null,
      minute: null,
      second: null,
    };
  },

  mounted: function () {
    setInterval(() => {
      this.getdatetime();
    }, 1000);
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

.datetime {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  height: 300px;
  justify-content: space-around;

  color: #fff;
}

.hours,
.minutes,
.seconds {
  width: 30%;
  max-width: 200px;
  height: 150px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
}

.top {
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}

.top.blue {
  background-color: #2295f6;
}

.bottom {
  height: 25%;
  background-color: #1679cf;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

.bottom.blue {
  background-color: #1679cf;
  border-top: 2.5px solid #0e4c83;
}

.top.pink {
  background-color: #fe006b;
}

.bottom.pink {
  background-color: #d10057;
  border-top: 2.5px solid #8a033b;
}
</style>
