<template>
  <div class="smainn">
    <div id="footer">
      <p>
        © {{ year }} Copyright by Tiendatmagic - All Rights Reserved | Designed
        by Tiendatmagic
      </p>
      <p class="text-danger text-d">
        <span>
          Liên hệ:<a href="https://www.facebook.com/tiendatmagic"
            >Tiến Đạt Magic</a
          ></span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
    html() {
      var a = document.getElementById("s7").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[7].innerHTML;
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
p {
  font-size: 20px;
  color: deeppink;
  text-align: center;
}

a {
  color: rgb(0, 169, 172);
  text-decoration: none;
}
</style>
