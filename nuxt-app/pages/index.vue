<script setup>
const products = useState("products");
</script>

<template>
  <section class="products">
    <h2>Actors</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">
          <img :src="product.imgUrl" alt="Actor" />
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
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.products li {
  padding-bottom: 30px;
}

.products a {
  /* display: block; */
}

.products img {
  width: 300px;
  height: auto;
}

.products h3 {
  margin-top: 8px;
}

@media screen and (max-width: 768px) {
  .products li {
    margin: 0 auto;
  }
}
</style>
