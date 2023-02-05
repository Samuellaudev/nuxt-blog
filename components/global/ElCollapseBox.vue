<template>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item class="item" title="Result" name="1">
            <slot name="content" class="collapse-content" />
        </el-collapse-item>
    </el-collapse>
</template>
<script>
export default {
    data() {
        return {
            activeNames: ['']
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
}
</script>

<style lang="scss">
.el-collapse {
    border: none;
    color: white;
}

.el-collapse-item__header {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
    background-color: rgba(191,191,191,0.4);
    border: none;
    padding-left: 20px;
    color: white;
    margin-bottom: 1rem;
}

.el-collapse-item__content {
    background-color: #263238;
    margin-bottom: 1rem;
}

.el-collapse-item__wrap {
    background-color: #263238;
    background: none;
    border-bottom: none;
}
</style>
