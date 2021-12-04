<template>
  <div class="smainn">
    <br />
    <div id="s110">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div class="form-wrapper">
        <form action="#">
          <div class="title">
            <h2>Welcome</h2>
          </div>

          <div class="icon">A</div>

          <div class="form-group">
            <input type="email" value="" placeholder=" " class="email" />
            <label for="email"> Email</label>
          </div>

          <div class="form-group form-password">
            <input type="password" value="" placeholder=" " class="password" />
            <label for="password"> Password</label>
            <div class="showpassword">
              <div class="showpassword-open">
                <i class="fas fa-eye"></i>
              </div>
              <div class="showpassword-close">
                <i class="fas fa-eye-slash"></i>
              </div>
            </div>
          </div>

          <div class="form-group">
            <button type="submit" id="login">LOGIN</button>
          </div>

          <div class="forget">
            <span>
              Don't have an account?
              <b>
                <a href="###"> Sign up </a>
              </b>
            </span>
          </div>
        </form>
      </div>
    </div>

    <code style="display: none">
      document.getElementsByClassName("showpassword-open")[0].onclick = function
      () { document.getElementsByClassName("password")[0].setAttribute("type",
      "text"); this.style.display = "none";
      document.getElementsByClassName("showpassword-close")[0].style.display =
      "block"; };
      document.getElementsByClassName("showpassword-close")[0].onclick =
      function () { document .getElementsByClassName("password")[0]
      .setAttribute("type", "password"); this.style.display = "none";
      document.getElementsByClassName("showpassword-open")[0].style.display =
      "block"; };
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
      var a = document.getElementById("s110").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[110].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
    js() {
      var c = document.getElementsByTagName("code")[13].innerHTML;
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
.form-wrapper {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 30px 20px;
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
}

.title h2 {
  font-size: 27px;
  text-align: center;
}

.icon {
  font-size: 40px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border-radius: 7px;
  color: #fff;
  background-color: #000;
}

.form-group {
  width: 100%;
  height: 50px;
  max-width: 400px;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  margin: 35px 0;
}

.form-group input.email,
.form-group input.password {
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #9d9d9d;
  outline: none;
  font-size: 17px;
}

.form-group input.password {
  padding-right: 35px;
}

.form-group input.email:focus,
.form-group input.password:focus {
  outline: none;
}

.form-group input.email:not(:-moz-placeholder-shown) + label,
.form-group input.password:not(:-moz-placeholder-shown) + label {
  position: absolute;
  top: 0px;
  left: 0px;
  color: deeppink;
  -moz-transition: 0.25s ease;
  transition: 0.25s ease;
}

.form-group input.email:not(:-ms-input-placeholder) + label,
.form-group input.password:not(:-ms-input-placeholder) + label {
  position: absolute;
  top: 0px;
  left: 0px;
  color: deeppink;
  -ms-transition: 0.25s ease;
  transition: 0.25s ease;
}

.form-group input.email:not(:placeholder-shown) + label,
.form-group input.email:focus + label,
.form-group input.password:not(:placeholder-shown) + label,
.form-group input.password:focus + label {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 14px;
  transition: 0.25s ease;
}

.form-group label {
  position: absolute;
  top: 50%;
  left: 0px;
  font-size: 17px;
  color: #9d9d9d;
  font-weight: bold;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.25s ease;
  background-color: #fff;
}

.form-group button#login {
  display: block;
  width: 100%;
  border: none;
  outline: none;
  padding: 12px;
  border-radius: 30px;
  font-size: 20px;
  color: #fff;
  transition: 0.2s linear;
  cursor: pointer;
  background-image: linear-gradient(to left, #b128ff, #6c7bfe, #26d0fd);
  background-size: 150%;
}

.form-group button#login:hover {
  background-position: right;
}

.forget {
  margin-top: 100px;
}

.forget span {
  display: block;
  text-align: center;
  color: #9d9d9d;
  font-weight: bold;
}

.forget span a {
  color: #4d4d4d;
  font-weight: bold;
  text-decoration: none;
}

.form-password {
  position: relative;
}

.showpassword {
  display: inline;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.showpassword .showpassword-open {
  display: inline;
}

.showpassword .showpassword-close {
  display: none;
}

@media screen and (min-width: 460px) {
  .form-wrapper {
    padding: 30px 50px;
  }
}
</style>
