<template>
  <div class="smainn">
    <br />
    <div id="s27">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="form">
        <form action="javscript:voi(0);">
          <h1>Đăng nhập</h1>
          <div class="form-group">
            <div><label for="email"> Email </label></div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="vd: tiendatmagic@email.com"
                class="form-control"
              />
            </div>
            <i class="far fa-envelope"></i>
          </div>
          <div class="form-group">
            <div><label for="password">Mật khẩu</label></div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                class="form-control"
              />
            </div>
            <i class="fas fa-lock"></i>
          </div>
          <button class="login"><span>Đăng nhập</span></button>
          <p>
            <a href="#" class="qmk"> Quên mật khẩu </a>
          </p>
          <hr />
          <button class="createaccount"><span>Tạo tài khoản mới</span></button>
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
      var a = document.getElementById("s27").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[27].innerHTML;
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

h1 {
  font-size: 40px;
  text-align: center;
  font-weight: 100;
  color: #ff0bb6;
  position: relative;
}

.form {
  width: 100%;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #fcfcfc;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
}

form {
  width: 100%;
  margin: 0 auto;
  padding: 30px 5%;
}

.form-control {
  text-align: left;
  width: 100%;
  height: 60px;
  border-radius: 14px;
  outline: none;
  background-color: #f5f1ff;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  text-indent: 60px;
  font-size: 17px;
  transition: 0.3s ease-out;
}

.form-control:focus {
  border: 1px solid royalblue;
  box-shadow: 0px 0px 7px 0px royalblue;
  transition: 0.3s ease-out;
}

button.login {
  width: 70%;
  height: 50px;
  background-color: royalblue;
  border: none;
  outline: none;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(245, 245, 245);
  cursor: pointer;
  transition: 0.3s ease-out;
}

button span {
  font-size: 19px;
}

.form-group i {
  position: relative;
  bottom: 55px;
  left: 20px;
  font-size: 30px;
  pointer-events: none;
}

p {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

a.qmk {
  text-decoration: none;
  color: royalblue;
}

a.qmk:hover {
  text-decoration: underline;
}

button.createaccount {
  width: 70%;
  height: 50px;
  background-color: #36a420;
  border: none;
  outline: none;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(245, 245, 245);
  cursor: pointer;
  transition: 0.3s ease-out;
}
</style>
