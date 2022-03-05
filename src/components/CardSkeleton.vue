<template>
  <div class="card">
    <div class="container">
      <div class="card__img">
        <span></span>
      </div>
      <div class="card__content">
        <div class="card__sub-title"></div>
        <h2 class="card__name"></h2>
        <p>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSkeleton"
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
      border: .4rem solid lighten(#42b983,20);

      //  a 630px
      @media (max-width: 620px) {
        margin: 0 auto;
      }
      span{
        display: inline-block;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        animation: load 1s infinite;
      }
    }
    &__content{
      padding-top: .4rem;
      margin-left: 1rem;
      width: 100%;
      //  a 630px
      @media (max-width: 620px) {
        margin-left: 0;
      }
    }
    &__sub-title{
      font-size: 1.5rem;
      height: 1.5rem;
      margin-bottom: .4rem;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      animation: load 1s infinite;
      //  a 630px
      @media (max-width: 620px) {
        font-size: 1.1rem;
      }
    }
    &__name{
      width: 70%;
      height: 2rem;
      margin: 0 auto;
      margin-bottom: .4rem;
      animation: load 1s infinite;
      //  a 630px
      @media (max-width: 620px) {
        font-size: 2rem;
      }
    }
    & p{
      font-size: 1.4rem;
      margin: 0;
      opacity : .6;
      word-break: break-all;
      padding: 2rem;
      animation: load 1s infinite;
      //  a 630px
      @media (max-width: 620px) {
        font-size: 1.1rem;
      }
    }
  }

  @keyframes load {
    0%{
      background-color: #eee;
    }
    50%{
      background-color: #eaeaea;
    }
    100%{
      background-color: #eee;
    }
  }
</style>