<template>
  <div class="smainn">
    <br />
    <div id="s22">
     <div class="error">


        <div class="error-item">
            <img src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/sorrycart.png" alt="">
            <p> Sorry</p>
            <div class="content">
                <p>We couldn't find the product you looking for please go to the</p>

            </div>

            <button class="button">Products List</button>
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
      var a = document.getElementById("s22").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
  
    },
    css() {
      var b = document.getElementsByTagName("style")[22].innerHTML;
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

        .error {
            display: flex;
            width: 100%;
            // height: 100vh;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        p:nth-child(2) {
            font-size: 40px;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            color: #434A54;
            letter-spacing: 2px;
        }

        .content {
            width: 60%;
            margin: 0 auto;
            font-size: 23px;
            line-height: 30px;
            margin-top: 20px;
            color: #6e7174;
        }

        button.button{

            background-color: #4B89DC;
            width: 155px;
            height: 60px;
            border-radius: 30px;
            font-size: 17px;
            color: #fff;
            outline: none;
            border: none;
            transition: 0.25s ease-out;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            margin-top: 20px;
            letter-spacing: 1.2px;
        }
</style>
