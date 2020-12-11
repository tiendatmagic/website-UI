<template>
  <div class="smainn">
    <div class="alllike" style="display:none">
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
      nlike: null,
    };
  },
  methods: {
    numlike: function () {
      this.nlike += 1;
      this.$http
        .put(
          "https://tiendatmagicuidesign-default-rtdb.firebaseio.com/numberlike/like.json",
          this.nlike
        )
        .then();
    },

    getnumlike() {
      this.$http
        .get("https://tiendatmagicuidesign-default-rtdb.firebaseio.com/numberlike.json")
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

  mounted: function () {
     setTimeout(() => {
      document.getElementsByClassName("alllike")[0].style.display='block';
    },3000)
    
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
  
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 120px;
  right: 20px;
  z-index: 9;
}

.like {
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.877);
  box-shadow: 0px 5px 10px 0px rgba(131, 131, 131, 0.349);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 23px;
  color: rgb(0, 204, 255);
  cursor: pointer;
  z-index: 999999;
}

.number p {
  font-size: 18px;
  margin-bottom: 5px;
}
</style>