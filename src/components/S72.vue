<template>
  <div class="smainn">
    <br />
    <br />
    <div id="s72">
      <div class="pepsi">
        <div class="pepsis">
          <div class="content">
            <h2>
              PEPSI COCA
            </h2>
            <div class="main">
              <span>
                Dẫu biết ngày mai có ra sao, dù ra sao cũng chẳng sao. Hãy uống
                Pepsi ahihi 😁
              </span>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="../img/can-real-sugar-reg.png" alt="" />
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
      var a = document.getElementById("s72").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[72].innerHTML;
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

.pepsi {
  width: 100%;
  max-width: 200px;
  padding: 30px;
  margin: 0 auto;
  background-color: #c50000;
  border-radius: 50%;
  height: 200px;
  position: relative;
  transition: 0.3s ease-out;
}
.pepsi:hover {
  width: 100%;
  max-width: 550px;
  padding: 20px;
  background-color: #015db5;
  border-radius: 20px;
}
.pepsi:hover .image img {
  transform: scale(1.3);
}
.pepsis {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.pepsis .content {
  width: 50%;
  color: #fff;
  display: block;
}

.image {
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translateY(-10%) translateX(-17%);
}
.image img {
  width: 100%;
  max-width: 150px;
  transition: 0.3s ease-out;
}
.main span {
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .pepsi {
    width: 165px;
    height: 165px;
  }

  .image img {
    width: 100%;
    max-width: 110px;
  }
  .image {
    transform: translateY(-10%) translateX(-25%);
  }
  .pepsi:hover .image img {
    transform: scale(1.1);
  }
}
</style>
