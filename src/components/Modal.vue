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
      </div>
    </div>
    <div class="modal-notification">
      <p>
        Sao chép thành công
        <i class="fas fa-check"></i>
      </p>
      <div class="close-noti" @click="closenoti()">
        <i class="far fa-times-circle"></i>
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
    },
    closenoti() {
      document.getElementsByClassName("modal-notification")[0].style.display =
        "none";
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

    copysuccess: function () {
      document
        .getElementsByClassName("modal-notification")[0]
        .setAttribute("style", "display: none");
      document
        .getElementsByClassName("modal-notification")[0]
        .setAttribute("style", "display: flex");
      setTimeout(function () {
        document
          .getElementsByClassName("modal-notification")[0]
          .setAttribute("style", "display: none");
      }, 5000);
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

.modal-notification {
  display: none;
  width: 20%;
  height: 60px;
  font-size: 120%;
  position: fixed;
  top: 30px;
  right: 0px;
  background-color: deeppink;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
  animation: run 0.4s ease-out;
  z-index: 102;
}
.modal-notification i.fa-check {
  color: green;
}

@keyframes run {
  from {
    width: 0%;
    opacity: 0;
  }
  to {
    width: 20%;
    opacity: 1;
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

.close-noti {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #fff;
  position: relative;
  top: 0px;
  left: 5%;
}

.close-noti:hover {
  cursor: pointer;
  color: red;
  transition: 0.5s ease-out;
}

@media only screen and (min-width: 1300px) {
  .close-noti {
    position: relative;
    top: 0px;
    left: 12%;
  }
}
@media only screen and (max-width: 935px) {
  .modal-content {
    width: 75% !important;
  }

  .modal-notification {
    width: 30%;
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
  .modal-notification {
    width: 50%;
  }
  .modal-content {
    width: 80% !important;
  }
}

@media only screen and (max-width: 400px) {
  .modal-notification {
    width: 70%;
  }

  .modal-content {
    width: 85% !important;
  }
}
</style>
