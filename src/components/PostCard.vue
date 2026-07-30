<template>
    <li class="bg-white shadow-sm transition duration-400 ease-out hover:-translate-y-2 hover:shadow-md">
        <div class="card__thumbnail w-full h-50 overflow-hidden">
            <a href="" class="block">
                <img :src="data.thumbnail" alt="" class="w-full h-full object-cover object-center">                
            </a>
        </div>
        <div class="card__content p-4">
            <a href="" class="block min-h-[150px]">
                <h3 class="card__subject font-semibold">{{ data.subject }}</h3>
                <div class="card__description text-sm">
                    <p>{{ data.details }}</p>
                </div>
            </a>
        </div>
        <div class="card__etc p-4 flex justify-between">
            <div class="card__user">
                <a href="" class="flex items-center">
                    <img :src="data.user.thumbnail" class="w-6 h-6 rounded-full" alt="">
                    <span class="text-xs ml-1">{{ data.user.nickname }}</span>
                </a>
            </div>
            <div class="card__like flex items-center text-xs">
                <iconHeart :size="14" />
                <span class="ml-1">{{ data.like }}</span>
            </div>
        </div>
    </li>
</template>

<script setup>
    import { Heart as iconHeart } from 'lucide-vue-next'

    defineProps({
        data: {
            type: Object,
            required: true
        }
    })
</script>

<style scope>

</style>