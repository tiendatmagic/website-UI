<template>
  <div class="smainn">
    <br />
    <div id="s63">



  <div class="mastercard">
    <div class="header">
      <div class="img">
        <img src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png" alt="">
      </div>
    </div>
    <div class="main">
      <p>4562</p>
      <p>1122</p>
      <p>4595</p>
      <p>7852</p>
    </div>
    <div class="footer">
      <div class="left">
        <p>CARD HOLDER</p>
        <b>Tiến Đạt</b>
      </div>
      <div class="right">
        <div class="logo">

        </div>
        <div class="master">
          <p>Mastercard</p>
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
      var a = document.getElementById("s63").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[63].innerHTML;
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

    .mastercard {
      width: 100%;
      max-width: 400px;
      background-color: #7257DA;
      padding: 15px;
      border-radius: 20px;
      overflow: hidden;
      margin: 0 auto;
      font-family: Arial, Helvetica, sans-serif;
      box-shadow: 0 0 20px 5px rgba(107, 107, 107, 0.2);
    }



    .img {
      width: 60px;
      height: 50px;

    }

    .img img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    .main {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      font-size: 27px;
      justify-content: space-between;
      color: rgb(231, 231, 231);
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: bold;

    }

    .footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .left {
      margin-top: 30px;
      line-height: 30px;
    }

    .left p {
      font-size: 12px;
      color: #dddddd;
    }

    .left b {
      font-size: 20px;
      color: #f7f7f7;
    }

   
    .right .logo {
      width: 70px;
      height: 40px;
      margin: 0 auto;
      display: block;
      position: relative;
    }

    .right .master {
      text-align: center;
      margin: 0 auto;
      display: block;
      color: #fff;
      letter-spacing: 1.5px;
      font-weight: bold;
      font-size: 17px;
      margin-top: 20px;
    }

    .logo::after {
      content: "";
      width: 45px;
      height: 45px;
      background-color: red;
      border-radius: 50%;
      position: absolute;
      top: 0px;

    }

    .logo::before {
      content: "";
      width: 45px;
      height: 45px;
      background-color: #EF9A1A;
      border-radius: 50%;
      position: absolute;
      top: 0px;
      right: 0px;
    }

</style>
