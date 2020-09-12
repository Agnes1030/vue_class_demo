import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

var router=new VueRouter({
    mode:'history',
    linkActiveClass:'my-active',
    linkExactActiveClass:'my-exact-active',
    routes:[
        // 重定向：当用户访问/的时候，重定向到/login
        {path:'/',redirect: '/login'},
        {path:'/login',component:Login,meta:{title:'登录'}},
        {path:'/register',component:Register,meta:{title:'注册'}},
    ]
})

router.beforeEach(
    // to：目标路由对象
    //from: 来源路由对象
    // next:执行下一步操作
    (to,from,next)=>{
        if(to.meta.title){
            document.title=to.meta.title
        }
        next();
    }
)

export default router