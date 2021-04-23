<template>
  <div class="smainn">
    <br />
    <div id="s49">
      <div class="react-facebook">
        <div class="list">
          <div class="list-icon">
            <div class="icon">
              <div class="name">
                <p>Thích</p>
              </div>
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/react1.png"
                alt=""
              />
            </div>

            <div class="icon">
              <div class="name">
                <p>Yêu thích</p>
              </div>
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/react2.png"
                alt=""
              />
            </div>

            <div class="icon">
              <div class="name">
                <p>Thương thương</p>
              </div>
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/react3.png"
                alt=""
              />
            </div>

            <div class="icon">
              <div class="name">
                <p>Haha</p>
              </div>
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/react4.png"
                alt=""
              />
            </div>

            <div class="icon">
              <div class="name">
                <p>Wow</p>
              </div>
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/react5.png"
                alt=""
              />
            </div>

            <div class="icon">
              <div class="name">
                <p>Buồn</p>
              </div>
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/react6.png"
                alt=""
              />
            </div>

            <div class="icon">
              <div class="name">
                <p>Phẫn nộ</p>
              </div>
              <img
                src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/react7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
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
      var a = document.getElementById("s49").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[49].innerHTML;
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

.react-facebook {
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 30px;
  padding: 5px;
  position: relative;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.26);
}

.list {
  position: relative;
}

.list-icon {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
}

.icon {
  cursor: pointer;
  transition: 0.4s ease-out;
}
.icon img {
  width: 50px;
}
.icon:hover {
  transform: translateY(-40%);
  transition: 0.4s ease-out;
}

.icon:hover .name {
  opacity: 1;
  visibility: visible;
  transition: 0.5s ease-out;
}

.icon .name {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: -35px;
  transition: 0.5s ease-out;
}

@media only screen and (max-width: 400px) {
  .icon img {
    width: 35px;
  }
}
</style>
