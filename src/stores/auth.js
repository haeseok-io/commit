import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const isLogin = ref(false); // 로그인상태
    const user = ref(null); // 유저정보
    const accessToken = ref(null); // 토큰값


    // 로그인 처리
    const login = (userInfo, token) => {
        isLogin.value = true;
        user.value = userInfo;
        accessToken.value = token;
    }

    // 로그아웃 처리
    const logout = () => {
        isLogin.value = false;
        user.value = null;
        accessToken.value = null;
    }

    return {isLogin, user, accessToken, login, logout}
})