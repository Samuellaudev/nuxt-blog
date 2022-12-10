<template>
  <div class="main-blog-page">
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img width="500px" :src="article.img" alt="">
          <div class="blog-content">
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content("articles")
            .only(["title", "description", "img", "slug", "author"])
            .sortBy("createdAt", "asc")
            .fetch();

        return {
            articles,
        };
    },
};
</script>
