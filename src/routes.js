const { default: VueRouter } = require("vue-router");

import Home from './pages/Home.vue'
import AuthorQuotes from './pages/AuthorQuotes.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: Home
        },
        {
            path: '/quotes/:id', component: AuthorQuotes
        }
    ]
})