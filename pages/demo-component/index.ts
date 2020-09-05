import { Vue, Component } from 'vue-property-decorator'

import DemoComponent from '@/components/DemoComponent/DemoComponentTemplate.vue'

@Component({
  components: {
    DemoComponent
  },
  head() {
    return {
      title: 'NBP | Demo Component',
      meta: [
        {
          hid: 'description',
          name: 'demo-component',
          content: 'Ma description personnalisée'
        }
      ]
    }
  }
})
export default class extends Vue {

}