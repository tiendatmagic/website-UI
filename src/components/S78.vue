<template>
  <div class="smainn">
    <br />
    <div id="s78">
      <div class="card">
        <div class="image">
          <div class="images">
            <img
              src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
              alt=""
            />
            <p>Front end</p>
          </div>
        </div>
        <div class="content">
          <div class="contents">
            <p>Ngày mai chẳng biết ra sao nữa. Mà có ra sao cũng chẳng sao</p>
            <button>Read More</button>
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
      var a = document.getElementById("s78").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[78].innerHTML;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: aquamarine;
}
.card {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
.image {
  width: 100%;
  height: 200px;
  background-color: #343334;
  color: rgb(180, 180, 180);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translateY(50%);
  z-index: 1;
  position: relative;
  transition: 0.5s ease-out;
}

.image img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.content {
  width: 100%;
  height: 200px;
  background-color: #fff;
  text-align: justify;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 20px 50px #000000cc;
  transform: translateY(-50%);
  transition: 0.5s ease-out;
}

.contents button {
  padding: 5px;
  font-weight: bold;
  color: #1f1f1f;
  background-color: #fff;
  border: 1.5px solid #313131;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
}
.contents button:hover {
  background-color: #1f1f1f;
  color: #fff;
}

.card:hover .image {
  transform: translateY(0%);
  color: #fff;
  background-color: #ff0059;
}

.card:hover .content {
  transform: translateY(0%);
}
</style>
