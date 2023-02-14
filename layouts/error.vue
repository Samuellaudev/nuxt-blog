<template>
<div class="page-error container">
    <div class="page-not-found mb-2">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
    </div>
    <p>Back to <nuxt-link to="/">Home page</nuxt-link></p>
</div>
</template>

<script>
export default {
    props: ['error']
}
</script>

<style scoped lang="scss">
.page-error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
