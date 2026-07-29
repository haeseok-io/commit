<template>
    <li>
        <p>{{ data.subject }}</p>
        <p>{{ data.details }}</p>
    </li>
</template>

<script setup>
    defineProps({
        data: {
            type: Object,
            required: true
        }
    })
</script>

<style scope>

</style>