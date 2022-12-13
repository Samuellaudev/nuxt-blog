<template>
    <article class="article-container container">
        <AppSearchInput/>
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <img class="article-image" :src="require('@/assets/img/macbookPro.jpg')" :alt="article.alt">
            <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
            <nav>
                <ul>
                    <li v-for="link of article.toc" :key="link.id">
                        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                    </li>
                </ul>
            </nav>
            <el-divider />
            <nuxt-content :document="article" />
            <Author :author="article.author" />
            <PrevNext :prev="prev" :next="next" />
    </article>
</template>

<script>
import PrevNext from "../../components/PrevNext.vue";
export default {
    components: { PrevNext },
    async asyncData({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();
        console.log("article", article);
        const [prev, next] = await $content("articles")
            .only(["title", "slug"])
            .sortBy("createdAt", "asc")
            .surround(params.slug)
            .fetch();

        return { article, prev, next };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        },
    },
};
</script>

<style lang="scss">
.article-container {  
    .article-image {
        max-width: 100%;
        max-height: 100%;
        display: block; /* remove extra space below image */
    }

    .nuxt-content {
        p {
            margin-bottom: 20px;
        }
    
        h2 {
            font-weight: bold;
            font-size: 28px;
        }
    
        h3 {
            font-weight: bold;
            font-size: 22px;
        }
    
        .icon.icon-link {
            background-image: url("~assets/svg/icon-hashtag.svg");
            display: inline-block;
            width: 20px;
            height: 20px;
            background-size: 20px 20px;
        }
    
        .another-test-h2 {
            color: aqua;
        }
    
        .nuxt-content-highlight {
            position: relative;
    
            .filename {
                position: absolute;
                right: 0;
                color: gray;
                z-index: 100;
                font-weight: light;
                font-size: 12px;
                margin-right: 10px;
                margin-top: 5px;
                font-family: monospace;
            }
        }
    }
}
</style>
