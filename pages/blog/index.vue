<template>
<div class="main-blog-page">
    <div class="page-title"><h1>Blog Posts</h1></div>
    <div class="blog-posts">
        <div class="blog-individual-post" v-for="article of articles" :key="article.slug">
            <nuxt-link class="blog-link" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <img class="blog-image" :src="article.img" alt="">
            </nuxt-link>
            <nuxt-link class="blog-link" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <div class="blog-content">
                  <h2 class="blog-title">{{ article.title }}</h2>
                  <p class="blog-description">{{ article.description }}</p>
                </div>
            </nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content("articles")
            .only(["title", "description", "img", "slug", "author"])
            .sortBy("createdAt", "desc")
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
            display: flex;
            align-items: start;
            padding: 1rem;
            .blog-link {
                display: inline-block;

                .blog-content {
                    padding-left: 1rem;
                }
            }
            .blog-image {
                width: 10rem;
                height: 10rem;
                object-fit: cover;

                &:hover {
                    transition: 0.3s;
                    -webkit-transform: scale(1.3);
                    -ms-transform: scale(1.3);
                    transform: scale(1.1);
                }
            }
        }
    }
}
</style>
