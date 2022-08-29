import * as flsFunctions from './modules/function.js'
import { navMenu } from './modules/navbarWithTargetScroll.js'
import { swiper } from './modules/swiper.js'
import { animationWithScroll } from './modules/animOnScroll.js'
import { scrollTo } from './modules//scrollTo.js'

flsFunctions.isWebp()

navMenu()
swiper()
scrollTo()
animationWithScroll()