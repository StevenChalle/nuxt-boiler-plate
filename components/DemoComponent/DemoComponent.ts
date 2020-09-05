import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import CustomComponent from '@/components/CustomComponent/CustomComponentTemplate.vue'

@Component({
  //Components
  components: {
    CustomComponent
  }
})
export default class extends Vue {
  // Props
  @Prop({ type: String, required: true }) propsExample!: string

  // Data
  dataExample: string = 'Here is an example of component attribute'
  time: moment.Moment = this.moment()

  // Plugins
  lodashArray: Array<Number> = this._.times(10)

  // Hooks
  passedInCreated: boolean = false
  passedInMounted: boolean = false
  created () {
    console.log('passedInCreated')
    this.passedInCreated = true
  }
  mounted () {
    console.log('passedInMounted')
    this.passedInMounted = true

    // Clock interval
    setInterval(this.updateClock, 1000)
  }

  // Methods
  capitalizeString(str: string): string {
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
  }
  updateClock(): void {
    this.time = this.moment()
  }

  // Computeds
  firstName: string = ''
  lastName: string = ''
  computedInput: string = ''
  get fullName() { return this.firstName + ' ' + this.lastName }
  set fullName(input) {
    const words: Array<string> = input.split(' ')
    this.firstName = words[0]
    this.lastName = words[1]
  }

  // Watchers
  watcherInput: string = ''
  reactiveProperty: string = 'ôO'
  @Watch('watcherInput')
  onPropertyChanged(value: string, oldValue: string) {
    if (this.reactiveProperty === 'ôO') this.reactiveProperty = 'Oô'
    else this.reactiveProperty = 'ôO'
  }

  // Store
  loginUser(): void {
    this.$store.dispatch('user/login', {
      username: 'Gengiskhân'
    })
  }
  logoffUser(): void {
    this.$store.dispatch('user/logoff', {
      username: 'Gengiskhân'
    })
  }
  get loggedSince(): number {
    return this.$store.getters['user/getLoggedAt'] &&
      this.time.diff(this.$store.getters['user/getLoggedAt'], 'seconds')
  }
}