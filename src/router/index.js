import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CommitView from '@/views/CommitView.vue';
import RepositoryView from '@/views/RepositoryView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/commit',
        name: 'commit',
        component: CommitView
    },
    {
        path: '/repository',
        name: 'repository',
        component: RepositoryView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
})

export default router;