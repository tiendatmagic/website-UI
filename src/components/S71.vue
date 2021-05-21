<template>
  <div class="smainn">
    <br />
    <div id="s71">
      <div class="blogposts">
        <div class="imagepost">
          <img
            src="
        https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png
        "
            alt=""
          />
        </div>

        <div class="mainpost">
          <div class="content">
            <p>Ngày mai chẳng biết ra sao nữa, mà có ra sao cũng chẳng sao</p>
          </div>
          <div class="datetime">
            <p>Mon 25, 2021</p>
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
      var a = document.getElementById("s71").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[71].innerHTML;
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

.blogposts {
  cursor: pointer;
  max-width: 350px;
  margin: 0 auto;
}
.imagepost {
  width: 100%;
  height: 240px;
  margin: 0 auto;
  transform: translateY(20px);
  transition: 0.5s ease-out;
}
.imagepost img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.mainpost {
  margin: 0 auto;
  padding: 15px;
  width: 90%;
  border-radius: 8px;
  transform: translateY(-20px);
  justify-content: center;
  background-color: #e0dfe1cc;
  transition: 0.5s ease-out;
}
.blogposts:hover .imagepost {
  transform: translateY(50px);
}

.blogposts:hover .mainpost {
  transform: translateY(-50px);
}

.mainpost .content {
  font-weight: 550;
  text-align: justify;
}
.mainpost .datetime {
  margin-top: 10px;
  color: #ff5f02;
  font-style: italic;
}
</style>
