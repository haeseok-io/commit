<template>
    <div :class="!isHideLayout() ? 'reponsive w-[1440px] m-auto size-fit' : ''">
        <Header v-if="!isHideLayout()"/>
        <RouterView />
    </div>
</template>

<script setup>
    import { useRoute } from "vue-router";
    import Header from "@/components/Header.vue";

    const route = useRoute()

    const hideLayoutPages = ['login']
    const isHideLayout = () => {
        return hideLayoutPages.includes(route.name)
    }
</script>