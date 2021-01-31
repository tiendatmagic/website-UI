<template>
  <div class="smainn">
    <div class="allup">
      <div class="up">
        <a href="#app">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.allup {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  left: 20px;
  z-index: 9;
}

.up {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.808);
  box-shadow: 0px 5px 10px 0px rgba(131, 131, 131, 0.349);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 23px;
  cursor: pointer;
  z-index: 999999;
  transition: 0.5s ease-out;
}

a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  z-index: 999999;
}
</style>
