<template>
  <div class="container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  width: calc(100% - 64px);
  margin: 0 auto;
  max-width: 1000px;
  box-sizing: border-box;
  padding: 32px 0;
}
</style>
