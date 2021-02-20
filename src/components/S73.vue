<template>
  <div class="smainn">
    <br />
    <div id="s73">
      <div class="card">
        <div class="main">
          <div class="header">
            <div class="img">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/can-real-sugar-reg.png"
                alt=""
              />
            </div>
          </div>
          <div class="content">
            <div class="name">
              <b>
                Lon cocacola
              </b>
            </div>
            <div class="size">
              <p>
                Size:
              </p>
              <div class="sizes">
                7
              </div>
              <div class="sizes">
                8
              </div>
              <div class="sizes">
                9
              </div>
              <div class="sizes">
                10
              </div>
            </div>
            <div class="color">
              <p>
                Colors:
              </p>
              <div class="colors"></div>
              <div class="colors"></div>
              <div class="colors"></div>
            </div>
            <div class="button">
              <button>BUY NOW</button>
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

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 0 auto;
  transition: 0.5s ease-out;
}

.img {
  width: 150px;
  margin: 0 auto;
  transform: scale(0.7) translateY(-10%);
  transition: 0.5s ease-out;
}
.img img {
  width: 100%;
}

.name {
  color: red;
  font-size: 25px;
}
.size,
.color {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.size .sizes {
  width: 25px;
  height: 25px;
  color: #706f70;

  background-color: rgb(245, 245, 245);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}
.color .colors {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  border: 3px solid #fff;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}
.color .colors:nth-child(2) {
  background-color: #96dc2a;
}
.color .colors:nth-child(3) {
  background-color: #04a8f9;
}
.color .colors:nth-child(4) {
  background-color: #ce1a53;
}

.button button {
  padding: 10px;
  background-color: #fff;
  border: none;
  outline: none;
  width: 120px;
  height: 40px;
  border-radius: 30px;
  font-weight: bold;
  color: #706f70;
  cursor: pointer;
}
.main {
  width: 100%;
  height: 100%;
  padding: 20px;
  transition: 0.4s ease-out;
}

.main .content {
  visibility: hidden;
  opacity: 0;
  transform: translateY(-40%);
  transition: 0.5s ease-out;
}

.card:hover .img {
  transform: rotateZ(-45deg) translateY(0%);
}

.card:hover .main {
  transform: translateY(-30%);
}

.card:hover .main .content {
  transform: translateY(10%);
  visibility: visible;
  opacity: 1;
}
</style>
