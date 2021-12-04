<template>
  <div class="smainn">
    <br />
    <div id="s109">
      <div class="listcard">
        <div class="box">
          <div class="card">
            <div>
              <div class="card-number">01</div>
              <div class="card-title">
                <h2>Card One</h2>
              </div>
              <div class="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, magni animi expedita eligendi nesciunt illum esse ea.
                Laudantium maxime reprehenderit nihil earum tempore consequuntur
                officiis, nemo molestiae enim hic quisquam?
              </div>

              <a href="###"> Read More</a>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="card">
            <div>
              <div class="card-number">02</div>
              <div class="card-title">
                <h2>Card Two</h2>
              </div>
              <div class="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, magni animi expedita eligendi nesciunt illum esse ea.
                Laudantium maxime reprehenderit nihil earum tempore consequuntur
                officiis, nemo molestiae enim hic quisquam?
              </div>

              <a href="###"> Read More</a>
            </div>
          </div>
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
      var a = document.getElementById("s109").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[109].innerHTML;
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
.listcard {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
}

.listcard .box {
  width: 320px;
  height: 450px;
  box-shadow: 5px 5px calc(5px * 1.8) #dbdbdb, -5px -5px calc(5px * 1.8) #fff,
    inset 5px 5px calc(5px * 1.8) #dbdbdb, inset -5px -5px calc(5px * 1.8) #fff;
  border-radius: 15px;
  padding: 12px;
  margin: 10px;
}

.listcard .box:hover .card {
  transform: translateY(-20%);
  background-image: linear-gradient(160deg, #7e42db, #a955d5);
}

.listcard .box:hover .card .card-title,
.listcard .box:hover .card .card-content {
  color: #fff;
}

.listcard .box .card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  text-align: center;
  background-color: #eee;
  box-shadow: 5px 5px calc(5px * 1.8) #dbdbdb, -5px -5px calc(5px * 1.8) #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
}

.listcard .box:hover .card a {
  background-color: #f40398;
}

.listcard .box .card a {
  display: inline-block;
  padding: 8px 20px;
  background-color: #03a9f4;
  margin-top: 20px;
  border-radius: 20px;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.listcard .box .card .card-number {
  position: absolute;
  top: 0px;
  right: 50px;
  font-size: 100px;
  opacity: 0.1;
}
</style>
