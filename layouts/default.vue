<template>
    <div>
        <el-header class="header"><LayoutHeader /></el-header>
        <Nuxt class="default-nuxt-content" />
        <el-backtop />
    </div>
</template>

<script>
import LayoutHeader from "@/components/layout/LayoutHeader";

export default {
    components: { LayoutHeader },
};
</script>

<style lang="scss">
.el-header {
    height: 66px;
    position: fixed;
    width: 100%;
}

.default-nuxt-content {
    padding-top: 66px;
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
</style>
