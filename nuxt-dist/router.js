import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07bb2752 = () => interopDefault(import('../pages/choose-events.vue' /* webpackChunkName: "pages/choose-events" */))
const _7dffef7a = () => interopDefault(import('../pages/client-absent.vue' /* webpackChunkName: "pages/client-absent" */))
const _2d3e9a33 = () => interopDefault(import('../pages/create-bsdasri.vue' /* webpackChunkName: "pages/create-bsdasri" */))
const _2768686b = () => interopDefault(import('../pages/depose-fournitures.vue' /* webpackChunkName: "pages/depose-fournitures" */))
const _3e8ed2d4 = () => interopDefault(import('../pages/facturation.vue' /* webpackChunkName: "pages/facturation" */))
const _3cbe23fa = () => interopDefault(import('../pages/fiche-clients/index.vue' /* webpackChunkName: "pages/fiche-clients/index" */))
const _774d1d9e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4ae842ea = () => interopDefault(import('../pages/mentions-legales.vue' /* webpackChunkName: "pages/mentions-legales" */))
const _047b5fd2 = () => interopDefault(import('../pages/reglages/index.vue' /* webpackChunkName: "pages/reglages/index" */))
const _5d298eb4 = () => interopDefault(import('../pages/transport/index.vue' /* webpackChunkName: "pages/transport/index" */))
const _dce0a1ba = () => interopDefault(import('../pages/bsdasris/draft-bsdasri/index.vue' /* webpackChunkName: "pages/bsdasris/draft-bsdasri/index" */))
const _6564a218 = () => interopDefault(import('../pages/bsdasris/follow/index.vue' /* webpackChunkName: "pages/bsdasris/follow/index" */))
const _5406ef68 = () => interopDefault(import('../pages/bsdasris/story/index.vue' /* webpackChunkName: "pages/bsdasris/story/index" */))
const _3cdae8ab = () => interopDefault(import('../pages/transport/collected.vue' /* webpackChunkName: "pages/transport/collected" */))
const _7c873f34 = () => interopDefault(import('../pages/transport/to-collect.vue' /* webpackChunkName: "pages/transport/to-collect" */))
const _12228da3 = () => interopDefault(import('../pages/bsdasris/preview/_id.vue' /* webpackChunkName: "pages/bsdasris/preview/_id" */))
const _7d747a4c = () => interopDefault(import('../pages/bsdasris/sign-emitter-secret/_id.vue' /* webpackChunkName: "pages/bsdasris/sign-emitter-secret/_id" */))
const _7f3cf531 = () => interopDefault(import('../pages/bsdasris/sign-transporter/_id.vue' /* webpackChunkName: "pages/bsdasris/sign-transporter/_id" */))
const _1ceed5aa = () => interopDefault(import('../pages/fiche-clients/_id.vue' /* webpackChunkName: "pages/fiche-clients/_id" */))
const _dda1640a = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _0a9c63cc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/choose-events",
    component: _07bb2752,
    name: "choose-events"
  }, {
    path: "/client-absent",
    component: _7dffef7a,
    name: "client-absent"
  }, {
    path: "/create-bsdasri",
    component: _2d3e9a33,
    name: "create-bsdasri"
  }, {
    path: "/depose-fournitures",
    component: _2768686b,
    name: "depose-fournitures"
  }, {
    path: "/facturation",
    component: _3e8ed2d4,
    name: "facturation"
  }, {
    path: "/fiche-clients",
    component: _3cbe23fa,
    name: "fiche-clients"
  }, {
    path: "/login",
    component: _774d1d9e,
    name: "login"
  }, {
    path: "/mentions-legales",
    component: _4ae842ea,
    name: "mentions-legales"
  }, {
    path: "/reglages",
    component: _047b5fd2,
    name: "reglages"
  }, {
    path: "/transport",
    component: _5d298eb4,
    name: "transport"
  }, {
    path: "/bsdasris/draft-bsdasri",
    component: _dce0a1ba,
    name: "bsdasris-draft-bsdasri"
  }, {
    path: "/bsdasris/follow",
    component: _6564a218,
    name: "bsdasris-follow"
  }, {
    path: "/bsdasris/story",
    component: _5406ef68,
    name: "bsdasris-story"
  }, {
    path: "/transport/collected",
    component: _3cdae8ab,
    name: "transport-collected"
  }, {
    path: "/transport/to-collect",
    component: _7c873f34,
    name: "transport-to-collect"
  }, {
    path: "/bsdasris/preview/:id?",
    component: _12228da3,
    name: "bsdasris-preview-id"
  }, {
    path: "/bsdasris/sign-emitter-secret/:id?",
    component: _7d747a4c,
    name: "bsdasris-sign-emitter-secret-id"
  }, {
    path: "/bsdasris/sign-transporter/:id?",
    component: _7f3cf531,
    name: "bsdasris-sign-transporter-id"
  }, {
    path: "/fiche-clients/:id?",
    component: _1ceed5aa,
    name: "fiche-clients-id"
  }, {
    path: "/users/:id?",
    component: _dda1640a,
    name: "users-id"
  }, {
    path: "/",
    component: _0a9c63cc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
