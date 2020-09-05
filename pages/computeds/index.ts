import { Vue, Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  firstName: string = 'test'
  lastName: string = 'name'
  input: string = ''

  get fullName() { return this.firstName + ' ' + this.lastName }
  set fullName(input) {
    const words: Array<string> = input.split(' ')
    this.firstName = words[0]
    this.lastName = words[1]
  }
}