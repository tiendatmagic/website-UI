<template>
  <div class="smainn">
    <br />
    <div id="s15">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
        rel="stylesheet"
      />
      <div class="card-atm">
        <div class="cardlogo">
          <p>Vietcombank</p>
          <img
            src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/vietcombank.png"
            width="30px"
            alt=""
          />
        </div>
        <p>Connect</p>

        <div class="number">
          <span>1234</span>
          <span>5678</span>
          <span>9012</span>
          <span>3456</span>
        </div>

        <p class="info">
          <span>MEMBERSINCE:</span>
          <span>01/1-2020</span>
          <span>CLASS</span>
          <span> A</span>
        </p>
        <p>CARRD HOLDER</p>
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
      var a = document.getElementById("s15").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[15].innerHTML;
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

.card-atm {
  width: 100%;
  max-width: 430px;
  height: 250px;
  margin: 0 auto;
  border-radius: 20px;
  background-image: url("https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/vietcombank.png");
  background-size: 150% 230%;
  background-position-x: -100px;
  background-position-y: -220px;
  background-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}

.card-atm p:nth-child(1) {
  color: rgb(0, 70, 35);
  font-weight: 1000;
  text-align: right;
  margin-top: 30px;

  font-size: 24px;
}

.card-atm p:nth-child(2) {
  color: rgb(0, 70, 35);
  font-weight: bold;
  text-align: right;
  margin-right: 100px;
  font-size: 24px;
}

.cardlogo {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}

.cardlogo img {
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
}

.number {
  display: flex;
  justify-content: space-around;
  font-family: "Orbitron", sans-serif;
  margin-top: 30px;
}

p.info {
  margin-top: 30px;
  text-align: center;
}

p.info span:nth-child(1) {
  color: #000;
  font-size: 12px;
}

p.info span:nth-child(2) {
  color: #fff;
  font-size: 19px;
  font-family: "Orbitron", sans-serif;
}

p.info span:nth-child(3) {
  color: #000;
  font-size: 12px;
}

p.info span:nth-child(4) {
  color: #fff;
  font-size: 19px;
}

p:nth-child(5) {
  color: #fff;
  text-align: center;
  margin-top: 10px;
  margin-right: 30%;
}
</style>
