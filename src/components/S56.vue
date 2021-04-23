<template>
  <div class="smainn">
    <br />
    <div id="s56">
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
            <b>Tiến Đạt Magic</b>
          </div>

          <div class="job">
            <p>
              <i class="fas fa-star"></i>
              <span> Front end, UX/UI Developer </span>
            </p>
          </div>

          <div class="location">
            <p>
              <i class="fas fa-map-marker-alt"></i>
              <span> Nha Trang, Khánh Hòa </span>
            </p>
          </div>
        </div>

        <div class="infodata">
          <div class="post">
            <b>336</b>
            <p>Posts</p>
          </div>

          <div class="likes">
            <b>4300</b>
            <p>Likes</p>
          </div>

          <div class="works">
            <b>87</b>
            <p>Works</p>
          </div>
        </div>

        <div class="social">
          <div class="youtube">
            <i class="fab fa-youtube"></i>
          </div>

          <div class="linkedin">
            <i class="fab fa-linkedin-in"></i>
          </div>

          <div class="instagram">
            <i class="fab fa-instagram"></i>
          </div>

          <div class="github">
            <i class="fab fa-github"></i>
          </div>
        </div>

        <div class="button-group">
          <button>FOLLOW</button>
          <button>MESSAGE</button>
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
      var a = document.getElementById("s56").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[56].innerHTML;
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
  max-width: 300px;
  padding-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 40px 5px rgba(90, 90, 90, 0.2);
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
}

.img {
  transform: translateY(-50%);
  height: 100px;
}

.img img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 5px solid hotpink;
  box-shadow: 0 0 30px 5px rgba(255, 0, 119, 0.438);
  position: relative;
  margin: 0 auto;
  display: flex;
}

.info {
  text-align: center;
  line-height: 30px;
}

.name {
  font-size: 23px;
  color: rgb(179, 4, 91);
}

.job,
.location {
  color: rgb(78, 80, 87);
  font-size: 17px;
}

.infodata {
  color: rgb(78, 80, 87);
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 20px;
}

.infodata b {
  font-size: 20px;
}

.social {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
}

.social div {
  padding: 10px;
  background-color: pink;
  border-radius: 50%;
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
}

.social .youtube {
  background-image: linear-gradient(45deg, #ff000088, #ff0000);
}

.social .linkedin {
  background-image: linear-gradient(45deg, #0e76a888, #0e76a8);
}

.social .instagram {
  background-image: linear-gradient(
    45deg,
    #e6683ccc 25%,
    #dc2743 50%,
    #bc1888 100%
  );
}

.social .github {
  background-image: linear-gradient(45deg, #33333388, #333333);
}

.button-group {
  text-align: center;
  align-items: center;
  margin-top: 20px;
}

.button-group button {
  width: 50%;
  height: 40px;
  margin: 5px;
  background-color: #b82046;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  box-shadow: 0 0 10px 2px rgba(255, 0, 119, 0.288);
  cursor: pointer;
}
</style>
