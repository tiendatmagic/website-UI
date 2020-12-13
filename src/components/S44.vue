<template>
  <div class="smainn">
    <br />
    <div id="s44">


  <div class="form">
    <form action="###">
      <h2>Đăng nhập</h2>
      <div class="username">
        <label for="username">Username</label>

        <input type="text" required placeholder="Username">



      </div>

      <div class="password">
        <label for="password">Password</label>

        <input type="password" required placeholder="Password">


      </div>
      <button type="submit" class="login"><span>Đăng nhập</span></button>

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

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s44").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[44].innerHTML;
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

    .form {
      width: 100%;
      height: 400px;
      border: 1px solid #fff;
      padding: 20px;
      border-radius: 20px;
      box-shadow: -2px 0px 18px 7px rgba(0, 0, 0, 0.589);
      font-family: Arial, Helvetica, sans-serif;
    }

    .form h2 {
      font-size: 40px;
      color: rgb(245, 245, 245);
      text-transform: uppercase;
    }

    .form label {
      display: block;
      margin: 10px 0px;
      color: red;
    }

    .form input {
      width: 100%;
      display: block;
      display: block;
      width: 100%;
      height: 50px;
      text-indent: 20px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 8px;
      outline: none;
    }


    .form button.login {

      width: 100%;
      height: 50px;
      background-color: #28A745;
      border: none;
      outline: none;
      border-radius: 8px;
      margin: 0 auto;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: whitesmoke;
      cursor: pointer;
      transition: 0.3s ease-out;
    }

    .form button.login:hover {
      background-color: #238f3c;
      transition: 0.3s ease-out;
    }

    .form button span {
      font-size: 19px;
    }
</style>
