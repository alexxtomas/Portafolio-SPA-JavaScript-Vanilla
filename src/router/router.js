import { $ } from "../utils/$"
//Templates
import { template as contact } from "../pages/Contact"
import { template as home } from "../pages/Home"
import { template as projects } from "../pages/Projects"

// Listeners
import { listeners as footerListeners } from "../components/Footer"
import { listeners as navbarListeners } from "../components/Navbar"
import { listeners as contactListeners } from "../pages/Contact"

export const routes = {
    "/": {title: "Home", render: home},
    "/projects": {title: "Projects", render: projects },
    "/contact": {title: "Contact", render: contact}
}


export const router = () => {
    let page = routes[location.pathname]
    if(page) {
        document.title = page.title
        $('#app').innerHTML = page.render()
        navbarListeners()
        footerListeners()
        contactListeners()
        
    } else {
        history.pushState("", "", '/')
        router()
    }
}