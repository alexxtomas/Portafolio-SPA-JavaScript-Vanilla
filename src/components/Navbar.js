import { $ } from "../utils/$"

const template = () => `
    <nav>
        <ul>
            <li> <a href="/" data-link> Home </a> </li>
            <li> <a href="/projects" data-link> Projects </a> </li>
            <li> <a href="/contact" data-link> Contact </a> </li>
        </ul>
    </nav>

`

export const listeners = () => {
    $('#header').innerHTML = template()
}