<script setup>
const products = [
  { id: 0, imgUrl: "/mei_2.webp", name: "Mei", price: 12000 },
  { id: 1, imgUrl: "/ume.jpg", name: "Daigo", price: 15000 },
  { id: 2, imgUrl: "/yumi.webp", name: "Yumi", price: 30000 },
  { id: 3, imgUrl: "/hori.png", name: "Shingo", price: 30000 },
];
</script>

<template>
  <section class="products">
    <h2>Actors</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <NuxtLink to="">
          <img :src="product.imgUrl" alt="すごい丸椅子" width="400" />
          <h3>{{ product.name }}</h3>
          <!-- <p>{{ product.price.toLocaleString() }}</p> -->
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* products */

.products h2 {
  margin-top: 32px;
}

.products ul {
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
}

.products a {
  display: block;
}

.products img {
  width: 100%;
  height: auto;
}

.products h3 {
  margin-top: 8px;
}
</style>
