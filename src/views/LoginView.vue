<template>
    <main>
        <div class="login__responsive h-screen flex items-center">
            <div class="login__visual w-[calc(100%-800px)] flex justify-center">
                <BaseButton type="button" to="/" theme="transparent">
                    <img src="@/assets/image/logo-vertical.svg" width="200" alt="">
                </BaseButton>
            </div>
            <div class="login__content w-[800px] h-full bg-white flex flex-col justify-center">
                <h3>로그인</h3>
                <p>이메일로 로그인</p>
                <form @submit.prevent="loginCheck">
                    <input type="text" v-model="form.email" placeholder="이메일을 입력하세요.">
                    <button type="submit">로그인</button>
                </form>
                <div class="login__oauth">
                    <p>소셜 계정으로 로그인</p>
                    <ul>
                        <li>깃허브</li>
                        <li>구글</li>
                        <li>디스코드</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { reactive } from 'vue'
    import BaseButton from '@/components/BaseButton.vue';

    const form = reactive({ email: '' })
    const loginCheck = () => {
        
        if( !form.email ) {
            alert('이메일을 입력해주세요.')
            return
        }

        alert('로그인 성공')
    }
</script>

<style scope>

</style>