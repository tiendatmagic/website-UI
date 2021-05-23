<template>
  <div class="smainn">
    <br />
    <div id="s95">
      <div class="button">
        <div class="button1">
          <p>Let's work together!</p>
        </div>

        <div class="button2">
          <p>Contact Us</p>
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
      var a = document.getElementById("s95").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[95].innerHTML;
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
.button {
  width: 200px;
  height: 60px;
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  cursor: pointer;
  font-size: 18px;
}

.button:hover .button1 {
  transform: scale(1.2);
}

.button:hover .button2 {
  transform: translateX(-100%);
}

.button1 {
  background-color: #dee4f6;
  color: #000005;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  position: absolute;
  transition: 0.5s ease-out;
}

.button2 {
  background-color: #f924e7;
  color: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  position: absolute;
  transition: 0.5s ease-out;
}
</style>
