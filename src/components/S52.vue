<template>
  <div class="smainn">
    <br />
    <div id="s52">
      <div class="card">
        <img
          src="https://raw.githubusercontent.com/tiendatmagic/website-UI/master/src/img/aILP3CD.png"
        />
        <div class="card-body">
          <a href="###">
            <h5 class="card-title">TIẾN ĐẠT MAGIC</h5>
          </a>
          <div class="card-text">
            <b>Giá: </b>
            <span class="money"> 1000000 đ</span>
          </div>
          <div class="btn-group">
            <button class="btn-cart">Thêm vào giỏ hàng</button>

            <button class="btn-buy">Mua ngay</button>
          </div>
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
      var a = document.getElementById("s52").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[52].innerHTML;
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

.card {
  width: 100%;
  max-width: 270px;
  text-align: center;
  border: 0.1px solid rgb(194, 194, 194);
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 9px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-out;
  margin: 0 auto;
}

.card:hover {
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease-out;
}

.card img {
  width: 100%;
  height: 270px;
}

.card-body a {
  text-decoration: none;
}

.card-title {
  color: #1495ff;
  text-transform: uppercase;
  font-size: 22px;
  margin-top: 10px;
}

.card-text {
  margin-top: 10px;
  font-size: 18px;
}

.btn-group {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  margin-bottom: 15px;
}

.btn-group button {
  color: #fff;

  border-color: #dc3545;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  outline: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
}
.btn-group button:hover {
  filter: brightness(90%);
}

.btn-group .btn-cart {
  background-color: #dc3545;
}

.btn-group .btn-buy {
  background-color: #7fc400;
}
</style>
