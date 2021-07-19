<template>
  <div class="smainn">
    <br />
    <div id="s105">
      <div class="switchbutton">
        <input type="checkbox" name="" id="switch" class="switchcheckbox" />
        <label for="switch" class="switchwrapper">
          <div class="switchtoggle"></div>
        </label>
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
      var a = document.getElementById("s105").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[105].innerHTML;
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

.switchwrapper {
  width: 175px;
  height: 70px;
  background-color: #fff;
  display: block;
  box-shadow: rgba(17, 17, 26, 0.2) 0px 0px 16px;
  border-radius: 50px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
}
.switchtoggle {
  width: 70px;
  height: 70px;
  background-color: #eee;
  border-radius: 50%;
  position: absolute;
  transition: 0.3s ease;
}
.switchcheckbox {
  display: none;
}
.switchcheckbox:checked + .switchwrapper .switchtoggle {
  transform: translateX(calc(175px - 70px));
  background-color: rgba(0, 0, 255, 0.644);
}
</style>
