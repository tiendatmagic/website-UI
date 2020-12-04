<template>
  <div class="smainn">
    <br />
    <div id="s17">
      <div class="form">
        <form data-v-18ce4759="" action="javscript:voi(0);">
          <div data-v-18ce4759="" class="form-group">
            <label data-v-18ce4759="" for="name"> Your Name</label
            ><input data-v-18ce4759="" type="text" class="form-control" />
          </div>
          <div data-v-18ce4759="" class="form-group">
            <label data-v-18ce4759="" for="email"> Your Email </label
            ><input data-v-18ce4759="" type="email" class="form-control" />
          </div>
          <div data-v-18ce4759="" class="form-group">
            <label data-v-18ce4759="" for="message"> Your Email </label
            ><textarea
              data-v-18ce4759=""
              placeholder="Nhập nội dung"
              class="form-content"
            ></textarea>
          </div>
          <button data-v-18ce4759="" type="submit" class="send">Gửi</button>
        </form>
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
      var a = document.getElementById("s17").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
      // document.getElementsByTagName("style")[0].classList.add("abc");
    },
    css() {
      var b = document.getElementsByTagName("style")[17].innerHTML;
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
*[data-v-18ce4759] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form {
  display: flex;
  justify-content: center;
}

form {
  width: 90%;
}

label[data-v-18ce4759] {
  color: #9395cc;
}

.form-control[data-v-18ce4759] {
  width: 100%;
  height: 60px;
  border-radius: 20px;
  outline: none;
  background-color: #f5f1ff;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  text-indent: 30px;
  font-size: 17px;
  color: #5558ad;
}

.form-content[data-v-18ce4759] {
  width: 100%;
  height: 120px;
  border-radius: 20px;
  outline: none;
  background-color: #f5f1ff;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-left: 28px;
  font-size: 17px;
  resize: none;
  color: #5558ad;
}

button.send[data-v-18ce4759] {
  background-color: #7b78f8;
  width: 50%;
  height: 60px;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  outline: none;
  border: none;
  transition: 0.25s ease-out;
  box-shadow: 0 10px 20px -5px #7b78f8;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

button.send[data-v-18ce4759]:hover {
  background-color: #403dfc;
}
</style>
