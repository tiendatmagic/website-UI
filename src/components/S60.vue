<template>
  <div class="smainn">
    <br />
    <div id="s60">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="form">
        <form action="###">
          <div class="image">
            <img src="../img/img.png" alt="" />
          </div>

          <div class="welcome">
            <h3>Chào mừng trở lại!</h3>
            <p>Vui lòng nhập tài khoản của bạn tại đây</p>
          </div>

          <div class="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Nhập email hoặc số điện thoại"
              class="form-control"
            />

            <div class="icon">
              <i class="far fa-envelope"></i>
            </div>
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mật khẩu"
              class="form-control"
            />
            <div class="icon">
              <i class="fas fa-lock"></i>
              <i class="far fa-eye"></i>
            </div>
          </div>

          <div class="qmk">
            <a href="###">Bạn quên mật khẩu ?</a>
          </div>

          <div class="button-group">
            <button class="bsignup">Đăng nhập</button>
            <p>Hoặc tiếp tục với</p>
            <button class="bsignupgoogle">
              <i class="fab fa-google"></i>
              <span> Google </span>
            </button>
          </div>
          <div class="signup">
            <p>Không có bất kỳ tài khoản nào?</p>
            <a href="###">ĐĂNG KÝ</a>
          </div>
        </form>
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
      var a = document.getElementById("s60").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[60].innerHTML;
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

.form {
  width: 100%;
  max-width: 420px;
  background-color: #fff;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}

.form p {
  color: #b7c6ce;
  font-weight: bold;
  margin-top: 20px;
}

.image {
  text-align: center;
}

.welcome {
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
}

.welcome h3 {
  font-size: 20px;
  color: #24395f;
}

.form-group {
  width: 100%;
  height: 55px;

  border-radius: 30px;
  background-color: #fff;
  margin-top: 20px;
  border: 1px solid #dee6f0;
  transition: 0.3s ease-out;
}

.form-group input {
  text-align: left;
  border: none;
  font-size: 17px;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  display: block;
  text-indent: 60px;
  margin: 0 auto;
  background-color: transparent;
  transition: 0.3s ease-out;
}

.form-group input::placeholder {
  color: #b7c6ce;
}

.form-group input:focus {
  border: 1px solid royalblue;
  box-shadow: 0px 0px 7px 0px royalblue;
}

.form-group .icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
}

.qmk a {
  color: #56627b;
  text-decoration: none;
  text-align: right;
  display: block;
  font-weight: bold;
  margin-top: 30px;
}

.button-group {
  text-align: center;
  margin-top: 60px;
}

.button-group button {
  width: 100%;
  height: 55px;
  font-size: 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 30px;
}

.form-group i {
  position: relative;
  bottom: 38px;
  font-size: 23px;
  width: 20px;
  height: 20px;
  pointer-events: none;
  color: #103346;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-group p {
  margin-top: 30px;
  margin-bottom: 30px;
}

.button-group .bsignup {
  background-color: #1fcc79;
  text-transform: uppercase;
  font-weight: bold;
}

.button-group .bsignupgoogle {
  background-color: #ff5842;
  font-size: 17px;
  font-weight: bold;
}

.signup {
  text-align: center;
  margin-top: 20px;
}

.signup a {
  color: #1fcc79;
  font-weight: bold;
  margin-top: 5px;
  text-decoration: none;
}
</style>
