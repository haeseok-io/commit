<template>
    <header class="header mb-5">
        <div class="conatiner h-[80px] flex items-center">
            <h1 class="header__logo">
                <RouterLink to="/">
                    <img src="@/assets/image/logo-horizon.svg" alt="">
                </RouterLink>
            </h1>
            <div class="header__menu ml-auto">
                <nav>
                    <ul v-if="!auth.isLogin">
                        <li><BaseButton to="/login">로그인</BaseButton></li>
                    </ul>

                    <ul v-else class="flex">
                        <li><Bell /></li>
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
    import { Bell } from '@lucide/vue'
    import BaseButton from './BaseButton.vue';

    const auth = useAuthStore();
</script>