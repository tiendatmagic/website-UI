<template>
  <div class="smainn">
    <br />
    <div id="s57">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="profilecard">
        <div class="up">
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
              <p>Front end, UX/UI Developer</p>
            </div>

            <div class="social">
              <div class="facebook">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div class="twitter">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="github">
                <i class="fab fa-github"></i>
              </div>
              <div class="youtube">
                <i class="fab fa-youtube"></i>
              </div>
            </div>

            <div class="buttoncontact">
              <button>Contact Me</button>
            </div>
          </div>
        </div>

        <div class="down">
          <div class="data">
            <div class="posts">
              <b>120</b>
              <p>Posts</p>
            </div>
            <div class="border"></div>
            <div class="following">
              <b>320</b>
              <p>Following</p>
            </div>
            <div class="border"></div>
            <div class="follower">
              <b>500K</b>
              <p>Follower</p>
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
      var a = document.getElementById("s57").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[57].innerHTML;
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
  max-width: 280px;
  height: 430px;
  background-color: aqua;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  box-shadow: 0 0 30px 10px rgba(73, 73, 73, 0.2);
}

.profilecard .up {
  height: 70%;
  background-color: #2c3a4a;
}

.profilecard .down {
  height: 30%;
  background-color: #fff;
}

.img img {
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 50%;
  position: relative;
  top: 30px;
  margin: 0 auto;
  border: 5px solid hotpink;
}

.info {
  margin-top: 40px;
  text-align: center;
}

.info .name {
  font-size: 22px;
  color: #fff;
}

.info .job {
  color: #d5696b;
}

.social {
  display: flex;
  justify-content: center;
}

.social div {
  padding: 20px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-out;
  font-size: 18px;
}

.social div:hover {
  color: #d5696b;
}

.buttoncontact button {
  width: 50%;
  height: 40px;
  background-color: transparent;
  border: 3px solid #d5696b;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 17px;
  transition: 0.5s ease-out;
}

.buttoncontact button:hover {
  background-color: #f07368;
  border: 3px solid #f07368;
  color: #fff;
}

.down {
  display: flex;
  align-items: center;
}

.down .data {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
  line-height: 25px;
}

.data b {
  font-size: 23px;
  color: #2c3a4a;
}

.data p {
  color: #f07368;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
}

.data .border {
  width: 0.1px;

  background-color: #000;
}
</style>
