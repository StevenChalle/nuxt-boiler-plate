import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {
  input: string = ''
  reactiveProperty: string = 'ôO'

  @Watch('input')
  onPropertyChanged(value: string, oldValue: string) {
    if (this.reactiveProperty === 'ôO') this.reactiveProperty = 'Oô'
    else this.reactiveProperty = 'ôO'
  }
}