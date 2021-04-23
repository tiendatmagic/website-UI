<template>
  <div class="smainn">
    <br />
    <div id="s76">
      <form action="javscript:voi(0);">
        <h2>
          Login form
        </h2>
        <div class="form-group">
          <input type="text" placeholder="Email or Username" required />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" required />
        </div>

        <button class="login">LOGIN</button>

        <p class="loginwith">
          Or login with
        </p>
        <div class="button-social">
          <button class="facebook">
            facebook
          </button>
          <button class="google">
            Google
          </button>
        </div>

        <span>
          not a member ?
          <a href="###">Signup now</a>
        </span>
      </form>
    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
         Xem HTML
      </button>
      <button @click="css()" class="btn">
         Xem CSS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s76").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[76].innerHTML;
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

form {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

form h2 {
  font-size: 27px;
}
form input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #80808065;
  margin-top: 10px;
  margin-bottom: 10px;

  text-indent: 20px;
  font-size: 17px;
}

form input::placeholder {
  text-align: center;
  color: #b4b4b4;
  font-size: 15px;
  padding-right: 20px;
}
form button.login {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(to right, #0ed1e0, #7875f0, #dc1dfe);
  cursor: pointer;
}
p.loginwith {
  color: #cecece;
  margin-top: 10px;
  margin-bottom: 10px;
}
.button-social {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-evenly;
}
.button-social button {
  width: 130px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #80808065;
  font-weight: bold;
  cursor: pointer;
  background-color: #fff;
}
button.facebook {
  color: #008aac;
}
button.google {
  color: #d96662;
}
span a {
  color: #75c6fc;
  text-decoration: none;
}
</style>
