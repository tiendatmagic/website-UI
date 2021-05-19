<template>
  <div class="smainn">
    <br />
    <div id="s89">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="box">
        <div class="status">
          <div class="placeholder">
            <span> What's happening? </span>
          </div>
          <div
            class="inputstatus"
            contenteditable="true"
            spellcheck="false"
          ></div>
        </div>
        <div class="privacy">
          <i class="fas fa-globe-americas"></i>
          <span> Everyone can reply </span>
        </div>
        <div class="footer">
          <div class="options">
            <li>
              <i class="fas fa-mobile-alt"></i>
            </li>
            <li>
              <i class="far fa-file-image"></i>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
            </li>
            <li>
              <i class="far fa-grin"></i>
            </li>
            <li>
              <i class="far fa-user"></i>
            </li>
          </div>
          <div class="numberbutton">
            <div class="numberb"></div>
            <div class="button">
              <button type="button" disabled>Tweet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <code style="display: none">
      var inputstatus = document.getElementsByClassName("inputstatus")[0];
      numberb = document.getElementsByClassName("numberb")[0]; numberb.innerText
      = 100; inputstatus.onkeyup = () => { numberb.innerText = 100 -
      inputstatus.innerText.length; if (numberb.innerText == 100) {
      document.getElementsByClassName("placeholder")[0].style.display = "block";
      document.querySelector( ".footer .numberbutton .button button"
      ).style.backgroundColor = "#7fbce2"; } else if (numberb.innerText > 0) {
      document.querySelector( ".footer .numberbutton .button button"
      ).style.backgroundColor = "#7fbce2"; } else {
      document.getElementsByClassName("placeholder")[0].style.display = "none";
      document.querySelector( ".footer .numberbutton .button button"
      ).style.backgroundColor = "#008ee6"; } };
    </code>
    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">Xem HTML</button
      ><button @click="js()" class="btn">Xem Javascript</button>
      <button @click="css()" class="btn">Xem CSS</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s89").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    js() {
      var c = document.getElementsByTagName("code")[5].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
    },
    css() {
      var b = document.getElementsByTagName("style")[89].innerHTML;
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

.box {
  width: 90%;
  max-width: 500px;
  background-color: #fcfcfc;
  border-radius: 15px;
  padding: 20px;
  padding-top: 30px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 10px 25px #00000033;
  margin: 0 auto;
}
.status {
  height: 150px;
  position: relative;
  overflow-y: scroll;
}
.status::-webkit-scrollbar {
  width: 5px;
}

.status::-webkit-scrollbar-thumb {
  background: #008ee6;
  border-radius: 30px;
}

.placeholder {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  color: #7c7c7c;
  font-size: 25px;
  pointer-events: none;
}

.inputstatus {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  outline: none;
  word-wrap: break-word;
  line-height: 30px;
}

.privacy {
  color: #008ee6;
  border-bottom: 1px solid #0000002a;
  padding: 15px;
}
.privacy span {
  margin-left: 2px;
  font-weight: 600;
  cursor: pointer;
}
.footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer .options {
  margin: 10px;
}

.footer .options li {
  color: #008ee6;
  margin: 0 10px;
  font-size: 25px;
  list-style: none;
  display: inline;
}
.footer .numberbutton {
  display: flex;
  align-items: center;
}
.footer .numberbutton .numberb {
  height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  border-right: 1px solid #000;
}

.footer .numberbutton .button button {
  background-color: #7fbce2;
  border: none;
  outline: none;
  border-radius: 30px;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-out;
}

@media only screen and (max-width: 480px) {
  .footer .options,
  .footer .numberbutton {
    margin: 10px auto;
  }
}
</style>
