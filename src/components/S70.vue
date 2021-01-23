<template>
  <div class="smainn">
    <br />
    <div id="s70">
      <div class="table">
        <div class="header">
          <div class="headers">
            <div class="title">
              <p>BASIC</p>
            </div>

            <div class="name">
              <p>
                $15/month
              </p>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="mains">
            <p>
              1 GB RAM
            </p>

            <p>
              50 GB STORAGE
            </p>

            <p>
              15 EMAIL ACCOUNTS
            </p>

            <p>
              LIFETIME SUPPORTS
            </p>

            <div class="button">
              <button>
                BUY PLAN
              </button>
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
      var a = document.getElementById("s70").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[70].innerHTML;
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

.table {
  width: 100%;
  max-width: 280px;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(240, 240, 240);
  box-shadow: inset 0 20px 0px rgba(0, 0, 0, 0.2),
    0 10px 50px rgba(0, 0, 0, 0.4);
}

.table .header {
  height: 150px;
  width: 100%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-image: linear-gradient(40deg, #de1ee0, #5921f5);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 35px;
  color: #fff;
  text-align: center;
  font-weight: bold;
}

.headers .title {
  font-size: 16px;
}

.headers .name {
  font-size: 30px;
}

.table .main {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 40px;
  color: #383838;
}

.mains button {
  width: 100%;
  height: 40px;
  background-image: linear-gradient(to left, #de1ee0, #5921f5);
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  background-position: left;
  background-size: 200%;
  transition: 0.5s ease-out;
}

.mains button:hover {
  background-position: right;
}
</style>
