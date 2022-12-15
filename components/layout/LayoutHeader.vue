<template>
<div class="layout-header">
  <div class="header-logo">
      <nuxt-link to="/">
          <img class="logo-image" :src="require('@/assets/img/Logo.png')" />
      </nuxt-link>
    </div>
  <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="about">
            <nuxt-link to="/about">About</nuxt-link>
        </el-menu-item>
        <el-menu-item index="blog">
            <nuxt-link to="/blog">Blog</nuxt-link>
        </el-menu-item>
    </el-menu>
    <div class="header-social-media-icons">
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "about",
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style scoped lang="scss">
.layout-header {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;
    .logo-image {
        background: white;
        margin-top: 10px;
        max-width: 40px;
        margin-bottom: 0px;
    }
    .header-menu {
        ::v-deep.el-menu.el-menu--horizontal {
            border-bottom: none;

            .el-menu-item,
            .el-menu-item.is-active {
                border-bottom: none;
            }
        }

        ::v-deep .el-menu-item {
            font-size: 18px;
            font-weight: bold;
        }

        a {
            color: black;

            &:hover {
                color: gray;
                text-decoration: none;
            }
        }
    }
}
</style>
