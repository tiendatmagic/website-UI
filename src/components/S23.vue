<template>
  <div class="smainn">
    <br />
    <div id="s23">
      <div class="pagination">
        <ul class="pagination">
          <li><a href="#"> &laquo; </a></li>
          <li class="active"><a href="#">1 </a></li>
          <li><a href="#"> 2</a></li>
          <li><a href="#"> 3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#"> &raquo; </a></li>
        </ul>
      </div>
    </div>

    <div class="buttonhtmlcss">
      <button @click="html()" class="btn">
         Xem HTML
      </button>
      <button @click="css()" class="btn">
         Xem CSS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s23").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[23].innerHTML;
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

ul.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul.pagination li {
  width: 50px;
  height: 50px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border: 0.1px solid #7a8199;
  border-radius: 50%;
  outline: none;
  transition: 0.2s ease-out;
  cursor: pointer;
}

ul.pagination li:hover {
  background-color: #10182f;
  transition: 0.2s ease-out;
}

ul.pagination li:hover a {
  color: #fefefe;
}

ul.pagination li a {
  color: #10182f;
  text-decoration: none;
  font-size: 24px;
  font-family: sans-serif;
}

ul.pagination li.active {
  background-color: #10182f;
  border-radius: 12px;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.514);
}

ul.pagination li.active a {
  color: #fefefe;
}
</style>
