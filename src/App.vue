<template>
  <div id="app">
    <div class="loader">
      <img
        src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/loader.gif"
        alt="Loading..."
      />
    </div>

    <div class="container-fluid">
      <h1 @click="load">
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
        <div class="site sitem-lg-3 sitem-md-6">
          <Donate />
        </div>

        <div class="site sitem-lg-2 sitem-md-6">
          <kbd>Hiệu ứng ping</kbd>
          <S8 />
        </div>
        <div class="site sitem-lg-7">
          <kbd>Form đăng ký</kbd>
          <S2 />
        </div>

        <div class="site sitem-lg-5">
          <kbd>Form đăng nhập</kbd>
          <S1 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Hiệu ứng Input focus</kbd>
          <S4 />
        </div>

        <div class="site sitem-lg-3 sitem-md-6">
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
          <kbd>Thanh bar</kbd>
          <S3 />
        </div>
        <div class="site sitem-lg-3 sitem-md-4">
          <kbd>Hiệu ứng button co dãn</kbd>
          <S9 />
        </div>

        <div class="site sitem-lg-4 sitem-md-8">
          <kbd>Bảng modal</kbd>
          <S10 />
        </div>

        <div class="site sitem-lg-3 sitem-md-6">
          <kbd>Button mạng xã hội</kbd>
          <S11 />
        </div>

        <div class="site sitem-lg-2 sitem-md-6">
          <kbd>Button mạng xã hội 2</kbd>
          <S12 />
        </div>

        <div class="site sitem-lg-3 sitem-md-6">
          <kbd>Thanh bar loading</kbd>
          <S13 />
        </div>
        <div class="site sitem-lg-3 sitem-md-6">
          <kbd>Chữ Gradient</kbd>
          <S14 />
        </div>
        <div class="site sitem-lg-4 sitem-md-8">
          <kbd>Thẻ ATM Vietcombank</kbd>
          <S15 />
        </div>

        <div class="site sitem-lg-2 sitem-md-4">
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
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Thẻ thông tin</kbd>
          <S20 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Đặt câu hỏi story Facebook</kbd>
          <S21 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Trang báo lỗi</kbd>
          <S22 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
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
        <div class="site sitem-lg-2 sitem-md-12">
          <kbd>Danh sách tag</kbd>
          <S26 />
        </div>

        <div class="site sitem-lg-6 sitem-md-6">
          <kbd>Form đăng nhập và icon</kbd>
          <S27 />
        </div>

        <div class="site sitem-lg-6 sitem-md-6">
          <kbd>Bảng nhập mật khẩu</kbd>
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
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd>Tải xuống</kbd>
          <S32 />
        </div>

        <div class="site sitem-md-4">
          <kbd>Bảng thông báo cập nhật</kbd>
          <S33 />
        </div>

        <div class="site sitem-lg-4 sitem-md-8">
          <kbd>Các loại thanh cảnh báo </kbd>
          <S34 />
        </div>

        <div class="site sitem-md-6 sitem-lg-3">
          <kbd>Thông báo facebook</kbd>
          <S35 />
        </div>

        <div class="site sitem-md-6 sitem-lg-4">
          <kbd>Bảng nhập số điện thoại</kbd>
          <S36 />
        </div>

        <div class="site sitem-md-4 sitem-lg-2">
          <kbd>Tăng giảm số lượng</kbd>
          <S37 />
        </div>

        <div class="site sitem-md-8 sitem-lg-3">
          <kbd>Chiếc hộp thần bí :))</kbd>
          <S38 />
        </div>

        <div class="site sitem-md-6 sitem-lg-7">
          <kbd>Danh sách các thứ</kbd>
          <S39 />
        </div>

        <div class="site sitem-md-6 sitem-lg-5">
          <kbd>Danh sách người thân</kbd>
          <S40 />
        </div>

        <div class="site sitem-md-4">
          <kbd> Hiển thị lịch hẹn thời gian </kbd>
          <S41 />
        </div>

        <div class="site sitem-md-8">
          <kbd> Bài viết story facebook</kbd>
          <S42 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Bảng thống kê fanpage </kbd>
          <S43 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Form đăng nhập trong suốt </kbd>
          <S44 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Chọn tài khoản thanh toán </kbd>
          <S45 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Chọn gói sử dụng </kbd>
          <S46 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thanh toán thẻ Mastercard </kbd>
          <S47 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng gõ chữ </kbd>
          <S48 />
        </div>

        <div class="site sitem-lg-5 sitem-md-6">
          <kbd> Cảm xúc facebook </kbd>
          <S49 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thông tin thẻ sản phẩm </kbd>
          <S50 />
        </div>

        <div class="site sitem-lg-3 sitem-md-5">
          <kbd> Thông tin sản phẩm</kbd>
          <S52 />
        </div>

        <div class="site sitem-lg-6 sitem-md-6">
          <kbd> Thanh tìm kiếm đơn giản</kbd>
          <S51 />
        </div>

        <div class="site sitem-lg-6 sitem-md-6">
          <kbd> Thanh tìm kiếm nâng cao</kbd>
          <S55 />
        </div>

        <div class="site sitem-lg-3 sitem-md-6">
          <kbd> Thẻ thông tin cá nhân</kbd>
          <S53 />
        </div>

        <div class="site sitem-lg-3 sitem-md-6">
          <kbd> Thẻ thông tin cá nhân</kbd>
          <S56 />
        </div>

        <div class="site sitem-lg-6 sitem-md-6">
          <kbd> Mô hình điện thoại IphoneX</kbd>
          <S54 />
        </div>
        <div class="site sitem-lg-4 sitem-md-5">
          <kbd> Thẻ thông tin cá nhân</kbd>
          <S57 />
        </div>

        <div class="site sitem-lg-5 sitem-md-7">
          <kbd> Khung tìm kiếm</kbd>
          <S58 />
        </div>

        <div class="site sitem-lg-3 sitem-md-5">
          <kbd> Thẻ thông tin cá nhân gradient</kbd>
          <S59 />
        </div>

        <div class="site sitem-lg-4 sitem-md-7">
          <kbd> Form đăng nhập design by Văn Cảnh</kbd>
          <S60 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thẻ thông tin cá nhân 3D</kbd>
          <S61 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thẻ thông tin sản phẩm</kbd>
          <S62 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thẻ Master card</kbd>
          <S63 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Lựa chọn sản phẩm</kbd>
          <S64 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Chọn gói sử dụng</kbd>
          <S65 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Bảng thông tin cá nhân</kbd>
          <S66 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng lật dọc</kbd>
          <S67 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Bảng lựa chọn gói</kbd>
          <S68 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Đồng hồ thời gian phản chiếu</kbd>
          <S69 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Bảng lựa chọn gói </kbd>
          <S70 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng Blog Posts </kbd>
          <S71 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Bài viết Pepsi </kbd>
          <S72 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng sản phẩm lon coca</kbd>
          <S73 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Máy tính bỏ túi</kbd>
          <S74 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng bài viết trong suốt</kbd>
          <S75 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Form đăng nhập</kbd>
          <S76 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thẻ thông tin cá nhân</kbd>
          <S77 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng thẻ bài viết</kbd>
          <S78 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Box service name</kbd>
          <S79 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Vòng tròn nút mạng xã hội</kbd>
          <S80 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng thanh menu dọc</kbd>
          <S81 />
        </div>
        <div class="site sitem-lg-5 sitem-md-6">
          <kbd> Hiệu ứng nút mạng xã hội</kbd>
          <S82 />
        </div>
        <div class="site sitem-lg-3 sitem-md-6">
          <kbd> Hiệu ứng thanh menu dọc dạng icon</kbd>
          <S83 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng thanh menu dọc dạng icon 2</kbd>
          <S84 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Menu hiển thị thông tin tài khoản </kbd>
          <S85 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Cuộn lên đầu trang </kbd>
          <S86 />
        </div>
        <div class="site sitem-lg-6 sitem-md-12">
          <kbd> Welcome từ Cốc Cốc </kbd>
          <S87 />
        </div>
        <div class="site sitem-lg-6 sitem-md-6">
          <kbd> Sidebar menu </kbd>
          <S88 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Sidebar menu </kbd>
          <S89 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thông tin người dùng facebook </kbd>
          <S90 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thông tin cá nhân </kbd>
          <S91 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Modal thông báo</kbd>
          <S92 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Modal thông báo nhận mail</kbd>
          <S93 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thanh tìm kiếm 2</kbd>
          <S94 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng rê chuột button</kbd>
          <S95 />
        </div>
        <div class="site sitem-lg-8 sitem-md-12">
          <kbd> Các hiệu ứng rê chuột button</kbd>
          <S96 />
        </div>
        <div class="site sitem-lg-8 sitem-md-12">
          <kbd> Form đăng nhập</kbd>
          <S98 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Dropdown sáng</kbd>
          <S97 />
        </div>

        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Lựa chọn gói người dùng</kbd>
          <S99 />
        </div>
        <div class="site sitem-lg-3 sitem-md-6">
          <kbd> Thanh search tìm kiếm</kbd>
          <S100 />
        </div>
        <div class="site sitem-lg-5 sitem-md-6">
          <kbd> Lời mời kết bạn</kbd>
          <S101 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thẻ thông tin lựa chọn màu sắc</kbd>
          <S102 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Form đăng nhập Neumorphism</kbd>
          <S103 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Hiệu ứng Input focus 2 </kbd>
          <S104 />
        </div>
        <div class="site sitem-lg-3 sitem-md-6">
          <kbd> Switchbutton </kbd>
          <S105 />
        </div>
        <div class="site sitem-lg-5 sitem-md-6">
          <kbd> Captcha in JavaScript </kbd>
          <S106 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Thông tin xác nhận </kbd>
          <S107 />
        </div>
        <div class="site sitem-lg-4 sitem-md-6">
          <kbd> Gradient Box Shadow</kbd>
          <S108 />
        </div>

        <div class="site sitem-lg-8 sitem-md-12">
          <kbd> Danh sách card bài viết </kbd>
          <S109 />
        </div>

        <div class="site sitem-lg-4 sitem-md-12">
          <kbd> Form đăng nhập A </kbd>
          <S110 />
        </div>
      </div>
      <Like />
      <Love />

      <Up />
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
import S35 from "./components/S35.vue";
import S36 from "./components/S36.vue";
import S37 from "./components/S37.vue";
import S38 from "./components/S38.vue";
import S39 from "./components/S39.vue";
import S40 from "./components/S40.vue";
import S41 from "./components/S41.vue";
import S42 from "./components/S42.vue";
import S43 from "./components/S43.vue";
import S44 from "./components/S44.vue";
import S45 from "./components/S45.vue";
import S46 from "./components/S46.vue";
import S47 from "./components/S47.vue";
import S48 from "./components/S48.vue";
import S49 from "./components/S49.vue";
import S50 from "./components/S50.vue";
import S51 from "./components/S51.vue";
import S52 from "./components/S52.vue";
import S53 from "./components/S53.vue";
import S54 from "./components/S54.vue";
import S55 from "./components/S55.vue";
import S56 from "./components/S56.vue";
import S57 from "./components/S57.vue";
import S58 from "./components/S58.vue";
import S59 from "./components/S59.vue";
import S60 from "./components/S60.vue";
import S61 from "./components/S61.vue";
import S62 from "./components/S62.vue";
import S63 from "./components/S63.vue";
import S64 from "./components/S64.vue";
import S65 from "./components/S65.vue";
import S66 from "./components/S66.vue";
import S67 from "./components/S67.vue";

