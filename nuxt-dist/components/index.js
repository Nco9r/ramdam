export const DefaultDropdown = () => import('../../components/Default/Dropdown.vue' /* webpackChunkName: "components/default-dropdown" */).then(c => wrapFunctional(c.default || c))
export const DefaultNavBar = () => import('../../components/Default/NavBar.vue' /* webpackChunkName: "components/default-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const DefaultTheHeader = () => import('../../components/Default/TheHeader.vue' /* webpackChunkName: "components/default-the-header" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../../components/Login/login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
