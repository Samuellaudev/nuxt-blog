<template>
    <div>
        <p class="info-box">
            <slot name="info-box">default</slot>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.info-box {
    color: lightcoral;
}

.info-text {
    color: blue
}
</style>