import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path:'/',
		component: () => import('@front/pages/courses/index.vue'),
		name:'home'
	},
	{
		path:'/about-us',
		component: () => import('@front/pages/about_us/index.vue'),
		name:'waiting'
	},
    {
        path: '/enroll',
        component: () => import('@front/pages/courses/enroll.vue'),
        name:'enroll'
    }
]

const router = new VueRouter({
	mode: 'history',
    base: '/',
    scrollBehavior (){
        return {x: 0, y: 0}
    },
	routes: routes
});

export default router
