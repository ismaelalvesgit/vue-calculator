import Vue from 'vue'
import Vuetify from 'vuetify'
import pt from 'vuetify/es5/locale/pt'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify(
  {
    iconfont: 'md',
    lang: {
      locales: { pt },
      current: 'pt'
    },
    theme: {
      dark: { 
        primary: colors.teal.darken1,
        accent: colors.indigo.darken1,
        info: colors.blue,
        error: colors.pink.darken2,
        success: colors.teal.lighten1,
        warning: colors.purple.darken1
      }
    }
  }
)
