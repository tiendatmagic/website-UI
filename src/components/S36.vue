<template>
  <div class="smainn">
    <br />
    <div id="s36">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />

      <div class="modal-group">
        <div class="modal-item">
          <div class="header">
            <div class="title">
              <span>Nhập số điện thoại để tìm kiếm</span>
            </div>
            <div class="close">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div class="main">
            <h3>Nhập SĐT cần tìm</h3>
            <div class="content">
              <p>Lưu ý số điện thoại phải bắt đầu bằng số 0</p>
              <p>Ví dụ: 0981138654</p>
            </div>

            <input type="text" name="" id="" />
          </div>
          <div class="button-group">
            <button>Đóng</button>
            <button>Tìm kiếm</button>
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
      var a = document.getElementById("s36").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[36].innerHTML;
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

.modal-item {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(131, 131, 131, 0.349);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1.5px solid rgb(228, 228, 228);
}

.header .title {
  font-size: 19px;
  font-weight: bold;
}

.header .close {
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(78, 78, 78);
  border-radius: 50%;
  cursor: pointer;
  background-color: rgba(209, 209, 209, 0.507);
}

.main {
  padding: 20px;
  line-height: 30px;
  border-bottom: 1.5px solid rgb(228, 228, 228);
}

.main h3 {
  font-weight: 500;
}

.main .content {
  font-size: 17px;
  color: rgb(51, 51, 51);
}

.main input {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid rgba(148, 148, 148, 0.301);
  outline: none;
  text-indent: 30px;
  font-size: 19px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
}

.button-group button {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px;
  outline: none;
  border: none;
  cursor: pointer;
}

.button-group button:nth-child(1) {
  background-color: #fff;
  border: 1px solid rgba(148, 148, 148, 0.301);
  color: #000;
}

.button-group button:nth-child(2) {
  background-color: rgb(55, 145, 248);
  color: #fff;
}
</style>
