<template>
    <article>
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <img :src="require('@/assets/img/macbookPro.jpg')" :alt="article.alt">
        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
        <nuxt-content :document="article" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params}) {
        const article = await $content('articles', params.slug).fetch()
console.log('article', article);
        return { article }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>

<style scoped lang="scss">
.nuxt-content {
    h2 {
        font-weight: bold;
        font-size: 28px;
    }

    h3 {
        font-weight: bold;
        font-size: 22px;
    }

    p {
        margin-bottom: 20px;
    }
}
</style>