<template>
  <div class="smainn">
    <br />
    <div id="s67">
      <div class="square">
        <div class="front">
          <img
            src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
            alt=""
          />
        </div>
        <div class="back">
          <div class="backinfo">
            <h1>Tiến Đạt Magic</h1>

            <p>Nếu bạn thấy hay hãy thả tim và like cho mình nha 😁</p>
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
      var a = document.getElementById("s67").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[67].innerHTML;
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

.square {
  width: 100%;
  max-width: 300px;
  height: 300px;
  background-color: hotpink;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin: 0 auto;
}

.front,
.back {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: 0.5s ease-out;
}

.square:hover .front,
.square:hover .back {
  transform: translateY(-100%);
}

.square img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.square h1 {
  color: #fff;
  margin-bottom: 20px;
}
</style>
