<template>
  <div class="smainn">
    <br />
    <div id="s21">
      <div class="box">
        <div class="round">
          <div class="avatar">
            <img
              src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
              alt=""
            />
          </div>
          <p>Bạn hỏi gì đi ...</p>
          <input type="text" placeholder="Trả lời đi nào" />
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
      var a = document.getElementById("s21").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[21].innerHTML;
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

.round {
  width: 90%;
  height: 200px;
  border-radius: 15px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.411);
}

.avatar {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
}

.avatar img {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 3px solid #fff;
  background-color: pink;
}

p {
  text-align: center;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 27px;
  margin-top: 60px;
  margin-bottom: 20px;
}

input {
  width: 90%;
  display: flex;
  margin: 0 auto;
  text-align: left;
  height: 50px;
  border-radius: 14px;
  outline: none;
  background-color: #e5e5e5;
  border: none;
  font-size: 17px;
  text-align: center;
  color: #858585;
}
</style>
