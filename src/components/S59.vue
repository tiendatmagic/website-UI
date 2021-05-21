<template>
  <div class="smainn">
    <br />
    <div id="s59">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="profilecard">
        <div class="img">
          <img
            src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
            alt=""
          />
        </div>
        <div class="info">
          <div class="name">
            <p>Tiến Đạt Magic</p>
          </div>
          <div class="job">Front end devoloper</div>
        </div>

        <div class="social-group">
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
      <button @click="html()" class="btn">Xem HTML</button>
      <button @click="css()" class="btn">Xem CSS</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s59").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[59].innerHTML;
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.profilecard {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 15px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-image: linear-gradient(50deg, #0b50d2, #fa2fe6);
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3.5px solid #fff;
}

.info {
  text-align: center;
}

.info .name {
  font-size: 25px;
  color: #fff;
  font-weight: bold;
}

.info .job {
  font-size: 16.5px;
  font-weight: bold;
  color: rgb(226, 226, 226);
}

.social-group {
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px auto;
}

.social-group div {
  width: 40px;
  height: 40px;
  padding: 20px;
  border-radius: 50%;
  background-color: #fff;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  top: 0px;
  transition: 0.5s ease-out;
}

.social-group div:hover {
  top: -10px;
  color: #0b50d2;
}
</style>
