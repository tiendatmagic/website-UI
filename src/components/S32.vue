<template>
  <div class="smainn">
    <br />
    <div id="s32">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="box">
        <div class="box-download">
          <div class="box-group">
            <div class="box-items">
              <div class="items">
                <p>Bấm nút download để tải</p>

                <button class="button">
                  <i class="fas fa-arrow-down"></i>
                  <span> Download </span>
                </button>
              </div>
            </div>
            <div class="box-items">
              <div class="round">
                <div class="round-items">
                  <i class="fas fa-file-medical-alt"></i>
                  <p>Tiến đạt magic</p>
                </div>
              </div>
            </div>
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
      var a = document.getElementById("s32").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[32].innerHTML;
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

.box-download {
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  background-image: linear-gradient(to right, #d4145a, #fbb03b);
}

.box-group {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.box-items:nth-child(1) {
  flex: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.box-items:nth-child(2) {
  flex: 40%;
  height: 100%;
}

.items p {
  font-size: 24px;
  color: #fff;
}

.items button {
  width: 150px;
  padding: 15px;
  border-radius: 30px;
  outline: none;
  border: none;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.616);
  cursor: pointer;
}
.items button:hover {
  background-color: rgba(255, 255, 255, 0.884);
}

.items i {
  color: red;
}

.round {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.round-items {
  width: 80%;
  height: 80%;
  background-color: rgba(255, 128, 187, 0.603);

  justify-content: center;
  text-align: center;
  border-radius: 20px;
}

.round-items i {
  margin-top: 30px;
  font-size: 23px;
  text-align: center;
}

.round-items p {
  font-size: 25px;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
