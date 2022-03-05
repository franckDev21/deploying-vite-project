<template>
  <div class="not-found">
    <h5 class="title">Not Fount</h5>
    <div class="code">404</div>
    <router-link to="/">back to home page</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped lang="scss">
  .not-found{
    margin: 0 auto;
    width: 70%;
    box-shadow: 1px 0 5px #eee;
    background-color: #eeeeee;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    text-align: left;
    .title{
      color: #2c3e50;
      font-size: 2rem;
      margin: 0;
    }
    .code{
      font-size: 5rem;
      color: #42b983;
    }
    a{
      padding: .5rem 1rem;
      background-color: #42b983;
      color: #eee;
      border-radius: .2rem;
      text-decoration: none;
      font-size: 1.1rem;
    }
  }
</style>