import AuthLogin from '@/components/Login';
import AuthRegistration from "@/components/Registration";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: AuthLogin,
        meta: { authPage: true },
        alias: '/'
    },
    {
        path: '/registration',
        name: 'registration',
        component: AuthRegistration,
        meta: { authPage: true }
    },
    {
        path: '/personal-area',
        name: 'personal-area',
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
    }else if (localStorage.getItem('authorization_token') && to.meta.authPage){
        next({ name: 'personal-area' });
    }
    next()
});

export default router;

