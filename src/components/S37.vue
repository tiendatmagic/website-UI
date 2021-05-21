<template>
  <div class="smainn">
    <br />
    <div id="s37">
      <div class="amount">
        <div class="remove">
          <button>-</button>
        </div>

        <div class="number">
          <p>1</p>
        </div>
        <div class="add">
          <button>+</button>
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
      var a = document.getElementById("s37").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[37].innerHTML;
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

.amount {
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 5px 15px 0px rgba(110, 110, 110, 0.349);
}

.amount div {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.amount button {
  width: 100%;
  height: 100%;
  background-color: rgb(82, 212, 152);
  outline: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
}

.amount .number {
  background-color: rgb(247, 247, 247);
  font-size: 30px;
}
</style>
