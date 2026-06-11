<script setup>
useHead({
  title: "Dosa",
});

useState("products", () => [
  {
    id: 0,
    name: "Mei",
    price: 12000,
    imgUrl: "/mei_3.webp",
    imgUrl_2: "/mei_4.jpg",
    desc: "終電、なくなっちゃったね、、、",
  },
  { id: 1, imgUrl: "/ume.jpg", name: "Daigo", price: 15000 },
  { id: 2, imgUrl: "/yumi.webp", name: "Yumi", price: 30000 },
  { id: 3, imgUrl: "/hori.png", name: "Shingo", price: 30000 },
]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
