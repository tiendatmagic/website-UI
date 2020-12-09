<template>
  <div id="app">
    <div class="container-fluid">
      <h1>
        Chào mừng các bạn đã đến với web thư viện Front end của Tiendatmagic
      </h1>
      <input
        type="text"
        id="myInput"
        v-on:keyup="myFunction"
        placeholder="Tìm kiếm nhanh"
        title="Nhập tên ví dụ để tìm kiếm"
      />

      <div class="smain" id="smain">
        <div class="site sitem-lg-4">
          <kbd>Form đăng nhập</kbd>
          <S1 />
        </div>
        <div class="site sitem-lg-8">
          <kbd>Form đăng ký</kbd>
          <S2 />
        </div>

        <div class="site sitem-md-4">
          <kbd>Thanh bar</kbd>
          <S3 />
        </div>

        <div class="site sitem-md-4">
          <kbd>Hiệu ứng Input focus</kbd>
          <S4 />
        </div>

        <div class="site sitem-md-4">
          <kbd>Gradient Button</kbd>
          <S5 />
        </div>

        <div class="site sitem-lg-6">
          <kbd>Hình ảnh nhiều dạng</kbd>
          <S6 />
        </div>
        <div class="site sitem-lg-3 sitem-md-6 sitem-sm-6">
          <kbd>Hiệu ứng xoay tròn</kbd>
          <S7 />
        </div>
        <div class="site sitem-lg-3 sitem-md-6 sitem-sm-6">
          <kbd>Hiệu ứng ping</kbd>
          <S8 />
        </div>
        <div class="site sitem-md-3">
          <kbd>Hiệu ứng button co dãn</kbd>
          <S9 />
        </div>

        <div class="site sitem-md-4">
          <kbd>Bảng modal</kbd>
          <S10 />
        </div>

        <div class="site sitem-md-3">
          <kbd>Button mạng xã hội</kbd>
          <S11 />
        </div>

        <div class="site sitem-md-2">
          <kbd>Button mạng xã hội 2</kbd>
          <S12 />
        </div>

        <div class="site sitem-md-3">
          <kbd>Thanh bar loading</kbd>
          <S13 />
        </div>
        <div class="site sitem-md-3">
          <kbd>Chữ Gradient</kbd>
          <S14 />
        </div>
        <div class="site sitem-md-4">
          <kbd>Thẻ ATM Vietcombank</kbd>
          <S15 />
        </div>

        <div class="site sitem-md-2">
          <kbd>Chuông thông báo</kbd>
          <S16 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Form liên hệ</kbd>
          <S17 />
        </div>

        <div class="site sitem-lg-3 sitem-md-6">
          <kbd>Dropdown</kbd>
          <S18 />
        </div>

        <div class="site sitem-lg-5 sitem-md-12">
          <kbd>Danh sách sản phẩm</kbd>
          <S19 />
        </div>
        <div class="site sitem-lg-3 sitem-md-6">
          <kbd>Thẻ thông tin</kbd>
          <S20 />
        </div>
        <div class="site sitem-lg-5 sitem-md-6">
          <kbd>Đặt câu hỏi story Facebook</kbd>
          <S21 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Trang báo lỗi</kbd>
          <S22 />
        </div>
        <div class="site sitem-lg-3 sitem-md-6">
          <kbd>Nút phân trang</kbd>
          <S23 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Tùy chọn facebook</kbd>
          <S24 />
        </div>
        <div class="site sitem-lg-2 sitem-md-6">
          <kbd>Hiệu ứng lắc lư</kbd>
          <S25 />
        </div>
        <div class="site sitem-lg-3 sitem-md-12">
          <kbd>Danh sách tag</kbd>
          <S26 />
        </div>

        <div class="site sitem-lg-6 sitem-md-6">
          <kbd>Form đăng nhập và icon</kbd>
          <S27 />
        </div>

        <div class="site sitem-lg-6 sitem-md-6">
          <kbd>Form nhập mật khẩu</kbd>
          <S28 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Danh sách sản phẩm</kbd>
          <S29 />
        </div>

        <div class="site sitem-lg-5 sitem-md-6">
          <kbd>Đồng hồ thời gian</kbd>
          <S30 />
        </div>

        <div class="site sitem-lg-3 sitem-md-6">
          <kbd>Form thêm thẻ thanh toán</kbd>
          <S31 />
        </div>
        <div class="site sitem-md-4">
          <kbd>Tải xuống</kbd>
          <S32 />
        </div>

      <div class="site sitem-md-4">
          <kbd>Bảng thông báo cập nhật</kbd>
          <S33 />
        </div>

        <div class="site sitem-lg-4 sitem-md-4">
          <kbd>Các loại thanh cảnh báo </kbd>
          <S34 />
        </div>

        <div class="site sitem-md-4">
          <kbd>Danh sách tag</kbd>
          <S33 />
        </div>

        <div class="site sitem-md-4">
          <kbd>Danh sách tag</kbd>
          <S34 />
        </div>
      </div>

      <div class="smain">
        <div class="sitem">
          <Footer />
        </div>
      </div>

      <Modal />
    </div>
  </div>
