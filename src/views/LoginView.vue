<template>
    <main>
        <div class="login__responsive h-screen flex items-center">
            <div class="login__visual w-[calc(100%-800px)] flex justify-center">
                <div class="visual__content text-center">
                    <RouterLink to="/">
                        <img src="@/assets/image/logo.svg" width="200" alt="">
                    </RouterLink>
                    <p class="mt-5 font-bold text-2xl">환영합니다!</p>
                </div>
            </div>
            <div class="login__content w-[800px] h-full bg-white flex items-center px-10">
                <div class="w-[400px]">
                    <h3 class="text-2xl font-bold mb-10">repoHub</h3>
                    <form @submit.prevent="loginCheck">
                        <BaseInput
                            v-model="form.email.value"
                            label="이메일로 로그인"
                            placeholder="이메일을 입력하세요."
                            :error="form.email.error"
                        >
                            <template #append>
                                <BaseButton
                                    type="submit"
                                    width="w-[100px]"
                                    height="h-[40px]"
                                    rounded="false"
                                >
                                    로그인
                                </BaseButton>
                            </template>
                        </BaseInput>
                    </form>
                    <div class="login__oauth mt-5">
                        <p class="text-gray-400">소셜 계정으로 로그인</p>
                        <ul class="flex items-center gap-10 text-white mt-4">
                            <li class="w-[50px] h-[50px] bg-[#1A3553] rounded-full">
                                <a href="" class="flex w-full h-full justify-center items-center">
                                    <SimpleIcon :size="24" :icon="siGithub" />
                                </a>
                            </li>
                            <li class="w-[50px] h-[50px] bg-[#1A3553] rounded-full">
                                <a href="" class="flex w-full h-full justify-center items-center">
                                    <SimpleIcon :size="24" :icon="siGoogle" />
                                </a>
                            </li>
                            <li class="w-[50px] h-[50px] bg-[#1A3553] rounded-full">
                                <a href="" class="flex w-full h-full justify-center items-center">
                                    <SimpleIcon :size="24" :icon="siDiscord" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { reactive } from 'vue'
    import { useAuthStore } from '@/stores/auth'
    import { useRouter } from 'vue-router'
    import { isValidEmail } from '@/utils/validation';
    import { siGoogle, siGithub, siDiscord } from 'simple-icons/icons'
    import SimpleIcon from '@/components/SimpleIcon.vue';
    import BaseButton from '@/components/BaseButton.vue';
    import BaseInput from '@/components/BaseInput.vue';

    console.log(siGithub)

    const router = useRouter()
    const auth = useAuthStore();

    const form = reactive({
        email: { value: '', error: '' }
    })

    const loginCheck = () => {

        // 유효성 체크
        if( !form.email.value ) {
            form.email.error = '이메일을 입력해주세요.'
            return
        }
        if( !isValidEmail(form.email.value) ) {
            form.email.error = '이메일 형식을 확인해주세요.'
            return
        }

        // 로그인 성공 처리
        auth.login('test', 'test');
        router.push('/')
    }
</script>

<style scope>

</style>