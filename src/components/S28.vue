<template>
  <div class="smainn">
    <br />
    <div id="s28">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="modal-box">
        <div class="content">
          <div class="close">
            <i class="fas fa-times"></i>
          </div>

          <div class="locker">
            <i class="fas fa-lock"></i>
          </div>

          <div class="title">
            <p>This link is password-protected</p>
          </div>

          <div class="input">
            <input type="password" class="password" />
            <label for="password"> Password </label>
          </div>

          <div class="button">
            <button class="button">
              <span> Submit </span>
            </button>
          </div>
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
      var a = document.getElementById("s28").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[28].innerHTML;
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

.modal-box {
  width: 90%;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.096);
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
}

.close {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  font-size: 30px;
  color: royalblue;
}

.close:hover,
.close:focus {
  cursor: pointer;
  color: red;
  transition: 0.5s ease-out;
}

.locker {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.locker i {
  width: 60px;
  height: 60px;
  font-size: 30px;
  border-radius: 50%;
  background-color: #e3e6f9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5a52ff;
}

.title {
  text-align: center;
}

.title {
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.input {
  margin-top: 30px;
}

.input input {
  width: 80%;
  height: 50px;
  display: block;
  margin: 0 auto;
  border: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid #5a52ff;
  outline: none;
  transition: 0.4s ease-out;
  padding-left: 10%;
  letter-spacing: 4px;
  font-size: 20px;
}

.input label {
  position: relative;
  bottom: 38px;
  left: 22%;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.568);
  pointer-events: none;
  transition: 0.5s ease-out;
}

input.password:focus + label {
  position: relative;
  bottom: 60px;
  left: 22%;
  transition: 0.5s ease-out;
}

.button {
  margin-top: 10px;
}

.button button.button {
  width: 30%;
  height: 50px;
  background-color: royalblue;
  border: none;
  outline: none;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  cursor: pointer;
}

.button button.button span {
  font-size: 19px;
}
</style>
