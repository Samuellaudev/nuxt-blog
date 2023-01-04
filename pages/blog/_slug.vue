<template>
    <article class="article-container container">
        <AppSearchInput/>
        <div class="article-header">
            <h1 class="article-title">{{ article.title }}</h1>
            <span class="article-created-date">{{ formatDate(article.createdAt) }}</span>
            <Tags :tags="tags" />
        </div>
        <img class="article-image" :src="require('@/assets/img/macbookPro.jpg')" :alt="article.alt">
        <!-- <p>Article last updated: {{ formatDate(article.updatedAt) }}</p> -->
        <el-menu class="toc-menu">
            <el-submenu class="toc-submenu">
                <template slot="title">
                    <span class="toc-title">Table of Content</span>
                </template>
                <el-menu-item-group v-for="(link) of article.toc" :key="link.id">
                    <el-menu-item>
                        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
        <el-divider />
        <nuxt-content :document="article" />
        <PrevNext :prev="prev" :next="next" />
    </article>
</template>

<script>
import PrevNext from "../../components/PrevNext.vue";

export default {
  components: { PrevNext },
  data() {
    const value = "";

    return { value };
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    // console.log("article", article);

    const tags = await $content("tags")
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { article, tags, prev, next };
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  .article-title {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 0;
  }

  .article-created-date {
    color: rgba(209, 226, 226, 0.8);
    font-size: 14px;
    display: inline-block;
    margin: 10px 0;
    margin-bottom: 20px;
  }

  .article-description {
    max-width: 80%;
  }

  .article-image {
    max-width: 50%;
    max-height: 50%;
    display: block; /* remove extra space below image */
  }

  .toc-menu {
    background: none;
    border: none;

    .toc-submenu {
      .toc-title {
        color: white;
      }

      .el-submenu__title {
        width: 330px;
      }
    }

    .el-menu {
      background: none;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      transition: 0s;
      padding-top: 10px;

      .el-menu-item {
        line-height: 0px;
        padding-left: 0px;
      }

      .el-menu-item-group__title {
        display: none;
      }

      .el-menu-item.is-active {
        color: rgba(209, 226, 226, 0.6);
        padding-left: 0px !important;
        height: 30px;
        text-decoration: none;

        &:hover {
          color: rgba(209, 226, 226, 1);
          background: none;
        }
      }
    }
  }

  .toc-menu,
  .el-submenu {
    width: 330px;
  }

  .el-submenu__title:hover {
    background: none;
  }

  .nuxt-content {
    p {
      margin-bottom: 20px;
    }

    h1 {
      font-weight: bold;
      font-size: 28px;
    }

    h2 {
      font-weight: 400;
      line-height: 2em;
    }

    h3 {
      font-weight: bold;
      padding-top: 0.3em;
    }

    // .icon.icon-link {
    //     background-image: url("~assets/svg/icon-hashtag.svg");
    //     display: inline-block;
    //     width: 20px;
    //     height: 20px;
    //     background-size: 20px 20px;
    // }

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

  .el-divider {
    background-color: rgba(255, 255, 255, 0.2);
    max-width: 100%;
  }
}
</style>
