<template>
  <div class="smainn">
    <br />
    <div id="s103">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="form">
        <form action="javscript:voi(0);">
          <div class="head">
            <div class="logo">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />
            </div>
            <div class="name">
              <h3>
                Đăng nhập
                <br />
                <p>BETA</p>
              </h3>
            </div>
          </div>

          <div class="form-group">
            <div class="inputform">
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
              />
              <i class="far fa-envelope"></i>
            </div>
          </div>
          <div class="form-group">
            <div class="inputform">
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
              />
              <i class="fas fa-lock"></i>
            </div>
          </div>
          <br /><button class="login">Đăng nhập</button><br /><br />
          <p>
            <a href="#"> Quên mật khẩu?</a> <b> hoặc </b>
            <a href="#">Đăng ký</a>
          </p>
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
      var a = document.getElementById("s103").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[103].innerHTML;
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
  max-width: 350px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #eee;
  padding: 30px 20px;
  box-shadow: 5px 5px calc(5px * 1.8) #c2c2c2, -5px -5px calc(5px * 1.8) #fff;
}
.head {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 10px 0;
}
.head .logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 5px 5px calc(5px * 1.8) #c2c2c2, -5px -5px calc(5px * 1.8) #fff;
  padding: 7px;
  margin: 0 auto;
  text-align: center;
}
.head .logo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.head .name {
  margin: 10px 0;
  line-height: 30px;
}

.head .name h3 {
  color: #4e4e4e;
  font-size: 25px;
}
.head .name p {
  color: #646464;
  font-size: 14px;
}

.form form {
  width: 100%;
  margin: 0 auto;
}
.form h1 {
  font-size: 40px;
  text-align: center;
  font-weight: 100;
  color: #ff0bb6;
}
.form button {
  cursor: pointer;
}

.form-control {
  text-align: left;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  outline: none;
  background-color: #eee;
  box-shadow: inset 5px 5px calc(5px * 1.8) #c2c2c2,
    inset -5px -5px calc(5px * 1.8) #fff;
  border: none;
  padding-left: 50px;
  padding-right: 10px;
  font-size: 17px;
  color: #2c2c2c;
  letter-spacing: 1px;
}

.form-control:focus {
  outline: none;
}
.inputform {
  position: relative;
  width: 100%;
  height: 55px;
  margin: 25px 0;
}
.inputform i {
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
  color: #8b8b8b;
}
button.login {
  background-color: #a60bff;
  width: 100%;
  height: 55px;
  border-radius: 30px;
  font-size: 17px;
  color: #fff;
  outline: none;
  border: none;
  box-shadow: 5px 5px calc(5px * 1.8) #c2c2c2, -5px -5px calc(5px * 1.8) #fff;
  transition: 0.25s ease-out;
}

button.login2:hover {
  background-color: #7100b3;
  box-shadow: 0px 10px 35px -5px #7100b3;
}

.form p {
  color: #4e4e4e;
  text-align: center;
}

.form a {
  text-decoration: none;
  color: #4e4e4e;
}
</style>
