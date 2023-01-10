<template>
<div class="tag-container">
    <div v-for="(tag, index) in tags" :key="index" class="tag">
        <NuxtLink :to="`/blog/tag/${tag.name}`">
            <p class="tag-name">{{ tag.name }}</p>
        </NuxtLink>
    </div>
</div>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.tag-container {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 0.8rem;

    .tag {
      font-size: 14px;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 50%);
      padding: 3px 10px;
      border-radius: 20px;
      background: rgba(255,255,255,0.1);
    }
}
</style>
