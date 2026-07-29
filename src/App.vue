<template>
    <div class="reponsive w-[1440px] m-auto size-fit">
        <Header />
        <RouterView />
    </div>
</template>

<script setup>
    import Header from "@/components/Header.vue";
</script>