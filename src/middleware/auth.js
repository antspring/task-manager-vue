export default function auth({ next, router }){
    if (!localStorage.getItem('authorization_token')){
        return router.push({ name: 'registration' });
    }
    return next();
}