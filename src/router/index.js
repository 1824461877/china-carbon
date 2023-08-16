import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import Index from "../views/index/index.vue"
import Project from "../views/project/project.vue"
import ProjectLearnMore from "../views/project/more.vue"
import LearnMore from "../views/more/more.vue"
import Approach from "../views/approach/approach.vue"
import Offset from "../views/offset/offset.vue"
import SignIn from "../views/sign/signin.vue"
import SingUp from "../views/sign/signup.vue"
import User from "../views/user/user.vue"
import Property from "../views/property/property.vue"
import PasswordNew from "../views/sign/password_new.vue"
import Exchange from "../views/exchange/exchange.vue"
import Wallet from "../views/wallet/wallet.vue"
import {getToken} from "@/utils/auth";

const routes = [{
    path: "/",
    redirect: "/index",
}, {
    path: '/index',
    component: Index,
}, {
    path: '/project',
    component: Project,
},{
    path: '/project/more/:key',
    component: ProjectLearnMore,
}, {
    path: '/approach',
    component: Approach,
}, {
    path: '/offset',
    component: Offset,
}, {
    path: '/sign_in',
    component: SignIn,
}, {
    path: '/sign_up',
    component: SingUp,
}, {
    path: '/user',
    component: User,
    meta:{isAuth:true},
}, {
    path: '/property',
    component: Property,
    meta:{isAuth:true},
},{
    path: '/learn_more',
    component: LearnMore,
},{
    path: '/password/new',
    component: PasswordNew,
},{
    path: '/exchange',
    component: Exchange,
},{
    path: '/wallet',
    component: Wallet,
}];


const router = createRouter({
    history: createWebHashHistory(),  // hash路由模式
    // history: createWebHistory(),  // history路由模式
    routes
});

router.beforeEach((to, from, next) =>{
    if(to.meta.isAuth){
        let user = localStorage.getItem("user")
        if (user === undefined || user === "" || user === null && getToken() !== ""){
            if (to.fullPath === "/property") {
                router.go()
            } else {
                routes.push("/index")
            }
        } else {
            next();
        }
    }else{
        next()
    }
})

export default router;
