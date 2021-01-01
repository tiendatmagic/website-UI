<template>
  <div class="smainn">
    <br />
    <div id="s40">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="box-group">
        <div class="title">
          <h2>Danh sách trực tuyến</h2>
        </div>
        <div class="search">
          <input type="text" placeholder="Nhập tên để tìm kiếm" />
          <i class="fas fa-times-circle"></i>
        </div>
        <div class="main">
          <div class="people-item">
            <div class="people">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />

              <p>Tiến đạt magic</p>
            </div>
          </div>

          <div class="people-item">
            <div class="people">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />

              <p>Tiến đạt magic</p>
            </div>
          </div>

          <div class="people-item">
            <div class="people">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />

              <p>Tiến đạt magic</p>
            </div>
          </div>

          <div class="people-item">
            <div class="people">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />

              <p>Tiến đạt magic</p>
            </div>
          </div>

          <div class="people-item">
            <div class="people">
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
                alt=""
              />

              <p>Tiến đạt magic</p>
            </div>
          </div>
        </div>
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
      var a = document.getElementById("s40").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[40].innerHTML;
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

body {
  background-color: grey;
}

.box-group {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.534);
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 5px 15px 0px rgba(110, 110, 110, 0.349);
}

.title h2 {
  color: rgb(77, 77, 77);
}

.search {
  margin-top: 20px;
  display: flex;
  position: relative;
  align-items: center;
}

.search input {
  width: 100%;
  height: 50px;
  background-color: rgb(247, 247, 247);
  border: none;
  border-radius: 20px;
  outline: none;
  text-indent: 30px;
  font-size: 17px;
}

.search i {
  position: absolute;
  right: 20px;
  pointer-events: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: rgb(109, 0, 187);
}

.main {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-wrap: wrap;
}

.people-item {
  display: flex;
  word-break: break-all;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s ease-out;
}

.people-item:hover {
  background-color: #8566ff;
  box-shadow: -10px 5px 17px 0px rgba(0, 0, 0, 0.171);
}

.people-item:hover .people p {
  color: #fff;
}

.people {
  text-align: center;
}

.people img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.people p {
  color: rgb(122, 122, 122);
}
</style>
