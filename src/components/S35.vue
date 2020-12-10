<template>
  <div class="smainn">
    <br />
    <div id="s35">
 
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" />
    
    <div class="box-group">

        <div class="box-item">
            <div class="header">
                <div class="title">
                    <span>Thông báo mới </span>
                </div>
                <div class="close">
                    <i class="far fa-times"></i>
                </div>
            </div>
            <div class="main">
                <div class="img">
                    <img src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                        alt="">

                        <div class="bell">
                            <i class="fas fa-bell"></i>
                        </div>
                </div>
                
                <div class="content">
                    <p> Hôm nay bạn có thể ôn lại kỷ niệm </p>
                    <p>4 phút trước</p>
                </div>
                <div class="dot">
                    <div class="dots">

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
      var a = document.getElementById("s35").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
  
    },
    css() {
      var b = document.getElementsByTagName("style")[35].innerHTML;
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

        .box-item {
            width: 100%;
            background-color: #fff;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 12px;
            box-shadow: 0px 5px 10px 0px rgba(131, 131, 131, 0.349);
           
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 95%;
            margin: 0 auto;
            padding-top: 10px;

        }

        .header .title {
            font-size: 18px;
            font-weight: bold;
        }

        .header .close {
            font-size: 20px;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(78, 78, 78);
            border-radius: 50%;
            cursor: pointer;
            background-color: rgb(219, 219, 219);
        }

        .main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 95%;
            margin: 0 auto;
            padding-bottom: 10px;
            
        }

        .main .img img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
       
        }

        .main .img {
            position: relative;
            margin-right: 20px;
        }
        .main .bell {
            font-size: 20px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(139, 139, 139);
            position: absolute;
            bottom: 6px;
            left: 70%;
            color: #fff;
        }

        .main .content {
            font-size: 18px;
            width: 80%;
        }

        .main .content p:nth-child(2) {
            color: blue;
        }

        .main .dot .dots {
            padding: 6px;
            background-color: blue;
            border-radius: 50%;
        }
</style>
