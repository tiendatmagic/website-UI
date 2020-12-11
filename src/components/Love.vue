<template>
  <div class="smainn">
    <div class="alllove">
      <div class="alllovemain">
        <div class="number">
          <p>{{ number }}</p>
        </div>

        <div class="love" @click="numbe">
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    numbe: function () {
      this.number += 1;
      this.$http
        .put(
          "https://tiendatmagic-chat.firebaseio.com/number/num.json",
          this.number
        )
        .then();
    },

    getnumbe() {
      this.$http
        .get("https://tiendatmagic-chat.firebaseio.com/number.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const newArr = [];
          for (let key in data) {
            newArr.push(data[key]);
          }
          this.number = Number(newArr);
        });
    },
  },

  created: function () {
    this.getnumbe();
    setInterval(() => {
      this.getnumbe();
    }, 10000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alllove {
  width: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 20px;
}

.love {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.877);
  box-shadow: 0px 5px 10px 0px rgba(131, 131, 131, 0.349);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 23px;
  color: rgb(255, 0, 0);
  cursor: pointer;

}

.number p {
  font-size: 18px;
  margin-bottom: 5px;
}
</style>
