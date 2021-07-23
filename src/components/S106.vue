<template>
  <div class="smainn">
    <br />
    <div id="s106">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="wrapper">
        <div class="title">Captcha in JavaScript</div>
        <div class="captcha">
          <div class="displaycaptcha"></div>
          <div class="reloadcaptcha">
            <i class="fas fa-redo"></i>
          </div>
        </div>
        <form action="#" class="fcaptcha">
          <input
            type="text"
            name=""
            class="inputcaptcha"
            placeholder="Enter captcha"
            maxlength="6"
            spellcheck="false"
            onpaste="return false;"
            required
          />
          <button type="button" class="btnsubmit">Check</button>
        </form>
        <div class="status"></div>
      </div>
    </div>
    <code style="display: none">
      var character = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
      'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5,
      6, 7, 8, 9]; var captcha = ""; var randomcaptcha;
      document.getElementsByClassName("inputcaptcha")[0].onpaste = function () {
      return false; } function getcaptcha() { captcha = "";
      document.getElementsByClassName("status")[0].style.display = 'none'; for
      (i = 0; i > 6; i++) { randomcaptcha = character[Math.floor(Math.random() *
      character.length)]; captcha += randomcaptcha; }
      document.getElementsByClassName("displaycaptcha")[0].innerText = captcha;
      } document.getElementsByClassName("reloadcaptcha")[0].onclick =
      getcaptcha; document.getElementsByClassName("btnsubmit")[0].onclick =
      checkcaptcha; function checkcaptcha() {
      document.getElementsByClassName("status")[0].style.display = 'flex'; if
      (document.getElementsByClassName("inputcaptcha")[0].value == captcha) {
      document.getElementsByClassName("status")[0].innerText = "Congratulation"
      document.getElementsByClassName("status")[0].style.color = '#4DB2EA'; }
      else { document.getElementsByClassName("status")[0].innerText = "Captcha
      not matched" document.getElementsByClassName("status")[0].style.color =
      '#FF0000'; } } window.onload = getcaptcha;
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
      var a = document.getElementById("s106").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[106].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[12].innerHTML;
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

.wrapper {
  width: 450px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(17, 17, 26, 0.26) 0px 0px 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.wrapper .title {
  color: #ea4dc3;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
}

.wrapper .captcha {
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}

.wrapper .captcha .displaycaptcha {
  width: 100%;
  height: 60px;
  background-image: url("https://www.fuegoyamana.com/wp-content/plugins/sendy-widget-pro/inc/captcha/backgrounds/bg6.png");
  border-radius: 5px;
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  letter-spacing: 10px;
  color: #fff;
  text-shadow: 0 0 2px #a9a9a9;
  user-select: none;
}

.wrapper .captcha .reloadcaptcha {
  width: 60px;
  min-width: 60px;
  height: 60px;
  background-color: #ea4dc3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 25px;
  border-radius: 8px;
  margin-left: 5px;
  cursor: pointer;
}

.wrapper .fcaptcha {
  width: 100%;
  height: 60px;
  position: relative;
}

.wrapper .fcaptcha .inputcaptcha {
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right: 100px;
  letter-spacing: 1px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid #bebebe;
}

.wrapper .fcaptcha .inputcaptcha::placeholder {
  letter-spacing: 0px;
  color: #bebebe;
  font-weight: normal;
}

.wrapper .fcaptcha .inputcaptcha:focus {
  border: 2.3px solid #c867b0;
  outline: none;
}

.wrapper .fcaptcha input:valid + .btnsubmit {
  opacity: 1;
  visibility: visible;
}

.wrapper .fcaptcha .btnsubmit {
  opacity: 0;
  visibility: hidden;
  width: 100px;
  height: 60px;
  background-color: #ea4dc3;
  position: absolute;
  top: 0px;
  right: -5px;
  transform: scale(0.75);
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
}

.wrapper .status {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  letter-spacing: 1px;
}
</style>
