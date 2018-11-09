import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6e1b3060 = () => import('..\\pages\\Policy.vue' /* webpackChunkName: "pages_Policy" */).then(m => m.default || m)
const _5c1fd925 = () => import('..\\pages\\Stories.vue' /* webpackChunkName: "pages_Stories" */).then(m => m.default || m)
const _148f1083 = () => import('..\\pages\\SearchResult.vue' /* webpackChunkName: "pages_SearchResult" */).then(m => m.default || m)
const _2144901c = () => import('..\\pages\\Category.vue' /* webpackChunkName: "pages_Category" */).then(m => m.default || m)
const _7887bd64 = () => import('..\\pages\\Quote.vue' /* webpackChunkName: "pages_Quote" */).then(m => m.default || m)
const _2ab11e71 = () => import('..\\pages\\News.vue' /* webpackChunkName: "pages_News" */).then(m => m.default || m)
const _03e2502d = () => import('..\\pages\\Companies.vue' /* webpackChunkName: "pages_Companies" */).then(m => m.default || m)
const _29de88a5 = () => import('..\\pages\\Carts.vue' /* webpackChunkName: "pages_Carts" */).then(m => m.default || m)
const _f60297d0 = () => import('..\\pages\\ECEDC.vue' /* webpackChunkName: "pages_ECEDC" */).then(m => m.default || m)
const _501dbf84 = () => import('..\\pages\\Cart.vue' /* webpackChunkName: "pages_Cart" */).then(m => m.default || m)
const _5f0bbc64 = () => import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages_Checkout" */).then(m => m.default || m)
const _fea13bf2 = () => import('..\\pages\\index.1.vue' /* webpackChunkName: "pages_index.1" */).then(m => m.default || m)
const _94b2d88a = () => import('..\\pages\\Login.vue' /* webpackChunkName: "pages_Login" */).then(m => m.default || m)
const _40e8cd98 = () => import('..\\pages\\Projects.vue' /* webpackChunkName: "pages_Projects" */).then(m => m.default || m)
const _bbdab17e = () => import('..\\pages\\Register.vue' /* webpackChunkName: "pages_Register" */).then(m => m.default || m)
const _3975cf96 = () => import('..\\pages\\Maps.vue' /* webpackChunkName: "pages_Maps" */).then(m => m.default || m)
const _3d05310a = () => import('..\\pages\\Profile.vue' /* webpackChunkName: "pages_Profile" */).then(m => m.default || m)
const _170eea4e = () => import('..\\pages\\SingleProduct.vue' /* webpackChunkName: "pages_SingleProduct" */).then(m => m.default || m)
const _654774a1 = () => import('..\\pages\\company\\emp\\_id.vue' /* webpackChunkName: "pages_company_emp__id" */).then(m => m.default || m)
const _c59758ee = () => import('..\\pages\\item\\_slug.vue' /* webpackChunkName: "pages_item__slug" */).then(m => m.default || m)
const _303e249b = () => import('..\\pages\\items\\_category.vue' /* webpackChunkName: "pages_items__category" */).then(m => m.default || m)
const _1d48d74a = () => import('..\\pages\\company\\_id.vue' /* webpackChunkName: "pages_company__id" */).then(m => m.default || m)
const _6ab49462 = () => import('..\\pages\\search\\_pageNo\\_query.vue' /* webpackChunkName: "pages_search__pageNo__query" */).then(m => m.default || m)
const _748cd0c4 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/Policy",
			component: _6e1b3060,
			name: "Policy"
		},
		{
			path: "/Stories",
			component: _5c1fd925,
			name: "Stories"
		},
		{
			path: "/SearchResult",
			component: _148f1083,
			name: "SearchResult"
		},
		{
			path: "/Category",
			component: _2144901c,
			name: "Category"
		},
		{
			path: "/Quote",
			component: _7887bd64,
			name: "Quote"
		},
		{
			path: "/News",
			component: _2ab11e71,
			name: "News"
		},
		{
			path: "/Companies",
			component: _03e2502d,
			name: "Companies"
		},
		{
			path: "/Carts",
			component: _29de88a5,
			name: "Carts"
		},
		{
			path: "/ECEDC",
			component: _f60297d0,
			name: "ECEDC"
		},
		{
			path: "/Cart",
			component: _501dbf84,
			name: "Cart"
		},
		{
			path: "/Checkout",
			component: _5f0bbc64,
			name: "Checkout"
		},
		{
			path: "/index.1",
			component: _fea13bf2,
			name: "index.1"
		},
		{
			path: "/Login",
			component: _94b2d88a,
			name: "Login"
		},
		{
			path: "/Projects",
			component: _40e8cd98,
			name: "Projects"
		},
		{
			path: "/Register",
			component: _bbdab17e,
			name: "Register"
		},
		{
			path: "/Maps",
			component: _3975cf96,
			name: "Maps"
		},
		{
			path: "/Profile",
			component: _3d05310a,
			name: "Profile"
		},
		{
			path: "/SingleProduct",
			component: _170eea4e,
			name: "SingleProduct"
		},
		{
			path: "/company/emp/:id?",
			component: _654774a1,
			name: "company-emp-id"
		},
		{
			path: "/item/:slug?",
			component: _c59758ee,
			name: "item-slug"
		},
		{
			path: "/items/:category?",
			component: _303e249b,
			name: "items-category"
		},
		{
			path: "/company/:id?",
			component: _1d48d74a,
			name: "company-id"
		},
		{
			path: "/search/:pageNo?/:query?",
			component: _6ab49462,
			name: "search-pageNo-query"
		},
		{
			path: "/",
			component: _748cd0c4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
