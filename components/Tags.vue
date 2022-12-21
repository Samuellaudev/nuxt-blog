<template>
<div>
    <div v-for="(tag, index) in tags" :key="index">
        <NuxtLink :to="`/blog/tag/${tag.name}`">
            <p>{{ tag.name }}</p>
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
