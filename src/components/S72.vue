<template>
  <div class="smainn">
    <br />

    <div id="s72">
      <div class="card">
        <div class="circle"></div>
        <div class="content">
          <h2>
            Pepsi COla
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <a href="#">Buy Now</a>
        </div>
        <img src="../img/can-real-sugar-reg.png" alt="" />
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
      var a = document.getElementById("s72").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[72].innerHTML;
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

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  position: relative;
  width: 600px;
  height: 350px;
  /* background: #ccc; */
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: 0.5s;
}

.card .circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;

  background: #d83133;
  clip-path: circle(120px at center);
  transition: 0.5s;
}

.card:hover .circle {
  background-color: #0065c3;
  clip-path: circle(400px at center);
}

.card img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  pointer-events: none;
  transition: 0.5s;
}

.card:hover img {
  left: 72%;
  height: 500px;
}

.card .content {
  position: relative;
  width: 50%;
  left: 20%;
  padding: 20px 20px 20px 40px;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}

.card:hover .content {
  left: 0;
  opacity: 1;
  visibility: visible;
}

.card .content h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 2em;
  line-height: 1em;
  margin-bottom: 5px;
}
.card .content p {
  color: #fff;
}

.card .content a {
  position: relative;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  background: #fff;
  color: #111;
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 991px) {
  .card {
    width: auto;
    max-width: 350px;
    align-items: flex-start;
    margin: 10px;
  }

  .card:hover {
    height: 600px;
  }

  .card .content {
    width: 100%;
    left: 0;
    padding: 30px;
  }
  .card:hover img {
    top: 70%;
    left: 50%;
    height: 300px;
  }
}

@media (max-width: 420px) {
  .card .content {
    padding: 20px;
  }
}
</style>
