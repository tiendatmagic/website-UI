<template>
  <div class="smainn">
    <br />
    <div id="s17">
      <div class="form">
        <form action="javscript:voi(0);">
          <div class="form-group">
            <label for="name"> Your Name</label
            ><input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email"> Your Email </label
            ><input type="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="message"> Your Content </label
            ><textarea
              placeholder="Nhập nội dung"
              class="form-content"
            ></textarea>
          </div>
          <button type="submit" class="send">Gửi</button>
        </form>
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
      var a = document.getElementById("s17").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
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
* {
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

label {
  color: #242ac4;
}

.form-control {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  outline: none;
  background-color: #f5f1ff;
  border: none;
  margin: 10px 0;
  text-indent: 30px;
  font-size: 17px;
  color: #5558ad;
}

.form-content {
  width: 100%;
  height: 120px;
  border-radius: 20px;
  outline: none;
  background-color: #f5f1ff;
  border: none;
  margin: 10px 0;
  padding-top: 10px;
  padding-left: 28px;
  font-size: 17px;
  resize: none;
  color: #5558ad;
}

button.send {
  background-color: #7b78f8;
  width: 50%;
  height: 55px;
  border-radius: 30px;
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
