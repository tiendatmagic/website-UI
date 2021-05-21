<template>
  <div class="smainn">
    <br />
    <div id="s75">
      <div class="card">
        <div class="image">
          <img
            src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
            alt=""
          />
        </div>
        <div class="content">
          <h2>Design</h2>
          <p>Ngày mai chẳng biết ra sao nữa. Mà có ra sao cũng chẳng sao</p>
          <button>Read More</button>
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
      var a = document.getElementById("s75").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[75].innerHTML;
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

.card {
  width: 100%;
  max-width: 500px;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.5s ease-out;
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  width: 70%;
  margin: 0 auto;
}

.content h2 {
  color: #e40303;
  font-size: 28px;
}

.content p {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.content button {
  width: 100px;
  height: 35px;
  border-radius: 5px;
  background-color: #0292fd;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
}

.image {
  width: 100%;
  height: 200px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.95);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0px;
  left: 0px;

  transition: 0.5s ease-out;
}

.card:hover .image {
  transform: translateX(-50%) translateY(25%);
  width: 130px;
  height: 130px;
}

.image img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

@media only screen and (max-width: 660px) {
  .card {
    width: 90%;
    height: 300px;
  }

  .image {
    height: 300px;
  }

  .card:hover .image {
    transform: translateX(-50%) translateY(-50%);
    width: 130px;
    height: 130px;
    top: 0px;
    left: 50%;
  }
}
</style>
