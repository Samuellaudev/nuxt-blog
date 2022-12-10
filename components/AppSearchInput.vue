<template>
  <div class="search-bar">
    <input v-model="searchQuery" type="search" autocomplete="off" placeholder="Search Articles" />
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        const searchQuery = "";

        const articles = [];

        return { searchQuery, articles };
    },
    watch: {
        async searchQuery(searchQuery) {
            if (!searchQuery) {
                this.articles = [];
                return;
            }

            this.articles = await this.$content("articles")
                .limit(6)
                .search(searchQuery)
                .fetch();
        },
    },
};
</script>
