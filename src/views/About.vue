<template>
  <div class="about">
    <Card :firstname="user.firstname"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Card from "../components/Card.vue";

export default {
  name: "About",
  components :{
    Card
  },
  computed : mapGetters(['user'])
}
</script>

<style scoped lang="scss">

</style>