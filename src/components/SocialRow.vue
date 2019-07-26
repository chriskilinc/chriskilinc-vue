<template>
  <section class="socialrow">
    <a href="https://github.com/chriskilinc" target="_blank" title="GitHub">
      <img class="icon" src="../assets/github_logo.svg" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/chriskilinc/" target="_blank" title="LinkedIn">
      <img class="icon" src="../assets/linkedin_logo.svg" alt="LinkedIn" />
    </a>
    <a href="https://twitter.com/chriskilinc" target="_blank" title="Twitter">
      <img class="icon" src="../assets/twitter_logo.svg" alt="Twitter" />
    </a>
    <!-- <p>SocialRow</p> -->
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SocialRow extends Vue {
  @Prop() private color!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.socialrow {
  display: flex;
  flex-direction: row;

  a {
    margin: 0 14px 0 0;

    &:hover {
      .selectRules();
    }
    &:focus {
      .selectRules();
    }

    .icon {
      height: 28px;
      height: 28px;
      padding: 0 0 4px 0;
    }
  }
}
.selectRules() {
  border-bottom: 2.5px solid var(--colorLightRed);
  outline: none;
}
</style>
