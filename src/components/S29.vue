<template>
  <div class="smainn">
    <br />
    <div id="s29">
      <div class="card-list">
        <div class="card">
          <div class="card-header">
            <p>Sản phẩm</p>
          </div>
          <div class="card-content">
            <p>- Tiến Đạt magic</p>
            <p>- Tiến Đạt magic</p>
            <p>- Tiến Đạt magic</p>
            <p>- Tiến Đạt magic</p>
            <p>- Tiến Đạt magic</p>
          </div>
        </div>
      </div>
    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
        <i class="fa fa-eye"></i> Xem HTML
      </button>
      <button @click="css()" class="btn">
        <i class="fa fa-eye"></i> Xem CSS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s29").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[29].innerHTML;
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
.card-list {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.card {
  width: 100%;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.705);
  background-color: rgba(255, 255, 255, 0.678);
  border-radius: 15px;
  position: relative;
  box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.322);
}

.card-header {
  width: 300px;
  height: 60px;
  background-color: rgb(255, 187, 61);
  border-radius: 10px;
  position: absolute;
  top: -30px;
  left: 5%;
  font-size: 26px;
  letter-spacing: 3px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-content {
  position: absolute;
  top: 50px;
  font-size: 23px;
  left: 30px;
  line-height: 35px;

}

@media only screen and (max-width: 1500px) {
  .card-header {
    width: 60%;
    font-size: 22px;
  }
}
</style>
