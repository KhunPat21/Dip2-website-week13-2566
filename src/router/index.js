import { createRouter,createWebHashHistory } from 'vue-router';
const HomeView = ()=>import ("@/views/HomeView.vue");
const AboutView = ()=>import( "@/views/AboutView.vue");

const routes = [ 
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
    
});


export default router;