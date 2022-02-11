<template>
  <div class="smainn">
    <br />
    <div id="s92">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="modals">
        <div class="header">
          <div class="title">Thông báo</div>
          <div class="close">
            <i data-v-186ba2d2="" class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="content">
          <div class="contents">
            <div class="icon">
              <i class="far fa-check-circle"></i>
            </div>
            <div class="info">
              <p>Xác thực thành công!</p>
            </div>
          </div>
        </div>
        <div class="footer">
          <button>Close</button>
        </div>
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
      var a = document.getElementById("s92").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[92].innerHTML;
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

.modals {
  width: 100%;
  max-width: 350px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 3px 15px #00000062;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
}
.modals .header {
  background-color: #1c9b61;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  font-size: 20px;
}

.modals .header .title {
  color: #e6e6e6;
}

.modals .header .close {
  color: #e9e9e9;
  cursor: pointer;
}
.modals .content {
  display: flex;
  height: 170px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.modals .content .icon {
  font-size: 70px;
  margin-bottom: 10px;
  color: #1c9b61;
}
.modals .content .info {
  color: #383838;
}
.modals .footer {
  display: flex;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
  border-top: 1px solid #cacaca;
}

.modals .footer button {
  padding: 5px 10px;
  color: #188554;
  font-size: 15px;
  border: 1px solid #188554;
  border-radius: 4px;
  cursor: pointer;
}
</style>
