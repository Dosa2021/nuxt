<template>
  <section class="products">
    <h2>Actors</h2>
    <ul>
      <li>
        <NuxtLink to="">
          <img src="/mei_1.jpg" alt="すごい丸椅子" width="400" />
          <h3>Mei</h3>
          <!-- <p></p> -->
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
