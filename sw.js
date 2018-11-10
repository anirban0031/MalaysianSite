importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "eshopper",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.0ebc7c4041eed835927a.js",
    "revision": "1ec0db19e0bcb133eb71bf31b171ba74"
  },
  {
    "url": "/_nuxt/layouts_default.11e0651e8bf0555e8d56.js",
    "revision": "bcb52cecb8dc5609571ce4cd2258f065"
  },
  {
    "url": "/_nuxt/layouts_nosidebar.0f112e31e2e6c6111927.js",
    "revision": "075a8ea3882d301b86e313be372af30b"
  },
  {
    "url": "/_nuxt/manifest.1287b3eb26492801bfa6.js",
    "revision": "fe9b8dabefbf8c952cf78df4817b082b"
  },
  {
    "url": "/_nuxt/pages_Cart.66e9bbb66a2b177c854d.js",
    "revision": "046bf12b61a9ac9d2af121470ea7b44b"
  },
  {
    "url": "/_nuxt/pages_Carts.49c069d1c247ad52233f.js",
    "revision": "268928e0d18baa60cf8d536798779103"
  },
  {
    "url": "/_nuxt/pages_Category.40ef9af7d8766f0b4466.js",
    "revision": "15a90eaa16c504bb205ec36006a08b0c"
  },
  {
    "url": "/_nuxt/pages_Checkout.7b954d98c83c8f2081ee.js",
    "revision": "d754f416b623fe16549c4652826bd3c9"
  },
  {
    "url": "/_nuxt/pages_Companies.41a71dfb8a695a7abdac.js",
    "revision": "db337e7b16c0071eb91c01ee70a2e95c"
  },
  {
    "url": "/_nuxt/pages_company__id.dedfdac139a8dcda7d1f.js",
    "revision": "b302119e693317adc5c31347157b261f"
  },
  {
    "url": "/_nuxt/pages_company_emp__id.c1d4ee7e310cafd423ed.js",
    "revision": "925f7ea39fc6b06f8d05435ad92d466b"
  },
  {
    "url": "/_nuxt/pages_ECEDC.c0eaf115ab2bfe63de74.js",
    "revision": "9cb353c3db33a843e9bfd1e4adc1394f"
  },
  {
    "url": "/_nuxt/pages_index.1.8b338f4feb6e8d1c5e66.js",
    "revision": "259d6056efd97fe08edaf2070dc51757"
  },
  {
    "url": "/_nuxt/pages_index.c8c3b924c1819aad9bd3.js",
    "revision": "b811f27919075ce3d5b5d9f03909595d"
  },
  {
    "url": "/_nuxt/pages_item__slug.104d10735076e7a119e6.js",
    "revision": "f63d7ca395079f348de44a77c79d615d"
  },
  {
    "url": "/_nuxt/pages_items__category.10bca86fac456d42e47c.js",
    "revision": "98ef924565d1a871b53bb5181444665d"
  },
  {
    "url": "/_nuxt/pages_Login.94de49e87f09ebde064b.js",
    "revision": "9fa16baad358eb1a17ba8e383c3ef310"
  },
  {
    "url": "/_nuxt/pages_Maps.f8da8bb0437d26946993.js",
    "revision": "dc036df9f89861e10f21870dc7618955"
  },
  {
    "url": "/_nuxt/pages_News.683c603e7b1863e6adfd.js",
    "revision": "72db0fa76b548109a9d4e9d35db587ee"
  },
  {
    "url": "/_nuxt/pages_Policy.977bc5950d5916c12a0f.js",
    "revision": "f2e5bb46d9670c1846890c6048193b9a"
  },
  {
    "url": "/_nuxt/pages_Profile.a9f8b9dcb45369508bbf.js",
    "revision": "9dbb46ba839dd2c4c716cb474e2ecb97"
  },
  {
    "url": "/_nuxt/pages_Projects.8919cd84521aa8c89a7b.js",
    "revision": "10b893437896c95dd22b30f0dd90c23a"
  },
  {
    "url": "/_nuxt/pages_Quote.45cd3fcd0c93a3f6adad.js",
    "revision": "0b5f7964b2be14286cf9b4c4b4b8ffe7"
  },
  {
    "url": "/_nuxt/pages_Register.7a174fb9e1ee05e4b5d7.js",
    "revision": "5eaee33fb727c64f9ccfae0906360bd9"
  },
  {
    "url": "/_nuxt/pages_search__pageNo__query.5a2eea64a96eaf3c14fa.js",
    "revision": "c4f9277bf5e91e88470e09059dd2a33f"
  },
  {
    "url": "/_nuxt/pages_SearchResult.cb912adcb383c8ece03e.js",
    "revision": "eab9b3b9a1b7aefc72c5a183d4a89afe"
  },
  {
    "url": "/_nuxt/pages_SingleProduct.453a697d0bc5fc6109d2.js",
    "revision": "0729cdae6014097e3f116673dc78d44f"
  },
  {
    "url": "/_nuxt/pages_Stories.46f43707e452be8d6116.js",
    "revision": "ded5ebd5e7e83bc500f66068c4ac7d49"
  },
  {
    "url": "/_nuxt/vendor.094c7112351d33c626d2.js",
    "revision": "d487014d123491b9011314d49d65f8d6"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

