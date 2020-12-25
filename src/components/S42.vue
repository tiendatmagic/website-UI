<template>
  <div class="smainn">
    <br />
    <div id="s42">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="box">
        <div class="title">
          <b>Story facebook</b>
        </div>

        <div class="main">
          <div class="people">
            <div class="add">
              <i class="fas fa-plus"></i>
            </div>

            <div class="name">
              <p>Add notes</p>
            </div>
          </div>

          <div class="people">
            <div class="icon">
              <div class="round">
                <i class="fas fa-chess-knight"></i>
              </div>
            </div>
            <div class="img">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />
            </div>

            <div class="name">
              <p>Tiến Đạt</p>
            </div>
            <div class="time">
              <p>14m ago</p>
            </div>
          </div>

          <div class="people">
            <div class="icon">
              <div class="round">
                <i class="fas fa-play-circle"></i>
              </div>
            </div>

            <div class="img">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />
            </div>

            <div class="name">
              <p>Tiến Đạt</p>
            </div>
            <div class="time">
              <p>14m ago</p>
            </div>
          </div>

          <div class="people">
            <div class="icon">
              <div class="round">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
            <div class="img">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />
            </div>

            <div class="name">
              <p>Tiến Đạt</p>
            </div>
            <div class="time">
              <p>14m ago</p>
            </div>
          </div>

          <div class="people">
            <div class="icon">
              <div class="round">
                <i class="fab fa-youtube"></i>
              </div>
            </div>
            <div class="img">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />
            </div>

            <div class="name">
              <p>Tiến Đạt</p>
            </div>
            <div class="time">
              <p>14m ago</p>
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
      var a = document.getElementById("s42").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[42].innerHTML;
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

.box {
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-image: linear-gradient(
    to right,
    #fff,
    rgba(255, 255, 255, 0.795),
    rgba(255, 255, 255, 0.37)
  );
  
}

.title {
  font-size: 20px;
}

.main {
  display: flex;
  justify-content: space-around;


  flex-wrap: wrap;
  margin-top: 20px;
}

.people {
  width: 125px;
  word-wrap: break-word;
  text-align: center;
  padding: 30px;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-out;
}

.people:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: -7px 10px 20px rgba(155, 155, 155, 0.301);
  border-radius: 16px;
  transition: 0.3s ease-out;
}

.people img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #695acf;
  border-radius: 50%;
  padding: 5px;
}

.people .name {
  font-size: 17px;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
}

.people .time {
  color: gray;
  font-size: 15px;
  margin-top: 10px;
}

.people .add {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #695acf;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.people .add i {
  color: rgba(255, 255, 255, 0.849);
  font-size: 25px;
}

.people .icon .round {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
}

.people:nth-child(2) .icon .round {
  background-color: rgb(128, 255, 0);
}

.people:nth-child(3) .icon .round {
  background-color: rgb(255, 103, 103);
}

.people:nth-child(4) .icon .round {
  background-color: rgb(0, 198, 224);
}

.people:nth-child(5) .icon .round {
  background-color: rgb(255, 121, 44);
}
</style>