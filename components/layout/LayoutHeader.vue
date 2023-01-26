<template>
  <div class="layout-header">
    <div class="container">
      <div class="header-logo">
        <nuxt-link to="/">
          <img class="logo-image" :src="require('@/assets/img/Logo.png')" />
        </nuxt-link>
      </div>
      <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="about">
          <nuxt-link :to="{ path: '/',hash:'#about'}">About</nuxt-link>
        </el-menu-item>
        <el-menu-item index="blog">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </el-menu-item>
      </el-menu>
      <div class="social-media-icons">
        <div v-for="icon of socialIconsSettings" :key="icon.address">
          <a class="icon" :href="icon.address" target="_blank">
            <font-awesome-icon :icon="`fa-brands ${icon.icon}`" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const activeIndex = "about";

    const socialIconsSettings = [
      {
        address: "https://www.instagram.com/samuel_cf_lau/",
        icon: "fa-instagram",
      },
      {
        address: "https://github.com/samuelauweb",
        icon: "fa-github",
      },
      {
        address: "https://www.linkedin.com/in/lau-chun-fong/",
        icon: "fa-linkedin",
      },
    ];

    return { activeIndex, socialIconsSettings };
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
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 100%);
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;
    height: 60px;
    background-color: rgba(0, 31, 38, 0.5);
    backdrop-filter: blur(2px);

    .logo-image {
      background: white;
      margin-top: 10px;
      max-width: 40px;
      margin-bottom: 0px;
    }

    .header-menu {
      // background-color: rgba(0,31,38,0);
      color: white;

      ::v-deep.el-menu.el-menu--horizontal {
        border-bottom: none;
        background-color: rgba(0, 31, 38, 0);

        .el-menu-item,
        .el-menu-item.is-active {
          border-bottom: none;
          background-color: rgba(0, 31, 38, 0);
          font-size: 1.5em;
        }
      }

      ::v-deep .el-menu-item {
        font-size: 18px;
        font-weight: bold;
      }

      a {
        color: white;
        font-weight: 300;

        &:hover {
          color: gray;
          text-decoration: none;
        }
      }
    }

    .social-media-icons {
      display: flex;
      justify-content: space-between;
      width: 90px;

      .icon {
        line-height: 66px;
        font-size: 1.5em;
      }
    }
  }
}
</style>
