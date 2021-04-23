<template>
  <div class="smainn">
    <br />
    <div id="s86">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="toup">
        <div class="up">
          <div>
            <i class="fas fa-arrow-up"></i>
          </div>

          <div>
            <i class="fas fa-arrow-up"></i>
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
      var a = document.getElementById("s85").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[85].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },

    action() {
      document.getElementsByClassName("menu")[0].classList.toggle("active");
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

.toup {
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50%;
  background-image: linear-gradient(#b658bc, #a664e9);
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}
.toup:hover .up {
  transform: translateY(-100%);
}
.toup .up {
  width: 100%;
  height: 100%;
  transition: 0.3s ease-out;
}
.toup .up div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
