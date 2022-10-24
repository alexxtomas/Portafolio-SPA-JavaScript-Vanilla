import { $ } from "../utils/$"
import { template as socialMedia } from "./SocialMedia"

const template = () => `
    ${socialMedia()}
`   

export const listeners = () => {
    $('#footer').innerHTML += template()
}