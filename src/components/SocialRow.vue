<template>
  <section class="socialrow">
    <a class="icon" href="https://github.com/chriskilinc" target="_blank" title="GitHub" rel="noreferrer noopener">
      <img class="icon" src="../assets/github_logo.svg" alt="GitHub" />
    </a>
    <a
      class="icon"
      href="https://www.linkedin.com/in/chriskilinc/"
      target="_blank"
      title="LinkedIn"
      rel="noreferrer noopener"
    >
      <img class="icon" src="../assets/linkedin_logo.svg" alt="LinkedIn icon" />
    </a>
    <a class="icon" href="https://twitter.com/chriskilinc" target="_blank" title="Twitter" rel="noreferrer noopener">
      <img class="icon" src="../assets/twitter_logo.svg" alt="Twitter icon" />
    </a>
    <a
      href="mailto:chriskilinc@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >chriskilinc@gmail.com</a>
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
  align-items: center;

  a {
    &:hover {
      .selectRules();
    }
    &:focus {
      .selectRules();
    }
  }

  .icon {
    transition: cubic-bezier(0.19, 1, 0.22, 1) 0.25s;
    margin: 0 6px 0 0;
    border-bottom: 2.5px solid transparent;
    outline: none !important;
  }

  .link {
    transition: cubic-bezier(0.19, 1, 0.22, 1) 0.25s;
    border-bottom: 2.5px solid transparent;
    outline: none !important;

    &:hover {
      .selectRules();
    }
    &:focus {
      .selectRules();
    }
  }

  img {
    width: 26px;
    height: 26px;
    padding: 0 0 4px 0;
    @media screen and (max-width: 450px) {
      width: 22px;
      height: 22px;
    }
  }

  .selectRules() {
    .icon {
      border-color: var(--colorLightRed);
    }
    &.link {
      border-color: var(--colorLightRed);
    }
  }
}
</style>
