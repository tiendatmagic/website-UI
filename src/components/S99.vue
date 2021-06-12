<template>
  <div class="smainn">
    <br />
    <div id="s99">



    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
    />
    <div class="card">
      <div class="cardinfo">
        <div class="selection">
          <div class="option basic active">
            Basic
          </div>
          <div class="option standard">
            Standard
          </div>
          <div class="option team">
            Team
          </div>
        </div>
        <div class="pricing">
          <div class="pricingcard">
            <div class="cardheader">
              <div class="price">
                <span>
                  <sup>
                    $
                  </sup>
                  <b>19</b>/mon
                </span>
              </div>
              <div class="namecard">
                <b>
                  For beginner use
                </b>
              </div>
            </div>
            <div class="info">
              <ul>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    100GB Premium Bandwith
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    FREE 50+ Installation Scripts Wordpress supported
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    One FREE Domain Registration .com and .np extensions only
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    Unlimited Email Accounts & Databases
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="pricingcard">
            <div class="cardheader">
              <div class="price">
                <span>
                  <sup>
                    $
                  </sup>
                  <b>99</b>/mon
                </span>
              </div>
              <div class="namecard">
                <b>
                  For professional use
                </b>
              </div>
            </div>
            <div class="info">
              <ul>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    Unlimited Premium Bandwith
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    FREE 200+ Installation Scripts Wordpress supported
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    Five FREE Domain Registration .com and .np extensions only
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    Unlimited Email Accounts & Databases
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="pricingcard">
            <div class="cardheader">
              <div class="price">
                <span>
                  <sup>
                    $
                  </sup>
                  <b>49</b>/mon
                </span>
              </div>
              <div class="namecard">
                <b>
                  For team collaboration
                </b>
              </div>
            </div>
            <div class="info">
              <ul>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    200GB Premium Bandwith
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    FREE 100+ Installation Scripts Wordpress supported
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    Two FREE Domain Registration .com and .np extensions only
                  </span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>
                    Unlimited Email Accounts & Databases
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="button-group">
          <button>
            Choose plan
          </button>
        </div>
      </div>
    </div>


    </div>
    <code style="display: none">

      document.getElementsByClassName("option")[0].onclick = () => {
        document.getElementsByClassName("pricing")[0].style.transform =
          "translateX(0%)";

        for (
          var i = 0;
          i > document.getElementsByClassName("option").length;
          i++
        ) {
          document
            .getElementsByClassName("option")
            [i].classList.remove("active");
        }
        document.getElementsByClassName("option")[0].classList.add("active");
      };

      document.getElementsByClassName("option")[1].onclick = () => {
        document.getElementsByClassName("pricing")[0].style.transform =
          "translateX(-33.3%)";
        for (
          var i = 0;
          i > document.getElementsByClassName("option").length;
          i++
        ) {
          document
            .getElementsByClassName("option")
            [i].classList.remove("active");
        }
        document.getElementsByClassName("option")[1].classList.add("active");
      };

      document.getElementsByClassName("option")[2].onclick = () => {
        document.getElementsByClassName("pricing")[0].style.transform =
          "translateX(-66.66%)";
        for (
          var i = 0;
          i > document.getElementsByClassName("option").length;
          i++
        ) {
          document
            .getElementsByClassName("option")
            [i].classList.remove("active");
        }
        document.getElementsByClassName("option")[2].classList.add("active");
      };
    </code>
    <div class="buttonhtmlcss">
         <button @click="html()" class="btn">Xem HTML</button
      ><button @click="js()" class="btn">Xem Javascript</button>
      <button @click="css()" class="btn">Xem CSS</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    html() {
      var a = document.getElementById("s99").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[99].innerHTML;
      document.getElementById("tcss").innerHTML = b;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "block";
    },js() {
      var c = document.getElementsByTagName("code")[8].innerHTML;
      document.getElementById("tjs").innerHTML = c;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "none";
      document.getElementById("css").style.display = "none";
      document.getElementById("javascript").style.display = "block";
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


      .card {
        width: 100%;
        max-width: 360px;
        padding: 20px;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0 2px 14px rgb(0 0 0 / 20%);
        font-family: "Poppins", sans-serif;
        margin: 0 auto;
      }
      .cardinfo {
        overflow: hidden;
      }

      .card .selection {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        padding: 5px;
        border-radius: 30px;
        border: 1px solid #b8b8b8;
      }

      .card .selection .option {
        border-radius: 30px;
        padding: 5px 15px;
        cursor: pointer;
      }

      .card .selection .option.active {
        background-image: linear-gradient(to right, #ab8bcc, #6482bd);
        color: #fff;
      }

      .pricing {
        display: flex;
        width: 300%;
        transform: translateX(0%);
        transition: 0.4s ease;
      }

      .pricingcard {
        border: 1px solid #fff;
      }

      .cardheader {
        text-align: center;
        padding: 15px;
        width: 100%;
        border-bottom: 1px solid #000;
      }

      .cardheader .price sup {
        position: relative;
        bottom: 15px;
        font-size: 20px;
      }

      .cardheader .price b {
        font-size: 50px;
      }

      .cardheader .namecard {
        text-align: center;
        margin: 10px 0;
      }

      .info {
        margin-top: 10px;
      }

      .info ul li {
        list-style: none;
        flex-wrap: wrap;
        font-size: 15px;
        font-weight: 600;
        color: #585858;
        margin: 10px 0;
      }

      .info ul li i {
        margin: 0 6px;
        color: #88a2dd;
      }

      .button-group {
        margin: 10px auto;
        text-align: center;
      }

      .button-group button {
        width: 100%;
        height: 40px;
        border-radius: 30px;
        border: none;
        outline: none;
        background-image: linear-gradient(to right, #ab8bcc, #6482bd);
        color: #f8f8f8;
        letter-spacing: 1px;
        font-size: 17px;
        cursor: pointer;
      }

</style>
