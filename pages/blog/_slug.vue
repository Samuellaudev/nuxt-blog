<template>
    <article>
        <nuxt-content :document="article" />
        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params}) {
        const article = await $content('articles', params.slug).fetch()

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