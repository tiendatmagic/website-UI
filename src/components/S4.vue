<template>
  <div class="smainn">
    <br />
    <div id="s4">
      <div class="form-group">
        <input type="text" class="text" value="" />
        <label for="text"> Nhập họ tên </label>
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
      var a = document.getElementById("s4").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
    },
    css() {
      var b = document.getElementsByTagName("style")[4].innerHTML;
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

input.text {
  width: 100%;
  height: 60px;
  display: block;
  margin: 0 auto;
  padding: 10px 0px 0px 30px;
  border: none;
  background-color: #f5f1ff;
  border-radius: 10px;
  outline: none;
  transition: 0.2s ease-out;
}

input.text:focus {
  background-color: transparent;
  border-color: #ff0077;
            box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.10);
  outline: none;
}

input.text:focus + label {
  position: relative;
  bottom: 57px;
  left: 30px;
  transition: 0.5s ease-out;
}

label {
  position: relative;
  bottom: 35px;
  left: 30px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.568);
  pointer-events: none;
  transition: 0.5s ease-out;
}
</style>
