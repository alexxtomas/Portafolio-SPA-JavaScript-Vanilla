import { $ } from "../utils/$"
//Templates
import { template as home } from "../pages/Home"

// Listeners
import { listeners as footerListeners } from "../components/Footer"
import { listeners as navbarListeners } from "../components/Navbar"

export const routes = {
    "/": {title: "Home", render: home}
}


export const router = () => {
    let page = routes[location.pathname]
    if(page) {
        document.title = page.title
        $('#app').innerHTML = page.render()
        navbarListeners()
        footerListeners()
        
    } else {
        router()
    }
}