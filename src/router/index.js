import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import Index from "../views/index/index.vue"
import Project from "../views/project/project.vue"
import Approach from "../views/approach/approach.vue"
import Offset from "../views/offset/offset.vue"
import SignIn from "../views/sign/signin.vue"
import SingUp from "../views/sign/signup.vue"
import User from "../views/user/user.vue"
import Property from "../views/property/property.vue"
import PasswordNew from "../views/sign/password_new.vue"
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
    path: '/password/new',
    component: PasswordNew,
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
            router.push("/index")
        } else {
            next();
        }
    }else{
        next()
    }
})

export default router;
