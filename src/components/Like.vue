<template>
  <div class="smainn">
    <div class="alllike">
      <div class="alllikemain">
        <div class="number">
          <p>{{ nlike }}</p>
        </div>

        <div class="like" @click="numlike">
    <i class="fas fa-thumbs-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nlike: 0,
    };
  },
  methods: {
    numlike: function () {
      this.nlike += 1;
      this.$http
        .put(
          "https://tiendatmagic-chat.firebaseio.com/numberlike/like.json",
          this.nlike
        )
        .then();
    },

    getnumlike() {
      this.$http
        .get("https://tiendatmagic-chat.firebaseio.com/numberlike.json")
        .then((response) => {
          return response.json();
        })
        .then((datalike) => {
          const newlike = [];
          for (let keylike in datalike) {
            newlike.push(datalike[keylike]);
          }
          this.nlike = Number(newlike);
        });
    },
  },

  created: function () {
    this.getnumlike();
    setInterval(() => {
      this.getnumlike();
    }, 10000);

    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alllike {
  width: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 130px;
  right: 20px;
}

.like {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.877);
  box-shadow: 0px 5px 10px 0px rgba(131, 131, 131, 0.349);
  display: flex;  
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 23px;
  color: rgb(0, 162, 255);
  cursor: pointer;
}

.number p {
  font-size: 18px;
  margin-bottom: 5px;
}
</style>