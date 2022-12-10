<template>
    <div>
      This is main page
      <AppSearchInput/>
    </div>
</template>

<script>
import AppSearchInput from "../components/AppSearchInput.vue";
export default {
    components: ["AppSearchInput"],
    name: "IndexPage",
};
</script>
