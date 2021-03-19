<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="close" @click="close()">
          <i class="far fa-times-circle"></i>
        </div>

        <div id="html">
          <h3>Code HTML</h3>
          <button @click="copyhtml()">Copy html</button>
          <textarea readonly id="thtml" name=""></textarea>
        </div>

        <div id="css">
          <h3>Code CSS</h3>
          <button @click="copycss()">Copy css</button>
          <textarea readonly id="tcss" name=""></textarea>
        </div>

        <div id="javascript" style="display: none">
          <h3>Code Javascript</h3>
          <button @click="copyjavascript()">Copy Javascript</button>
          <textarea readonly id="tjs" name=""></textarea>
        </div>
      </div>
    </div>

    <div class="alert-modal">
      <div class="alert-items">
        <div class="item1">
          <i class="far fa-check-circle"></i>
        </div>
        <div class="item2">
          <b>Thông báo</b>
          <p>Sao chép thành công</p>
        </div>

        <div class="item3">
          <i class="fas fa-times" @click="closenoti()"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  methods: {
    close() {
      document.getElementsByClassName("modal")[0].style.display = "none";
      document.getElementById("javascript").style.display = "none";
    },
    closenoti() {
      document.getElementsByClassName("alert-modal")[0].style.display = "none";
    },

    copyhtml: function () {
      var copyText = document.getElementById("thtml");
      copyText.select();
      document.execCommand("copy");
      this.copysuccess();
    },

    copycss: function () {
      var copyText = document.getElementById("tcss");
      copyText.select();
      document.execCommand("copy");
      this.copysuccess();
    },

    copyjavascript: function () {
      var copyText = document.getElementById("tjs");
      copyText.select();
      document.execCommand("copy");
      this.copysuccess();
    },

    copysuccess: function () {
      document
        .getElementsByClassName("alert-modal")[0]
        .setAttribute("style", "display: none");
      document
        .getElementsByClassName("alert-modal")[0]
        .setAttribute("style", "display: flex");

      setTimeout(function () {
        document
          .getElementsByClassName("alert-modal")[0]
          .setAttribute("style", "display: none");
      }, 5500);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
textarea {
  width: 100%;
  height: 50vh;
  resize: none;
  border: none;
  outline: none;
}

h3 {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.modal-content {
  width: 55%;
  background-color: deeppink;

  margin: 0 auto;
  margin-top: 15vh;
  border-radius: 20px;
  overflow: hidden;
  z-index: 101;
}
.modal-content h3 {
  text-align: center;
}
.modal-content button {
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  margin-left: 5%;
  margin-bottom: 10px;
  outline: none;
  background-color: rgb(184, 0, 184);
  color: #fff;
  cursor: pointer;
  transition: 0.7s ease-out;
}

.modal-content button:hover {
  background-color: rgb(226, 0, 226);
}

.modal-content button:active {
  background-color: rgb(83, 0, 42);
}

.alert-modal {
  width: 25%;
  margin: 0 auto;
  margin: 15px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 5px 15px 0px rgba(110, 110, 110, 0.349);
  animation: run 0.5s ease-out, 2s fadeout 4.5s ease-out forwards;
  position: fixed;
  background-color: #fff;
  display: none;
  top: 0px;
  right: 0px;
}

.alert-items {
  width: 96%;
  height: 80%;
  display: flex;
  line-height: 30px;
  justify-content: space-around;
  align-items: center;
}

.alert-modal:nth-child(1) .alert-items {
  border-left: 7px solid #007bc2;
}

.alert-modal:nth-child(2) .alert-items {
  border-left: 7px solid #21a67a;
}

.alert-modal:nth-child(3) .alert-items {
  border-left: 7px solid #21a67a;
}

.fa-info-circle {
  font-size: 35px;
  color: #007bc2;
}

.fa-exclamation-circle {
  font-size: 35px;
  color: #65f02e;
}

.fa-check-circle {
  font-size: 35px;
  color: #21a67a;
}
.fa-times {
  font-size: 30px;
}
.alert-items b {
  color: #31343f;
  font-size: 20px;
}

.alert-items p {
  color: #8a8c92;
  font-size: 18px;
  width: 100%;
}
.alert-items i {
  margin: 12px;
  cursor: pointer;
}

@keyframes run {
  from {
    transform: translateX(120%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes fadeout {
  25% {
    opacity: 1;
  }

  60% {
    opacity: 0.8;
  }

  80% {
    opacity: 0.4;
  }

  100% {
    opacity: 0;
    display: none;
  }
}

.close {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  font-size: 30px;
  color: white;
}

.close:hover,
.close:focus {
  cursor: pointer;
  color: red;
  transition: 0.5s ease-out;
}

@media only screen and (max-width: 935px) {
  .modal-content {
    width: 75% !important;
  }

  .alert-modal {
    width: 40%;
  }
  @keyframes run {
    from {
      width: 0%;
      opacity: 0;
    }
    to {
      width: 40%;
      opacity: 1;
    }
  }
}

@media only screen and (max-width: 635px) {
  .modal-content {
    width: 80% !important;
  }
  .alert-modal {
    width: 55%;
  }
}
@media only screen and (max-width: 500px) {
  .alert-modal {
    width: 65%;
  }
}

@media only screen and (max-width: 400px) {
  .modal-content {
    width: 85% !important;
  }

  .alert-modal {
    width: 85%;
  }
}
</style>
