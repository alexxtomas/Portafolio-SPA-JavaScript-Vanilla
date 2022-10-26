import { $ } from "../utils/$"

export const template = () => {
    $('footer').style.display = 'none'
    $('.contact').innerHTML = `
        <div class="gratitude">
            <h2>
                Thank you for dedicating some of your time to see my portfolio, I will answer your message soon! <span>😀</span>
            </h2>
        </div>
    `
}