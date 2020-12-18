import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Unicon from 'vue-unicons'
import headerOne from "./components/icons/header-one"
import headerTwo from "./components/icons/header-two"
import headerThree from "./components/icons/header-three"
//Header icon needed==uniHead, blockquote=Comment
import { uniBold, uniItalic, uniTextStrikeThrough, uniUnderline, uniArrow, uniParagraph, uniListUl, uniListUiAlt, uniComment, uniBracketsCurly, uniGripHorizontalLine, uniStepForward, uniHeadSide, uniPrevious } from 'vue-unicons/src/icons'
Unicon.add([
  uniBold,
  uniItalic,
  uniTextStrikeThrough,
  uniUnderline,
  uniArrow,
  uniParagraph,
  uniHeadSide,
  uniListUl,
  uniListUiAlt,
  uniComment,
  uniBracketsCurly,
  uniGripHorizontalLine,
  uniPrevious,
  uniStepForward,
  headerOne,
  headerTwo,
  headerThree
])
//Adds all required icons
Vue.use(Unicon, { fill: "black" })
Vue.config.productionTip = false

Vue.component("basic-button", () => import("./components/BasicButton.vue"))
Vue.component("basic-menu-bar", () => import("./components/BasicMenuBar.vue"))



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

