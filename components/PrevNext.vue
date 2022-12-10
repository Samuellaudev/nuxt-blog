<template>
  <div class="container-prev-next">
    <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug }}" class="link link-prev">
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug }}" class="link link-next">
      {{ next.title }}
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

    .link {
        font-weight: bold;
        text-decoration: none;

        &:hover {
            background: black;
            color: white;
        }
    }
}
</style>
