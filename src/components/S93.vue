<template>
  <div class="smainn">
    <br />
    <div id="s93">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="modals">
        <div class="header">
          <div class="close">
            <i class="far fa-times"></i>
          </div>
        </div>
        <div class="content">
          <i class="fas fa-envelope-open-text"></i>
          <p>
            Ngày mai chẳng biết ra sao nữa. Mà có ra sao cũng chẳng sao
          </p>
          <input type="text" placeholder="Enter email" name="" id="" />
        </div>
        <div class="footer">
          <button>
            SIGN UP
          </button>
        </div>
      </div>
    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
        Xem HTML
      </button>
      <button @click="css()" class="btn">
        Xem CSS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s93").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[93].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },

    action() {
      document.getElementsByClassName("menu")[0].classList.toggle("active");
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

.modals {
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0 10px 25px #0000001a;
  padding: 15px;
  padding-bottom: 30px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
}
.modals .header {
  display: flex;
  justify-content: flex-end;
}
.modals .header .close {
  font-size: 30px;
  color: #4d4d4d;
}

.modals .content {
  text-align: center;
}

.modals .content i {
  font-size: 60px;
  color: #0496dc;
  margin-bottom: 20px;
}
.modals .content p {
  color: #4d4d4d;
  font-size: 15.5px;
  line-height: 20px;
}

.modals .content input {
  width: 85%;
  height: 40px;
  border: 1px solid #cacaca;
  outline: none;
  margin: 15px 0px;
  padding-left: 20px;
}
.modals .content input::placeholder {
  color: #818181;
}
.modals .footer button {
  padding: 12px 20px;
  background-color: #0496dc;
  border: none;
  outline: none;
  display: block;
  margin: 0 auto;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
}
</style>
