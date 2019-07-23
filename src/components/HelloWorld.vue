<template>
  <div class="hello">
    <section>
      <h2>My name is Christopher Kilinc</h2>
    </section>
    <section>
      <p>
        I am a self-taught
        <span>
          <router-link to="/dev" class="highlighted">Software Developer</router-link>
        </span>
        working at If P&amp;C Insurance in Sweden.
        <br />You can find my open source projects over at
        <a
          href="https://github.com/chriskilinc"
          class="highlighted"
          target="_blank"
        >GitHub</a>.
      </p>
    </section>
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
