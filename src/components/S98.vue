<template>
  <div class="smainn">
    <br />
    <div id="s98">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="signin">
        <div class="title">
          <div class="titlename">
            <b> To continue, please sign in </b>
          </div>
        </div>
        <div class="signin-group">
          <div class="button-signin">
            <button>
              <div class="btn">
                <div class="icon">
                  <i class="fab fa-apple"></i>
                </div>
                <div class="name">
                  <span> Continue with Apple </span>
                </div>
              </div>
            </button>
            <button>
              <div class="btn">
                <div class="icon">
                  <i class="fab fa-google"></i>
                </div>
                <div class="name">
                  <span> Continue with Google </span>
                </div>
              </div>
            </button>
          </div>

          <div class="or">
            <b> OR </b>
          </div>

          <div class="continuewapple">
            <label for="">
              <b> Email address </b>
            </label>

            <input type="text" placeholder="myemail@address.com" />
            <button>Continue with Apple</button>
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
      var a = document.getElementById("s98").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[98].innerHTML;
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

body {
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signin {
  width: 100%;
  height: 500px;
  max-width: 800px;
  padding: 30px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  animation: signin 1s linear;
  transition: 0.3s ease;
}
.title,
.signin-group {
  flex: 1;
}
.signin .titlename {
  width: 70%;
}
.signin .titlename b {
  font-size: 30px;
}

.button-signin button {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border: 2px solid #c7c7c7;
  border-radius: 7px;
  outline: none;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 0 60px;
}

.button-signin button .btn {
  display: flex;

  align-items: center;
}
.button-signin button .btn .icon {
  width: 30px;
  margin-right: 20px;
  font-size: 30px;
}

.button-signin button:nth-child(2) div.icon i {
  color: red;
}
.button-signin button .btn .name {
  font-weight: bold;
}

.or {
  text-align: center;
  position: relative;
  z-index: 1;
  margin: 30px 0;
}
.or::after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #c7c7c7;
  z-index: -1;
}

.or b {
  padding: 0 10px;
  background-color: #fff;
  color: #5e5e5e;
}
.continuewapple label {
  color: #000;
}

.continuewapple input {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border: 2px solid #c7c7c7;
  border-radius: 7px;
  outline: none;
  margin: 5px 0;
  text-indent: 20px;
  letter-spacing: 0.7px;
  font-weight: bold;
}
.continuewapple input::placeholder {
  color: #3a3a3a;
  transition: 0.2s ease;
}
.continuewapple input:focus::placeholder {
  color: #757575;
  letter-spacing: 0.7px;
  text-indent: 30px;
}

.continuewapple button {
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to right, #935ace, #504f9f);
  border-radius: 7px;
  margin-top: 10px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  transition: 0.2s ease;
}

.continuewapple button:hover {
  margin-top: 15px;
}

@keyframes signin {
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

@media only screen and (max-width: 800px) {
  .signin {
    width: 100%;
    height: 100%;
    flex-direction: column;
    border-radius: 0;
    padding: 10px;
    transition: 0.3s ease;
  }

  .signin .titlename {
    width: 100%;
    display: block;
    text-align: center;
    margin: 20px 0;
  }

  .title {
    flex: 0;
  }
}
</style>
