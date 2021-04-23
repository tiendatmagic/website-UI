<template>
  <div class="smainn">
    <br />
    <div id="s34">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="alert-group">
        <div class="alert-item">
          <div class="alert-items">
            <div class="item1">
              <i class="fas fa-info-circle"></i>
            </div>
            <div class="item2">
              <b>Did you know?</b>
              <p>Here is something that you might like to know</p>
            </div>

            <div class="item3">
              <i class="fas fa-times"></i>
            </div>
          </div>
        </div>

        <div class="alert-item">
          <div class="alert-items">
            <div class="item1">
              <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="item2">
              <b>Did you know?</b>
              <p>Here is something that you might like to know</p>
            </div>

            <div class="item3">
              <i class="fas fa-times"></i>
            </div>
          </div>
        </div>

        <div class="alert-item">

          <div class="alert-items">
            <div class="item1">
              <i class="far fa-check-circle"></i>
            </div>
            <div class="item2">
              <b>Did you know?</b>
              <p>Here is something that you might like to know</p>
            </div>

            <div class="item3">
              <i class="fas fa-times"></i>
            </div>
          </div>

        </div>

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
      var a = document.getElementById("s34").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[34].innerHTML;
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

.alert-item {
  width: 98%;
  margin: 0 auto;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 5px 15px 0px rgba(110, 110, 110, 0.349);
}

.alert-items {
  width: 96%;
  height: 80%;
  display: flex;
  line-height: 30px;
  justify-content: space-around;
  align-items: center;
}

.alert-item:nth-child(1) .alert-items {
  border-left: 7px solid #007bc2;
}

.alert-item:nth-child(2) .alert-items {
  border-left: 7px solid #f0a92e;
}

.alert-item:nth-child(3) .alert-items {
  border-left: 7px solid #21a67a;
}

.fa-info-circle {
  font-size: 35px;
  color: #007bc2;
}

.fa-exclamation-circle {
  font-size: 35px;
  color: #f0a92e;
}

.fa-check-circle {
  font-size: 35px;
  color: #21a67a;
}

.alert-items b {
  color: #31343f;
  font-size: 20px;
}

.alert-items p {
  color: #8a8c92;
  font-size: 18px;
  width: 90%;
}
.alert-items i {
  margin: 12px;
  cursor: pointer;
}
</style>
