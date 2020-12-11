<template>
  <div class="smainn">
    <div class="alllove">
      <div class="alllovemain">
        <div class="number">
          <p>{{ nlove }}</p>
        </div>

        <div class="love" @click="numlove">
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
      nlove: 0,
    };
  },
  methods: {
    numlove: function () {
      this.nlove += 1;
      this.$http
        .put(
          "https://tiendatmagic-chat.firebaseio.com/numberlove/love.json",
          this.nlove
        )
        .then();
    },

    getnumlove() {
      this.$http
        .get("https://tiendatmagic-chat.firebaseio.com/numberlove.json")
        .then((response) => {
          return response.json();
        })
        .then((datalove) => {
          const newLove = [];
          for (let keylove in datalove) {
            newLove.push(datalove[keylove]);
          }
          this.nlove = Number(newLove);
        });
    },
  },

  mounted: function () {
    this.getnumlove();
    setInterval(() => {
      this.getnumlove();
    }, 10000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alllove {
  
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 9;
}

.love {
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.877);
  box-shadow: 0px 5px 10px 0px rgba(131, 131, 131, 0.349);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 23px;
  color: rgb(255, 0, 0);
  cursor: pointer;
  z-index: 999999;
}

.number p {
  font-size: 18px;
  margin-bottom: 5px;
}
</style>