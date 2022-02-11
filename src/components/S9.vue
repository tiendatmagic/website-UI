<template>
  <div class="smainn">
    <br />
    <div id="s9">
      <button class="button">
        <p>
          Rê chuột vào button
          <i class="fa-solid fa-right-long"></i>
        </p>
      </button>
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
      var a = document.getElementById("s9").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[9].innerHTML;
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

button.button {
  padding: 15px;
  background-image: linear-gradient(45deg, rgb(255, 0, 55), rgb(255, 0, 247));
  outline: none;
  border: none;
  border-radius: 8px;
  transition: 0.2s ease-out;
  color: #fff;
  cursor: pointer;
}

button.button:hover {
  padding-right: 15px;
}

button.button:hover i {
  opacity: 1;
  margin-left: 20px;
}
button.button i {
  display: inline;
  opacity: 0;
  transition: 0.2s ease-out;
}
</style>
