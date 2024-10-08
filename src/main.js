import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Collapse } from 'vue-collapsed'

import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faUserSecret,
  faGraduationCap,
  faLocationDot, faCalendarAlt, faLanguage, faFilePdf
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faVuejs } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faGraduationCap, faGithub, faLinkedin, faInstagram, faVuejs, faLocationDot, faCalendarAlt, faLanguage, faFilePdf)





createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('Collapse', Collapse)
.use(createPinia())
.use(router)
.mount('#app')
