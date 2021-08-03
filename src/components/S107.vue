<template>
  <div class="smainn">
    <br />
    <div id="s107">

  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" />
  <div class="wrapper">
    <div class="header">
      <div class="title">
        Weekly one-on-one
      </div>
      <div class="time">
        Thu Nov 15, 2020 10:00am - 11:00am EST
      </div>
    </div>
    <div class="table">
      <div class="row">
        <div class="name">
          LOCATION
        </div>
        <div class="namerow">
          Kitchener, ON

        </div>

      </div>

      <div class="row">
        <div class="name">
          DESCRIPTION
        </div>
        <div class="namerow">
          No meeting description

        </div>

      </div>
      <div class="row">
        <div class="name">
          ATTENDEES
        </div>
        <div class="namerow">
          <i class="fas fa-check-circle"></i>
          Andrew Parsons


        </div>

      </div>
    </div>
    <div class="footer">
      <button class="decline">
        Decline
      </button>
      <button class="accept">
        Accept
      </button>
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
      var a = document.getElementById("s107").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[107].innerHTML;
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
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    .wrapper {
      width: 100%;
      max-width: 400px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      background-color: #fff;
    }

    .wrapper .header {
      line-height: 35px;
      padding: 20px;
      border-bottom: 1px solid #F3F4F6;
    }

    .wrapper .title {
      font-size: 25px;
    }

    .wrapper .table .row {
      display: flex;
      align-items: center;
      padding: 15px 30px;
      border-bottom: 1px solid #F3F4F6;
    }

    .wrapper .table .row .name {
      flex: 1;

    }

    .wrapper .table .row .namerow {
      display: flex;
      align-items: center;
      flex: 2;

    }

    .wrapper .table .row:nth-child(2) .namerow {
      font-style: italic;

    }

    .wrapper .table .row .namerow i {
      font-size: 20px;
      margin-right: 10px;
    }

    .wrapper .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;

    }

    .wrapper .footer button {
      width: 100%;
      padding: 15px;
      border-radius: 8px;
      border: none;
      outline: none;
      font-weight: bold;
      cursor: pointer;
      font-size: 16px;
      margin: 0 20px;

    }

    .wrapper .footer button.decline {
      background-color: #F3F4F6;
      color: #000;
    }

    .wrapper .footer button.accept {
      background-color: #F43F5E;
      color: #fff;
    }

    @media only screen and (max-width: 400px) {
      .wrapper .table .row {
        display: block;
      }

    }
</style>
