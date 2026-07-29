<template>
    <header class="header">
        <div class="conatiner h-[40px] flex items-center">
            <h1 class="header__logo">
                <RouterLink to="/">Commit</RouterLink>
            </h1>
            <div class="header__menu ml-auto">
                <nav>
                    <ul v-if="!auth.isLogin">
                        <li><BaseButton @click="auth.login('test','test')">로그인</BaseButton></li>
                    </ul>

                    <ul v-else class="flex">
                        <li><iconBell /></li>
                        <li><BaseButton to="/commit">새 글 작성</BaseButton></li>
                        <li><BaseButton @click="auth.logout">로그아웃</BaseButton></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { useAuthStore } from '@/stores/auth'
    import { Bell as iconBell } from 'lucide-vue-next'
    import BaseButton from './BaseButton.vue';

    const auth = useAuthStore();
</script>