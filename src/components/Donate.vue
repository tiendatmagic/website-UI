<template>
  <div class="smainn">
    <br />
    <div id="sdonate">
      <div class="donate">
        <div class="item">
          Donate:
        </div>
        <div class="item">
          <img
            src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/logo-momo.jpg"
            alt=""
          />
        </div>
        <div class="item">
          0901980543
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s73").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[73].innerHTML;
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

.donate {
  display: flex;
  flex-wrap: wrap;
  background-color: #ae2170;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 20px;
}
.donate .item {
  margin: 5px;
}

.donate img {
  width: 60px;
}
</style>
