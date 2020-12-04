<template>
  <div class="smainn">
    <div id="s1">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="form">
        <form action="javscript:voi(0);">
          <h1>Đăng nhập</h1>
          <br /><button class="login">
            <i class="fab fa-apple"></i> Đăng nhập bằng Apple</button
          ><br />
          <p>hoặc</p>
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
          </div>
          <br /><button class="login2">Đăng nhập</button><br /><br />
          <p>
            Chưa có tài khoản? <span><a href="#">Đăng ký</a></span>
          </p>
        </form>
      </div>
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



<!-- Add "scoped" attribute to limit CSS to this component only -->


<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s1").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[1].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

h1 {
  font-size: 40px;
  text-align: center;
  font-weight: 100;
  color: #ff0bb6;
}

.form {
  width: 100%;
  margin: 0 auto;
  border-radius: 20px;
  background-color: rgb(252, 252, 252);
}

form {
  width: 90%;
  margin: 0 auto;
}

button {
  cursor: pointer;
}

button.login {
  background-color: #ff0bb6;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  outline: none;
  border: none;
  box-shadow: 0 10px 20px -5px #ff0bb6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease-out;
}

button.login:hover {
  background-color: #ff0b80;
  box-shadow: 0px 10px 35px -5px #ff0b80;
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
  text-indent: 30px;
  font-size: 17px;
}

.form-control:focus {
  border-radius: 14px;
  outline: none;
  background-color: #fff;
  box-shadow: 0 10px 20px -5px #cacaca;
}

button.login2 {
  background-color: #a60bff;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  outline: none;
  border: none;
  box-shadow: 0 10px 20px -5px #a60bff;
  transition: 0.25s ease-out;
}

button.login2:hover {
  background-color: #7100b3;
  box-shadow: 0px 10px 35px -5px #7100b3;
}

p {
  text-align: center;
}

a {
  text-decoration: none;
  color: #003cff;
}

a:hover {
  color: #06e0ce;
}

i.fab.fa-apple {
  font-size: 30px;
  margin-right: 30px;
}
</style>