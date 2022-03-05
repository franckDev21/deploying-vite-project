<template>
  <div class="home">
    <h5>Welcome <span class="name">{{user.firstname}}</span></h5>
    <form>
      <input v-model="firstname" type="text" placeholder=" your firstname...">
      <button @click.prevent="changeName" :class="loading ? 'load':''">
        {{loading ? 'loading...':'change your firstname'}}
      </button>
    </form>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";

export default {
  name: "Home",
  data(){
    return {
      loading : false,
      firstname : ''
    }
  },
  mounted() {
    this.firstname = this.user.firstname
  },
  computed : mapGetters(['user']),
  methods : {
    ...mapActions(['setFirstname']),

    async changeName(){
      this.loading = true
      let time = setTimeout(()=>{
        this.setFirstname(this.firstname)
        this.loading = false
      },3000);
    }
  }
}
</script>

<style scoped lang="scss">
 h5{
   width: 90%;
   margin: 1rem auto;
 }
  .name{
    background-color: #42b983;
    word-break: break-all;
  }
  form{
    input,button{
      width: 80%;
      padding: .5rem;
      border-radius: .4rem;
      font-size: 1.3rem;
    }
    button{
      width: 86%;
      margin-top: 1rem;
      background-color: #42b983;
      outline: none;
      border: none;
      color: #fff;
      cursor: pointer;
      &.load{
        opacity: .8;
        pointer-events: none;
        cursor: not-allowed;
      }
    }
  }
</style>