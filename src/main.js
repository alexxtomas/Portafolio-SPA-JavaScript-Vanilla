import '../style.css'
import { router } from './router/router'


window.addEventListener('click', e => {
  if(e.target.matches("[data-link]")) {
    e.preventDefault()
    history.pushState("", "", e.target.href)
    router()
  }
})

window.addEventListener('popstate', router)
window.addEventListener('DOMContentLoaded', router)