<template>
  <div class="smainn">
    <br />
    <div id="s26">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="tag-list">
        <div class="tag">
          <span>Front end </span> <i class="fal fa-times tags-remove"></i>
        </div>

        <div class="tag">
          <span>Back end </span> <i class="fal fa-times tags-remove"></i>
        </div>

        <div class="tag">
          <span>Full stack </span> <i class="fal fa-times tags-remove"></i>
        </div>

        <div class="tag">
          <span>Designer </span> <i class="fal fa-times tags-remove"></i>
        </div>

        <div class="tag">
          <span>Tester </span> <i class="fal fa-times tags-remove"></i>
        </div>
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
      var a = document.getElementById("s26").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[26].innerHTML;
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

.tag-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tag {
  display: flex;
  margin: 20px;
  width: 120px;
  height: 40px;
  background-color: #e7faf8;
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;
}

.tag span {
  max-width: 180px;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif;
}

.tag span,
.tag span,
i.fal.fa-times {
  color: #42d2bc;
}

.tag i.fal.fa-times {
  cursor: pointer;
}
</style>
