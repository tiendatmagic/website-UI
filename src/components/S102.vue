<template>
  <div class="smainn">
    <br />
    <div id="s102">
      <div class="boxprofile">
        <div class="profile">
          <div class="header">
            <div class="coverimage">
              <div class="image">
                <img
                  src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                  alt=""
                />
              </div>
            </div>
            <div class="info">
              <div class="name">
                <p>Tiến Đạt Magic</p>
              </div>
              <div class="job">Front end Developer</div>
            </div>
          </div>

          <div class="follow">
            <div>
              <p class="number">1.6K</p>
              <p>
                <b> Followers </b>
              </p>
              <button>Follow</button>
            </div>
            <div>
              <p class="number">852</p>
              <p>
                <b> Following </b>
              </p>
              <button>Message</button>
            </div>
          </div>
        </div>

        <div class="listcolor">
          <div class="listcolors">
            <div class="color" colors="#2870a2" @click="blue()"></div>
            <div class="color" colors="#ca223d"></div>
            <div class="color" colors="#0b814c"></div>
            <div class="color" colors="#763e8b"></div>
            <div class="color" colors="#c68c25"></div>
          </div>
        </div>
      </div>
    </div>
    <code style="display: none">
      for (i = 0; i > document.querySelectorAll(".color").length; i++) {
      document.querySelectorAll(".color")[i].onclick = function () { var c =
      this.getAttribute("colors"); document.getElementsByClassName( "coverimage"
      )[0].style.backgroundColor = c;
      document.getElementsByClassName("name")[0].style.color = c;
      document.querySelectorAll(".profile .follow div b")[0].style.color = c;
      document.querySelectorAll(".profile .follow div b")[1].style.color = c;
      document.querySelectorAll( ".profile .follow div:nth-child(1) button"
      )[0].style.backgroundColor = c; document.querySelectorAll( ".profile
      .follow div:nth-child(2) button" )[0].style.color = c;
      document.querySelectorAll( ".profile .follow div:nth-child(2) button"
      )[0].style.borderColor = c; }; }
    </code>
    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">Xem HTML</button>
      <button @click="js()" class="btn">Xem Javascript</button>
      <button @click="css()" class="btn">Xem CSS</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s102").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[102].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[11].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
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

.boxprofile {
  max-width: 300px;
  margin: 0 auto;
}
.profile {
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 10px 15px rgba(50, 50, 50, 0.1);
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
.profile .coverimage {
  width: 100%;
  height: 100px;
  background-color: #ff2d52;
}
.profile .image {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  transform: translateY(30px);
}

.profile .image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 7px solid #fff;
}
.profile .info {
  margin-top: 60px;
  text-align: center;
  line-height: 25px;
}
.profile .info .name {
  color: #ff2d52;
  font-weight: bold;
  font-size: 20px;
}
.profile .info .job {
  color: #363636;
  font-size: 17px;
  letter-spacing: 0.5px;
}
.profile .follow {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 30px 0;
}
.profile .follow div {
  text-align: center;
  line-height: 30px;
}
.profile .follow div .number {
  font-size: 27px;
}
.profile .follow div b {
  letter-spacing: 0.7px;
  font-size: 17px;
  color: #ff2d52;
}
.profile .follow div button {
  width: 120px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  cursor: pointer;
}
.profile .follow div:nth-child(1) button {
  background-color: #ff2d52;
  color: #fff;
}
.profile .follow div:nth-child(2) button {
  border: 3px solid #ff2d52;
  background-color: #fff;
  color: #ff2d52;
}
.listcolor {
  margin-top: 30px;
  background-color: #fff;
  box-shadow: 0 3px 15px rgba(50, 50, 50, 0.2);
  padding: 25px 0;
  border-radius: 10px;
}
.listcolor .listcolors {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.listcolor .listcolors .color {
  width: 30px;
  height: 30px;
  background-color: rgb(223, 223, 223);
  border: 2px solid #777777;
  border-radius: 50%;
  cursor: pointer;
}
.listcolors .color:nth-child(1) {
  background-color: #2870a2;
}
.listcolors .color:nth-child(2) {
  background-color: #ca223d;
}
.listcolors .color:nth-child(3) {
  background-color: #0b814c;
}
.listcolors .color:nth-child(4) {
  background-color: #763e8b;
}
.listcolors .color:nth-child(5) {
  background-color: #c68c25;
}
</style>
