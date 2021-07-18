<template>
  <div class="smainn">
    <br />
    <div id="s104">
      <div class="form-group">
        <input type="text" value="" placeholder=" " class="text" />
        <label for="text"> Name</label>
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
      var a = document.getElementById("s104").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[104].innerHTML;
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

.form-group {
  width: 100%;
  height: 60px;
  max-width: 400px;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
}
.form-group input.text {
  width: 100%;
  height: 100%;
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #c0c0c0;
  outline: none;
}
.form-group input.text:focus {
  border: 1px solid deeppink;
  outline: none;
}
.form-group input.text:not(:placeholder-shown) + label,
.form-group input.text:focus + label {
  position: absolute;
  top: 0px;
  left: 20px;
  color: deeppink;
  transition: 0.25s ease;
}
.form-group label {
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 14px;
  color: #4d4d4d;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.25s ease;
  background-color: #fff;
  padding: 0 10px;
}
</style>
