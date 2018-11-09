import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\bootstrap\\dist\\css\\bootstrap.css'

import '..\\node_modules\\@fortawesome\\fontawesome-svg-core\\styles.css'


let layouts = {

  "_default": () => import('..\\layouts\\default.vue'  /* webpackChunkName: "layouts_default" */).then(m => m.default || m),

  "_nosidebar": () => import('..\\layouts\\nosidebar.vue'  /* webpackChunkName: "layouts_nosidebar" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Electoronics Parts Whole Sale","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"eshopper"},{"hid":"theme-color","name":"theme-color","content":"#4AAAA4"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"eshopper"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Electronics Shopping Cart"}],"link":[{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.4.1\u002Fcss\u002Fall.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Montserrat:300,400,500,600,700,800|Source+Sans+Pro:300,400,600,700"},{"rel":"stylesheet","href":"\u002Fcss\u002Fstyle.css"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.ee016848.json"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

