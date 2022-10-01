import AuthLogin from '@/components/Login';
import AuthRegistration from "@/components/Registration";
import { createRouter, createWebHashHistory } from 'vue-router';

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    if (!localStorage.getItem('authorization_token') && !to.meta.authPage){
        next({ name: 'registration' });
    }
    next()
});

export default router;

