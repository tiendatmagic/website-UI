<template>
  <div class="smainn">
    <br />
    <div id="s10">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="modal-notifications">
        <div class="header">
          <div class="close-notifications">
            <i class="fa-solid fa-xmark-circle"></i>
          </div>
        </div>

        <div id="content-notifications">
          <p>Đây là modal</p>
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
      var a = document.getElementById("s10").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[10].innerHTML;
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

.modal-notifications {
  width: 100%;
  background-color: #fafafa;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.377);
  overflow: hidden;
  margin: 0 auto;
}
.modal-notifications p {
  color: deeppink;
  font-size: 20px;
}
.modal-notifications .header {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#content-notifications {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}

#content-notifications::-webkit-scrollbar {
  width: 5px;
}

#content-notifications::-webkit-scrollbar-thumb {
  background: deeppink;
}

.close-notifications {
  float: right;
  font-size: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease-out;
}

.close-notifications:hover {
  transform: rotate(360deg);
  transition: 0.5s ease-out;
}
</style>
