import Vue from 'vue'
import moment from 'moment'

const VueMoment = {
  install (Vue: any, moment: any) {
    Vue.moment = moment
    Vue.prototype.moment = moment
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueMoment)
    }
  }
}

Vue.use(VueMoment, moment)