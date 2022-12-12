<template>
  <div class="main-blog-page">
    <div class="page-title">
      <h1>Blog Posts</h1>
    </div>
    <ul class="blog-posts">
      <li class="blog-individual-post" v-for="article of articles" :key="article.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img class="blog-image" :src="article.img" alt="">
          <div class="blog-content">
            <h2>{{ article.title }}</h2>
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

<style lang="scss" scoped>
.main-blog-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;

    .blog-posts {
        .blog-individual-post {
            text-align: center;
            .blog-image {
                width: 280px;
                height: 280px;
                object-fit: cover;
            }
        }
    }
}
</style>
