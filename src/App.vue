<template>
  <div id="app">
    <section id="header">
      <!-- <div class="circle"></div> -->
      <h1>Hello</h1>
    </section>
    <router-view />
  </div>
</template>

<style lang="less">
:root {
  --colorTeal: rgba(79, 192, 141, 0.5);
  --colorRed: hsl(12.7, 97.4%, 55.3%);
  --colorDarkRed: hsl(345.8, 68.4%, 50.4%);
  --colorLightRed: hsl(358.7, 100%, 73.5%);
  --colorDeepRed: #f41851;
  --colorOrange: #ff9966;
  --colorCream: #fcfbe3;

  ::selection {
    background: var(--colorLightRed); /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: var(--colorLightRed); /* Gecko Browsers */
  }
}

#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.4;
  padding: 5vh 10vw;

  h1 {
    font-size: 2.5em;
    margin-bottom: 0;
    @media screen and (max-width: 450px) {
      font-size: 1.75em;
    }
  }

  h2 {
    margin-bottom: 0;
    @media screen and (max-width: 450px) {
      font-size: 1em;
    }
  }

  p {
    font-size: 18px;
    max-width: 32em;
    @media screen and (max-width: 450px) {
      font-size: 1em;
    }
  }

  a {
    text-decoration: none;
    font-size: 1em;
    line-height: 1;
    color: inherit;

    @media screen and (max-width: 450px) {
      font-size: 1em;
    }

    &.highlighted:hover {
      .highlightedSelected();
    }
    &.highlighted:focus {
      .highlightedSelected();
    }

    &.back {
      color: var(--colorDarkRed);
    }

    .highlightedSelected() {
      color: var(--colorCream);
      outline: none;
      &::after {
        top: 10%;
      }
    }
  }
}
#header {
  .circle {
    width: 125px;
    height: 125px;
    background: var(--colorLightRed);
    border-radius: 100px;
  }
}

.highlighted {
  position: relative;
  white-space: nowrap;
}

.highlighted::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 66%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: var(--colorLightRed);
  border-radius: 0 5px 5px 0px;
}

.arrow-back {
  color: var(--colorLightRed) !important;
}
</style>
