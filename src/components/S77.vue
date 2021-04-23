<template>
  <div class="smainn">
    <br />
    <div id="s77">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="card">
        <div class="image">
          <img
            src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
            alt=""
          />
        </div>
        <div class="info">
          <div class="name">
            <h2>TIENDATMAGIC</h2>
          </div>
          <div class="job">
            <p>Front end developer</p>
          </div>
        </div>
        <div class="social">
          <div class="facebook">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="twitter">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="instagram">
            <i class="fab fa-instagram"></i>
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
      var a = document.getElementById("s77").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[77].innerHTML;
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
  width: 100%;
  height: 100vh;
  background-color: rgb(187, 255, 238);
}

.card {
  width: 100%;
  max-width: 250px;
  height: 350px;
  border-radius: 10px;
  background-color: #00000081;
  text-align: center;
  margin: 0 auto;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.image {
  width: 100%;
  position: relative;
  top: 20px;
  opacity: 0.5;
  transition: 0.6s ease-out;
}

.image img {
  width: 120px;
  height: 120px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 50%;
  border: 5px solid #191924;
}

.info {
  position: relative;
  top: 20px;
  transition: 0.6s ease-out;
}

.info .name {
  color: #fff;
}

.info .job {
  color: #e2e2e2;
}

.social {
  display: flex;
  width: 50%;
  margin: 25px auto;
  justify-content: space-evenly;
  font-size: 22px;
  color: #fff;
  transition: 0.5s ease-out;
}

.social div {
  position: relative;
  top: 20px;
  opacity: 0;
  transition: 0.2s ease-out;
}

.social .facebook {
  transition-delay: 0.2s;
}

.social .twitter {
  transition-delay: 0.35s;
}

.social .instagram {
  transition-delay: 0.5s;
}

.card:hover .social div {
  opacity: 1;
  top: 0px;
}

.card:hover .image,
.card:hover .info {
  top: 0px;
  opacity: 1;
}
</style>
