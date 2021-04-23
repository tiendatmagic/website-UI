<template>
  <div class="smainn">
    <br />
    <div id="s86">

    </div>


    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
         Xem HTML</button
      ><button @click="js()" class="btn">
         Xem Javascript
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
      var a = document.getElementById("s85").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[85].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },

    action() {
      document.getElementsByClassName("menu")[0].classList.toggle("active");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
