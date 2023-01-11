<template>
  <div class="container-prev-next">
    <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }" class="link link-prev">
      <i class="el-icon-back" />
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }" class="link link-next">
      {{ next.title }}
      <i class="el-icon-right" />
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
.container-prev-next {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;

  .link {
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease-out;
  }

  .link-prev:hover {
      transform: translate(-10px, 0px);
      transition: all 0.3s ease-out;
    }
  .link-next:hover {
      transform: translate(10px, 0px);
      transition: all 0.3s ease-out;
    }
}
</style>