import S68 from "./components/S68.vue";
import S69 from "./components/S69.vue";
import S70 from "./components/S70.vue";

import S71 from "./components/S71.vue";
import S72 from "./components/S72.vue";
import S73 from "./components/S73.vue";
import S74 from "./components/S74.vue";
import S75 from "./components/S75.vue";
import S76 from "./components/S76.vue";
import S77 from "./components/S77.vue";
import S78 from "./components/S78.vue";
import S79 from "./components/S79.vue";
import S80 from "./components/S80.vue";
import S81 from "./components/S81.vue";
import S82 from "./components/S82.vue";
import S83 from "./components/S83.vue";
import S84 from "./components/S84.vue";
import S85 from "./components/S85.vue";
import S86 from "./components/S86.vue";
import S87 from "./components/S87.vue";
import S88 from "./components/S88.vue";
import S89 from "./components/S89.vue";
import S90 from "./components/S90.vue";
import S91 from "./components/S91.vue";
import S92 from "./components/S92.vue";
import S93 from "./components/S93.vue";
import S94 from "./components/S94.vue";
import S95 from "./components/S95.vue";
import S96 from "./components/S96.vue";
import S97 from "./components/S97.vue";
import S98 from "./components/S98.vue";
import S99 from "./components/S99.vue";
import S100 from "./components/S100.vue";
import S101 from "./components/S101.vue";
import S102 from "./components/S102.vue";
import S103 from "./components/S103.vue";
import S104 from "./components/S104.vue";
import S105 from "./components/S105.vue";
import S106 from "./components/S106.vue";
import S107 from "./components/S107.vue";
import S108 from "./components/S108.vue";
import S109 from "./components/S109.vue";
import S110 from "./components/S110.vue";
import Donate from "./components/Donate.vue";
import Like from "./components/Like.vue";
import Love from "./components/Love.vue";
import Up from "./components/Up.vue";
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
    S35,
    S36,
    S37,
    S38,
    S39,
    S40,
    S41,
    S42,
    S43,
    S44,
    S45,
    S46,
    S47,
    S48,
    S49,
    S50,
    S51,
    S52,
    S53,
    S54,
    S55,
    S56,
    S57,
    S58,
    S59,
    S60,
    S61,
    S62,
    S63,
    S64,
    S65,
    S66,
    S67,
    S68,
    S69,
    S70,
    S71,
    S72,
    S73,
    S74,
    S75,
    S76,
    S77,
    S78,
    S79,
    S80,
    S81,
    S82,
    S83,
    S84,
    S85,
    S86,
    S87,
    S88,
    S89,
    S90,
    S91,
    S92,
    S93,
    S94,
    S95,
    S96,
    S97,
    S98,
    S99,
    S100,
    S101,
    S102,
    S103,
    S104,
    S105,
    S106,
    S107,
    S108,
    S109,
    S110,
    Donate,
    Like,
    Love,
    Up,
    Modal,
    Footer,
  },
  mounted: function () {
    setTimeout(() => {
      this.load();
    }, 2000);
  },
  methods: {
    load: function () {
      const loader = document.querySelector(".loader");
      loader.className += " hidden"; //
    },

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
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
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
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: transparent;
  font-family: "Roboto", sans-serif;
}

body,
html {
  width: 100%;
  height: 100%;
  position: relative;
}
.site {
  margin: 10px 0px;
}

h1 {
  text-align: center;
  color: deeppink;
}
kbd {
  display: block;
  font-size: 17px;
  font-weight: bold;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px;
}
.buttonhtmlcss {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & button.btn {
    background-color: #b6b6b6;
    padding: 0px 20px;
    height: 40px;
    color: #fff;
    border-radius: 7px;
    border: none;
    outline: none;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.5s ease-out;
    &:nth-child(1):hover {
      background-color: #008cff;
    }
    &:nth-child(2):hover {
      background-color: #ffae00;
    }

    &:nth-child(3):hover {
      background-color: #88ff00;
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

//

.loader {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader.hidden {
  animation: fadeOut 1s;
  animation-fill-mode: forwards;
}

@keyframes fadeOut {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
