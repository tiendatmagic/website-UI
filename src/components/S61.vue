<template>
  <div class="smainn">
    <br />
    <div id="s61">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="profilecard">
        <div class="navbar">
          <div class="icon">
            <i class="fas fa-arrow-left"></i>
          </div>
          <div class="icon">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>

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
          <div class="job">
            <p>Front end devoloper</p>
          </div>
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
          <div class="youtube">
            <i class="fab fa-youtube"></i>
          </div>
        </div>

        <div class="button-group">
          <button>Message</button>
          <button>Subscribe</button>
        </div>

        <div class="data-group">
          <div class="love">
            <i class="far fa-heart"></i>
            <i class="icon-1 fas fa-heart"></i>
            <span>20.4k</span>
          </div>

          <div class="comment">
            <i class="far fa-comment"></i>
            <i class="icon-2 fas fa-comment"></i>
            <b>10.7k</b>
          </div>

          <div class="share">
            <i class="fas fa-share-alt"></i>

            <b>5.8k</b>
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
      var a = document.getElementById("s61").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[61].innerHTML;
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

.profilecard {
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  padding: 30px;
  margin: 0 auto;
  background-color: #eff1f3;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
}

.navbar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.navbar .icon {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}

.img {
  width: 100px;
  height: 100px;
  background-color: #eff1f3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;

  margin: 0 auto;
}

.img img {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}

.info {
  text-align: center;
}

.info .name {
  font-weight: bold;
  font-size: 22px;
}

.social-group {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

.social-group div {
  width: 40px;
  height: 40px;
  background-color: #eff1f3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
}

.social-group .facebook {
  color: #6884ae;
}

.social-group .twitter {
  color: #18a0e2;
}

.social-group .instagram {
  color: #bb385f;
}

.social-group .youtube {
  color: red;
}

.button-group {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
}

.button-group button {
  width: 40%;
  height: 40px;
  background-color: #eff1f3;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
}

.data-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.data-group div {
  width: 20px;
  height: 20px;
  display: flex;
  width: 75px;
  margin: 10px;
  justify-content: space-between;
}

.icon-1,
.icon-2 {
  transform: translateX(-105%);

  opacity: 0;
}

.social-group div:hover,
.button-group button:hover,
.navbar div:hover {
  box-shadow: inset -3px -3px 7px #fff, inset 3px 3px 5px #ceced1;
}

.icon-1:hover,
.icon-2:hover {
  opacity: 1;
  cursor: pointer;
}
</style>
