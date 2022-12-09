<template>
    <div>
        <p class="info-box-outer">
            <slot name="info-box">default</slot>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.info-box-outer {
    color: lightcoral;
}
</style>