import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  head() {
    return {
      title: 'Nuxt Boiler Plate',
      meta: [
        {
          hid: 'description',
          name: 'index',
          content: 'Ma description personnalisée'
        }
      ]
    }
  }
})
export default class extends Vue {
  
}