import { Vue, Component } from 'vue-property-decorator'

import PropsDemo from '@/components/PropsDemo/PropsDemo-template.vue'

@Component({
  components: {
    PropsDemo
  }
})
export default class extends Vue {
  users: Array<any> = [{
    name: 'Jake',
    created_at: '23-12-2006',
    logged_in: false
  }, {
    name: 'Brown',
    created_at: '25-12-2006',
    logged_in: false
  }, {
    name: 'Mahatma',
    created_at: '27-12-2006',
    logged_in: true
  }]
}