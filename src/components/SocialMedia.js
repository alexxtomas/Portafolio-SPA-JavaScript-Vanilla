import data from "../data/data"
const {socialMedia} = data
export const template = () => `
    <ul class="social-links">
        ${socialMedia.map(({content, src, alt, link}) => (content === "") ? `<li><a href="${link}" target="_blank"><img src="${src}" alt="${alt}"></a></li></a>`
                                                                          : `<li><img src="${src}" alt="${alt}"> <span>${content}</span></li>`).toString()
                                                                                                                                              .replace(/,/g, '')
        }
    </ul>
`

