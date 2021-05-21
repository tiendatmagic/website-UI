<template>
  <div class="smainn">
    <br />
    <div id="s82">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="social-group">
        <div class="facebook socials">
          <div class="name">
            <p>Facebook</p>
          </div>
          <div class="icon"><i class="fab fa-facebook-f"></i></div>
        </div>
        <div class="twitter socials">
          <div class="name">
            <p>Twitter</p>
          </div>
          <div class="icon"><i class="fab fa-twitter"></i></div>
        </div>
        <div class="instagram socials">
          <div class="name">
            <p>Instagram</p>
          </div>
          <div class="icon"><i class="fab fa-instagram"></i></div>
        </div>
        <div class="github socials">
          <div class="name">
            <p>Github</p>
          </div>
          <div class="icon"><i class="fab fa-github"></i></div>
        </div>
        <div class="youtube socials">
          <div class="name">
            <p>Youtube</p>
          </div>
          <div class="icon"><i class="fab fa-youtube"></i></div>
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
      var a = document.getElementById("s82").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[82].innerHTML;
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
  padding: 0px;
  box-sizing: border-box;
}

.social-group {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  max-width: 700px;
  flex-wrap: wrap;
}

.socials {
  width: 70px;
  height: 70px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.social-group .name {
  background-color: royalblue;
  border-radius: 30px;
  width: 140px;
  height: 50px;
  opacity: 0;
  transform: translateY(-60%);
  position: absolute;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.name p {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 23px;
  justify-content: center;
  align-items: center;
}

.social-group .name::after {
  content: "";
  position: relative;
  bottom: 1px;
  display: block;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.social-group .icon {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.social-group .socials:hover {
  color: #fff;
}

.social-group .socials:hover .name {
  opacity: 1;
  transform: translateY(-160%);
  transition-delay: 0.2s;
}

.social-group .facebook .name {
  background-color: #3c5996;
}

.social-group .facebook .name::after {
  border-top: 12px solid #3c5996;
}

.social-group .facebook:hover .icon {
  background-color: #3c5996;
}

.social-group .twitter .name {
  background-color: #47c0f1;
}

.social-group .twitter .name::after {
  border-top: 12px solid #47c0f1;
}

.social-group .twitter:hover .icon {
  background-color: #47c0f1;
}

.social-group .instagram .name {
  background-color: #df306a;
}

.social-group .instagram .name::after {
  border-top: 12px solid #df306a;
}

.social-group .instagram:hover .icon {
  background-color: #df306a;
}

.social-group .github .name {
  background-color: #343334;
}

.social-group .github .name::after {
  border-top: 12px solid #343334;
}

.social-group .github:hover .icon {
  background-color: #343334;
}

.social-group .youtube .name {
  background-color: #e0453c;
}

.social-group .youtube .name::after {
  border-top: 12px solid #e0453c;
}

.social-group .youtube:hover .icon {
  background-color: #e0453c;
}
</style>
