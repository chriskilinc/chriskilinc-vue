<template>
  <div class="hello">
    <h2>My name is Christopher Kilinc and this is me</h2>
    <p>
      I am an
      <span class="highlighted">
        <router-link to="/dev">Software Developer</router-link>
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
