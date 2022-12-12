<template>
<div class="layout-header">
    <el-menu class="header-menu" mode="horizontal" menu-trigger="click">
        <img width="160px" class="portal-logo" :src="require('@/assets/img/full_logo.png')" />
        <el-submenu class="user-menu" index="user">
            <el-menu-item-group class="user-list">
                <!--  -->
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.portal-logo {
    background: white;
    margin-top: 10px;
    margin-left: 20px;
}

.user-menu {
    float: right;
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border: none;
}

.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: #FFF;
    float: none;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    color: #909399;
}

a {
    color: #3a8fc8;
    text-decoration: none;
}

.user-list .user-item:hover,
.user-list .user-item.is-active {
    color: #23a9f6;
}

.user-list .user-item {
    padding-left: 0;
    padding-right: 0;
}

.user-list .user-item-link {
    display: block;
    padding: 0 10px;
}

.user-list::v-deep .el-menu-item-group__title {
    display: none;
}

.el-avatar--icon {
    width: 30px;
    height: 30px;
    margin-right: 5px;
}

::v-deep .el-menu--horizontal .el-menu .el-menu-item.is-active {
    color: #23a9f6;
}

.user-item .user-item-link,
.user-item .user-item-link i {
    color: inherit;
}
</style>
