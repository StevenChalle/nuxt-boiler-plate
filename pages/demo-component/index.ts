import { Vue, Component } from 'vue-property-decorator'

import DemoComponent from '@/components/DemoComponent/DemoComponentTemplate.vue'

@Component({
  components: {
    DemoComponent
  }
})
export default class extends Vue {

}