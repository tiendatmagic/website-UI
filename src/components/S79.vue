<template>
  <div class="smainn">
    <br />
    <div id="s79">
      <div class="box">
        <div class="number">
          <p>01</p>
        </div>
        <div class="name">
          <p>Service name</p>
        </div>
        <div class="content">
          <p>Ngày mai chẳng biết ra sao nữa, dù có ra sao cũng chẳng sao</p>
        </div>
        <div class="read-more">
          <button>Read More</button>
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
      var a = document.getElementById("s79").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[79].innerHTML;
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

.box {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  transition: 0.5s ease-out;
}

.number {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 0 0 0 #e91e63;
  margin: 0 auto;
  display: flex;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background-color: #e91e63;
  transition: 0.5s ease-out;
  z-index: 1;
}

.box:hover .number {
  box-shadow: 0 0 0 400px #e91e63;
}
.box:hover {
  color: #fff;
}
.read-more button {
  padding: 10px;
  border-radius: 6px;
  border: none;
  outline: none;
  margin: 0 auto;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  box-shadow: 1px 2px 4px rgb(131, 130, 130);
  cursor: pointer;
}
.name {
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 22px;
}
</style>
