<template>
  <div class="smainn">
    <br />
    <div id="s4">
      <div class="form-group">
        <input type="text" class="input-focus" placeholder="Name" />
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
      var a = document.getElementById("s4").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
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
.input-focus {
  padding: 15px;
  width: 100%;
  border: 1px solid #b5bfc9;
  border-radius: 6px;
  color: #0d1f36;
  font-size: 18px;
  outline: none;
  background-color: white;
  transition: 0.2s ease;
}

.input-focus:focus {
  border-color: #ff9b9b;
  box-shadow: 0 0 0 4px #ffcdee;
}
</style>
