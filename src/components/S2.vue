<template>
  <div class="smainn">
    <div id="s2">
      <form action="javscript:voi(0);">
        <div class="signup">
          <div class="signup-item"></div>
          <div class="signup-item">
            <div class="signup_signin">
              <div class="ssignup">
                <span> SIGN UP </span>
              </div>
              <div class="ssignin">
                <span> SIGN IN </span>
              </div>
            </div>

            <h1>Đăng ký</h1>

            <div class="form-group">
              <div class="label"><label for="fullname"> Full name </label></div>
              <div>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="vd: Tiến Đạt Magic"
                  class="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="label"><label for="email"> Email </label></div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="vd: tiendatmagic@email.com"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="label"><label for="password">Mật khẩu</label></div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  class="form-control"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="label">
                <label for="repeatpassword">Nhập lại mật khẩu</label>
              </div>
              <div>
                <input
                  type="password"
                  name="repeatpassword"
                  id="repeatpassword"
                  placeholder=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="checkbox"
                class="checkbox"
                name="accept"
                id="accept"
              />
              <span>
                Tôi đã đồng ý và chấp nhận <a href="#">điều khoản</a></span
              >
            </div>
            <br />
            <button class="signupp">Đăng ký</button>
          </div>
        </div>
      </form>
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
      var a = document.getElementById("s2").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
    },
    css() {
      var b = document.getElementsByTagName("style")[2].innerHTML;
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

a {
  text-decoration: none;
  color: deepskyblue;
}

h1 {
  font-size: 40px;
  text-align: center;
  font-weight: 100;
  color: #ff0bb6;
}

form {
  width: 100%;
  margin: 0 auto;
}

.signup_signin {
  width: 180px;
  background-color: #f5f1ff;
  border-radius: 20px;
  height: 35px;
  display: flex;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  padding: 3px;
  margin: 0 auto;
  margin-top: 30px;
  cursor: pointer;
}

.signup_signin .ssignup {
  width: 90px;
  background-image: linear-gradient(to bottom, #ff1d75, #ff7b46);
  border-radius: 20px;
}

.signup_signin .ssignin {
  width: 90px;
  color: rgba(0, 0, 0, 0.74);
}

.signup {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 640px;
  background-color: rgb(252, 252, 252);
  border-radius: 20px;
  overflow: hidden;
}

.signup-item:nth-child(1) {
  flex: 50%;
  background-image: url("https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png");
  background-size: 100% 100%;
  background-color: rgb(255, 200, 229);
  width: 100%;
}

.signup-item:nth-child(2) {
  flex: 50%;
  border-radius: 0px 20px 20px 0px;
}

.form-control {
  text-align: left;
  width: 90%;
  height: 58px;
  border-radius: 14px;
  outline: none;
  background-color: #f5f1ff;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  text-indent: 30px;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 17px;
}

.form-control:focus {
  border-radius: 14px;
  outline: none;
  background-color: #fff;
  box-shadow: 0 10px 20px -5px #cacaca;
}

.form-group .label {
  text-indent: 30px;
}

.form-group span {
  margin-left: 10px;
}

.checkbox {
  margin-left: 30px;
}

.checkbox:after {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: -2px;
  left: -3px;
  position: relative;
  background-color: #dfdfdf;
  content: "";
  display: inline-block;
  border: 0.5px solid white;
  cursor: pointer;
  visibility: visible;
}

.checkbox:checked:after {
  background-color: #ff0095;
}

button.signupp {
  background-image: linear-gradient(to bottom, #ff1d75, #ff7b46);
  width: 90%;
  height: 58px;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  outline: none;
  border: none;
  box-shadow: 0 10px 20px -5px #ff0bb6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
}

button.signupp:hover {
  background-image: linear-gradient(to bottom, #ff7b46, #ff1d75);

  box-shadow: 0px 10px 20px -5px #ff0b80;
  transition: 0.25s ease-out;
}

@media only screen and (max-width: 770px) {
  .signup {
    background-color: #fff;
    border: none;
  }

  .signup-item:nth-child(1) {
    flex: 100%;
    display: none;
  }

  .signup-item:nth-child(2) {
    flex: 100%;
    border-radius: 0px 20px 20px 0px;
  }
}
</style>
