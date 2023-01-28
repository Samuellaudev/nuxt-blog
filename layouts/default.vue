<template>
    <div>
        <el-header>
            <LayoutHeader @open-menu="handleOpenMenu" />
        </el-header>
        <Nuxt class="default-nuxt-content" />
        <el-footer>
            <LayoutFooter />
        </el-footer>
        <!-- LayoutSidebar -->
        <el-drawer class="side-bar-drawer" ref="drawer" :title="null" size="40%" :visible.sync="drawerSettings.drawer" :direction="drawerSettings.direction" :show-close="false">
            <header @click="closeMenu" class="drawer-header">CLOSE MENU <i class="el-icon-circle-close" /></header>
            <el-menu class="header-menu" mode="vertical">
                <el-menu-item index="about">
                    <nuxt-link :to="{ path: '/', hash: '#about' }">About</nuxt-link>
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
        </el-drawer>
        <el-backtop />
    </div>
</template>

<script>
import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutFooter from "@/components/layout/LayoutFooter";

export default {
    components: { LayoutHeader, LayoutFooter },
    data() {

        const drawerSettings = {
            drawer: false,
            direction: 'rtl'
        }

        const socialIconsSettings = this.$config.socialMediaIcons

        return { drawerSettings, socialIconsSettings };
    },
    methods: {
        handleOpenMenu() {
            this.drawerSettings.drawer = true
        },
        closeMenu() {
            this.$refs.drawer.closeDrawer()
            console.log('object');
        }
    }
};
</script>

<style lang="scss">
.el-header {
    height: 66px;
    position: fixed;
    width: 100%;
    padding: 0;
    z-index: 100;
}

.default-nuxt-content {
    padding-top: 80px;
    max-width: 896px;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
        Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

nav a:hover {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

li {
    margin: 0 0.5rem;
    padding: 0.25rem;
    font-size: 1.2rem;
}

.el-backtop {
    color: #30A1A6;
}

.el-footer {
    padding: 0;
}

.side-bar-drawer {
    .el-drawer {
        background-color: #203B42;
    }

    .el-drawer__header {
        display: none;
    }

    .drawer-header {
        padding: 15px 0;
        text-align: center;
        background: rgba(48, 161, 166, 0.4);

        .el-icon-circle-close {
            vertical-align: middle;
            font-size: 1.15rem;
        }
    }

    .header-menu {
        background-color: #203B42;
        color: white;
        border-right: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;

        .el-menu-item,
        .el-menu-item.is-active {
            border-bottom: none;
            background-color: rgba(0, 31, 38, 0);
            font-size: 1.5em;
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
        justify-content: space-around;
        padding: 0 20px;

        .icon {
            line-height: 66px;
            font-size: 1.5em;
        }
    }
}
</style>
