import Vue from 'vue'
import VueRouter from "vue-router"
import ArticleRender from "../components/ArticleRender";
import ArticleList from "../components/ArticleList";
import Home from "../components/Home";
import UnfinishedComponent from "../components/UnfinishedComponent";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/article_render',
            name: 'ArticleRender',
            component: ArticleRender
        },
        {
            path: '/article_list',
            name: 'ArticleList',
            component: ArticleList
        },
        {
            path: '/unfinished_component',
            name: 'UnfinishedComponent',
            component: UnfinishedComponent
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ],
    meta: {
        keepAlive: true
    }
})
