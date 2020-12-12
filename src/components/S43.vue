<template>
  <div class="smainn">
    <br />
    <div id="s43">

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" />

    <div class="page">
        <div class="header">
            <div class="header-item">
                <div class="title">
                    <b>Trang Tiến Đạt Magic</b>
                </div>

                <div class="img">
                    <img src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                        alt="">
                </div>
            </div>
            <div class="tg">

            </div>
            <div class="tg">

            </div>
        </div>
        <div class="main-info">


            <div class="info">
                <div class="info-item">
                    <div class="info-items">


                        <div class="icon">

                            <i class="far fa-eye"></i>
                            <p> Viewers</p>

                        </div>

                        <div class="number">
                            <p> 98K </p>
                        </div>

                        <div class="process">

                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-items">


                        <div class="icon">

                            <i class="fas fa-fan"></i>
                            <p> Followers</p>

                        </div>

                        <div class="number">
                            <p> 1m </p>
                        </div>

                        <div class="process">

                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-items">


                        <div class="icon">

                            <i class="fas fa-ad"></i>
                            <p> Ads</p>

                        </div>

                        <div class="number">
                            <p> 27$ </p>
                        </div>

                        <div class="process">

                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-items">


                        <div class="icon">

                            <i class="fas fa-comment-dots"></i>
                            <p> Videos</p>

                        </div>

                        <div class="number">
                            <p> 16 </p>
                        </div>

                        <div class="process">

                        </div>
                    </div>
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
      var a = document.getElementById("s43").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[43].innerHTML;
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

        .page {

            width: 100%;
            background-color: #fff;
            border-radius: 20px;
            overflow: hidden;
            font-family: Arial, Helvetica, sans-serif;
        }

        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

        }

        .header-item {
            width: 100%;
            background-color: #3F8CFF;
            border-radius: 15px;
            padding: 20px;
            color: #fff;
            font-size: 20px;
            text-align: center;

        }

        .tg {
            width: 0;
            height: 0;
            margin-top: 10px;

            border-left: 17px solid transparent;
            border-right: 17px solid transparent;
            border-bottom: 15px solid #fff;
        }

        .tg:nth-child(2) {
            position: absolute;
            left: 0px;
            transform: rotateZ(90deg);



        }

        .tg:nth-child(3) {
            position: absolute;
            right: 0px;
            transform: rotateZ(-90deg);

        }

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;

        }

        .img {
            display: flex;
            justify-content: center;
        }

        .img img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        .main-info {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }

        .info {
            width: 100%;
            display: grid;
            grid-template-columns: auto auto;
            border: 0.1px solid rgba(177, 177, 177, 0.473);
            border-radius: 20px;
            overflow: hidden;

        }

        .info-item {
            width: 100%;
            height: 100%;
            border: 0.1px solid rgba(177, 177, 177, 0.473);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            line-height: 50px;
        }

        .info-items {
            width: 100%;
            height: 100%;
        }

        .icon {
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }

        .icon p {
            font-size: 20px;
            margin-left: 10px;
        }

        .icon i {
            padding: 6px;
            border-radius: 50%;
            font-size: 10px;
            color: #fff;
        }

        .info-item:nth-child(1) .info-items .icon i {
            background-color: #6C5DD3;

        }

        .info-item:nth-child(2) .info-items .icon i {
            background-color: #FFA2C0;

        }

        .info-item:nth-child(3) .info-items .icon i {
            background-color: #3F8CFF;

        }

        .info-item:nth-child(4) .info-items .icon i {
            background-color: #FF9D7F;

        }

        .number {
            font-size: 40px;
            font-weight: bold;
        }

        .process {

            height: 5px;
        }

        .info-item:nth-child(1) .info-items .process {
            background-color: #6C5DD3;
            width: 70%;

        }

        .info-item:nth-child(2) .info-items .process {
            background-color: #FFA2C0;
            width: 50%;

        }

        .info-item:nth-child(3) .info-items .process {
            background-color: #3F8CFF;
            width: 20%;

        }

        .info-item:nth-child(4) .info-items .process {
            background-color: #FF9D7F;
            width: 10%;

        }
</style>
