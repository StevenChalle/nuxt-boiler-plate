import { Vue, Component } from 'vue-property-decorator'

import Profile from '@/components/Profile/Profile-template.vue'

@Component({
  components: {
    Profile
  }
})
export default class extends Vue {
  mounted() : void {
    console.log(this.$store.state)
    // this.$store.state.user.connectUser({
    //   name: 'Gengiskhân'
    // })
    this.$store.dispatch('user/connectUser', {
      name: 'Gengiskhân'
    })
  }
}