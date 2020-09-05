import Vue from 'vue'
import lodash from 'lodash'

const VueLodash = {
  install (Vue: any, _: any) {
    Vue._ = _
    Vue.prototype._ = _
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueLodash)
    }
  }
}

Vue.use(VueLodash, lodash)