</template>

<script>
import "./site.css";
import S1 from "./components/S1.vue";
import S2 from "./components/S2.vue";
import S3 from "./components/S3.vue";
import S4 from "./components/S4.vue";
import S5 from "./components/S5.vue";
import S6 from "./components/S6.vue";
import S7 from "./components/S7.vue";
import S8 from "./components/S8.vue";
import S9 from "./components/S9.vue";
import S10 from "./components/S10.vue";
import S11 from "./components/S11.vue";
import S12 from "./components/S12.vue";
import S13 from "./components/S13.vue";
import S14 from "./components/S14.vue";
import S15 from "./components/S15.vue";
import S16 from "./components/S16.vue";
import S17 from "./components/S17.vue";
import S18 from "./components/S18.vue";
import S19 from "./components/S19.vue";

import S20 from "./components/S20.vue";
import S21 from "./components/S21.vue";
import S22 from "./components/S22.vue";
import S23 from "./components/S23.vue";
import S24 from "./components/S24.vue";
import S25 from "./components/S25.vue";
import S26 from "./components/S26.vue";

import S27 from "./components/S27.vue";
import S28 from "./components/S28.vue";
import S29 from "./components/S29.vue";
import S30 from "./components/S30.vue";
import S31 from "./components/S31.vue";
import S32 from "./components/S32.vue";
import S33 from "./components/S33.vue";
import S34 from "./components/S34.vue";
import Modal from "./components/Modal.vue";
import Footer from "./components/Footer.vue";
export default {
  title: "Foo Page",
  name: "App",
  components: {
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    S10,
    S11,
    S12,
    S13,
    S14,
    S15,
    S16,
    S17,
    S18,
    S19,
    S20,
    S21,
    S22,
    S23,
    S24,
    S25,
    S26,
    S27,
    S28,
    S29,
    S30,
    S31,
    S32,
    S33,
    S34,
    Modal,
    Footer,
  },
  methods: {
    myFunction: function () {
      var input, filter, smain, div, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      smain = document.getElementById("smain");
      div = smain.getElementsByTagName("div");
      for (i = 0; i < div.length; i++) {
        td = div[i].getElementsByTagName("kbd")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
          } else {
            div[i].style.display = "none";
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: pink;
  border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 121, 143);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
}
h1 {
  text-align: center;
  color: deeppink;
}
kbd {
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
}
.buttonhtmlcss {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & button.btn {
    background-color: rgb(166, 255, 255);
    padding: 7.5px;
    border-radius: 10px;
    border: none;
    outline: none;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      filter: brightness(86%);
    }
    &:active {
      filter: brightness(67%);
    }
  }
}

#myInput {
  background-image: url("https://www.w3schools.com/css/searchicon.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 10px 40px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  outline: none;
  transition: 0.3s ease-out;
}

#myInput:focus {
  border: 1px solid palevioletred;
  box-shadow: 0px 0px 7px 0px palevioletred;
  transition: 0.3s ease-out;
}
</style>
