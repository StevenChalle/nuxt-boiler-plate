import { Vue, Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  passedInCreated: boolean = false
  passedInMounted: boolean = false

  created () {
    console.log('passedInCreated')
    this.passedInCreated = true
  }
  mounted () {
    console.log('passedInMounted')
    this.passedInMounted = true
  }
}