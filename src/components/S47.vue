<template>
  <div class="smainn">
    <br />
    <div id="s47">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
      />
      <div class="checkout-modal">
        <div class="header">
          <div class="back">
            <i class="fas fa-arrow-left"></i>
          </div>
          <div class="title">
            <span>Check out</span>
          </div>
        </div>

        <div class="cardd">
          <div class="card">
            <div class="card-logo"></div>

            <div class="serialnumber">
              <div class="numbers">
                <span> .... </span>
              </div>

              <div class="numbers">
                <span> .... </span>
              </div>

              <div class="numbers">
                <span> .... </span>
              </div>

              <div class="numbers">
                <span> 2321 </span>
              </div>
            </div>

            <div class="card-info">
              <div class="card-infoo">
                <span>CARD HOLDER</span>
                <p>Tiendatmagic</p>
              </div>

              <div class="card-infoo">
                <span>EXPIRY DATE</span>
                <p>01/25</p>
              </div>
            </div>
          </div>
        </div>

        <div class="formcard">
          <form action="javascript:void(null)" class="form">
            <div class="form-input">
              <h5>Credit Card Number</h5>
              <label for="card-number">
                <input
                  type="text"
                  name="cardNumber"
                  id="card-number"
                  placeholder="XXXX XXXX XXXX 2321"
                />
              </label>
            </div>
            <div class="form-input">
              <h5>Card Holder's Name</h5>
              <label for="card-name">
                <input
                  type="text"
                  name="holderName"
                  id="card-name"
                  placeholder="Collin Peabhu J P"
                />
              </label>
            </div>
            <div class="form-mini-input">
              <div class="form-input">
                <h5>Expiry Date</h5>
                <label for="expiry-date">
                  <input
                    type="text"
                    name="expiryDate"
                    id="expiry-date"
                    placeholder="04 / 20"
                  />
                </label>
              </div>
              <div class="form-input">
                <h5>CVV</h5>
                <label for="card-cvv">
                  <input
                    type="text"
                    name="cardCVV"
                    id="card-cvv"
                    placeholder="XXX"
                  />
                </label>
              </div>
            </div>
            <label for="checkbox" class="checkboxx">
              <input type="checkbox" id="checkbox" name="checbox" checked />
              <div class="checker"></div>
              <span>Save this card for future transactions</span>
            </label>
            <footer class="form-footer">
              <h2 class="total">Total: <span>Rs.999</span></h2>
              <button type="submit" class="button">Proceed to Pay</button>
            </footer>
          </form>
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
      var a = document.getElementById("s47").innerHTML;

      document.getElementById("thtml").innerHTML = a;
      document.getElementsByClassName("modal")[0].style.display = "block";

      document.getElementById("html").style.display = "block";
      document.getElementById("css").style.display = "none";
    },
    css() {
      var b = document.getElementsByTagName("style")[47].innerHTML;
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

.checkout-modal {
  width: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  border-radius: 30px;

  font-family: Arial, Helvetica, sans-serif;
}

.header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header .back {
  margin: 20px;
}

.cardd {
  width: 100%;
  padding: 0px 20px;
}

.card {
  width: 100%;

  border-radius: 10px;
  background-color: rgb(30, 30, 184);
  padding: 20px;
}

.card-logo {
  width: 60px;
  height: 35px;
  position: relative;
}

.card-logo::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 35px;
  height: 35px;
  background-color: red;
  border-radius: 50%;
}

.card-logo::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  width: 35px;
  height: 35px;
  background-color: orange;
  border-radius: 50%;
}

.serialnumber {
  display: flex;
  margin: 10px 0px 10px 0px;
  justify-content: space-between;
  font-size: 17px;
  color: #fff;
  font-weight: bold;
}

.card-info {
  display: flex;
  justify-content: space-between;
}

.card-info span {
  font-size: 9px;
  margin: 0px 0px 5px 0px;
  display: block;
  color: rgba(255, 255, 255, 0.342);
}

.card-info p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.61);
}

.card-info .card-infoo:nth-child(1) {
  flex: 50%;
}

.formcard {
  width: 100%;
  margin-top: 20px;
  border-radius: 30px;
  background-color: #fff;
  padding: 20px;
}

.form-input h5 {
  color: #8f8c8c;
}

.form-input input {
  width: 100%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid gray;
  outline: none;
  transition: 0.4s ease-out;
  padding-left: 10%;
  letter-spacing: 4px;
  font-size: 15px;
}

.form-mini-input {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.form-mini-input .form-input:nth-child(1) {
  flex: 3;
}

.form-mini-input .form-input:nth-child(2) {
  flex: 1;
}

.checkboxx {
  display: flex;
  font-size: 12px;
}

.checkboxx input {
  flex: 1;
}

.checkboxx span {
  flex: 5;
}

.form-footer {
  border-top: 1px solid gray;

  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-footer h2 {
  font-size: 16px;
}

.form-footer span {
  font-size: 15px;
  color: rgb(168, 168, 168);
}

.form-footer button {
  width: 130px;
  height: 40px;
  border-radius: 30px;
  background-color: rgb(5, 5, 117);
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
