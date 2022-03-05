<template>
  <div class="card">
    <div class="container">
      <div class="card__img">
        <img src="../assets/profil.jpg" alt="profil">
      </div>
      <div class="card__content">
        <div class="card__sub-title">Whritten by</div>
        <h2 class="card__name">{{ firstname }}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid excepturi porro voluptatibus.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props : {
    firstname : {
      type : String,
      required : true
    }
  }
}
</script>

<style scoped lang="scss">
  .card{
  background-color: #fff;
  padding: 1.2rem;
  width: 70%;
  margin: 0 auto;
  color: #2c3e50;
  border-radius: .6rem;
  text-align: left;
  .container{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    //  a 630px
    @media (max-width: 620px) {
      flex-direction: column;
      text-align: center;
    }
  }
  &__img{
    width: 7rem;
    height: 7rem;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    flex: none;
    border: .4rem solid #42b983;
    padding: .3rem;
    //  a 630px
    @media (max-width: 620px) {
      margin: 0 auto;
    }
    img{
      border-radius: 50%;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
  &__content{
    padding-top: .4rem;
    margin-left: 1rem;
    //  a 630px
    @media (max-width: 620px) {
      margin-left: 0;
    }
  }
  &__sub-title{
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: .2rem;
    opacity : .6;
    //  a 630px
    @media (max-width: 620px) {
      font-size: 1.1rem;
    }
  }
  &__name{
    font-size: 2.5rem;
    margin: 0;
    padding: .4rem 0;
    word-break: break-all;
    //  a 630px
    @media (max-width: 620px) {
      font-size: 2rem;
    }
  }
  & p{
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    opacity : .6;
    word-break: break-all;
    //  a 630px
    @media (max-width: 620px) {
      font-size: 1.1rem;
    }
  }
}
</style>