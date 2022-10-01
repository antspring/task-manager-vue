import AuthLogin from '@/components/Login';
import AuthRegistration from "@/components/Registration";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: AuthLogin,
        meta: { authPage: true }
    },
    {
        path: '/registration',
        name: 'registration',
        component: AuthRegistration,
        meta: { authPage: true }
    },
    {
        path: '/',
        redirect: '/personal-area'
    },
    {
        path: '/:pathMatch(.*)*',
        component: { template: '<div>Page Not Found</div>' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    if (!localStorage.getItem('authorization_token') && !to.meta.authPage){
        next({ name: 'login' });
    }
    next()
});

export default router;

