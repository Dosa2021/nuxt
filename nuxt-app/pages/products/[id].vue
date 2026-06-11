<script setup>
useHead({
  title: "すごい丸椅子 | DTFNTR - 目黒のアンティーク家具専門店",
});
</script>

<template>
  <section class="product">
    <div class="desc">
      <h2>すごい丸椅子</h2>
      <p>
        すごい丸椅子です。すごい丸椅子です。すごい丸椅子です。すごい丸椅子です。すごい丸椅子です。すごい丸椅子です。すごい丸椅子です。すごい丸椅子です。すごい丸椅子です。
      </p>
      <p>12,000円 (税込)</p>
      <button>購入する</button>
    </div>
    <div class="pic">
      <!-- <img src="/product-0.png" alt="すごい丸椅子" width="400" height="400" /> -->
    </div>
  </section>
</template>

<style scoped>
/* product */

.product {
  display: flex;
  gap: 32px;
  margin-top: 32px;
}

.product img {
  width: 100%;
  height: auto;
}

.product div {
  flex: 1;
}

.product p {
  margin-top: 16px;
}

.product button {
  margin-top: 16px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
