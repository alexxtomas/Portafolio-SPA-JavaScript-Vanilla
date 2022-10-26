import data from "../data/data"
const {projects} = data

export const template = () => 
    projects.map(({name, src, description, link, sourceCode}) => `
        <figure class="project-card">
            <h3 class="${name}">${name}</h3>
            <img src="${src}" alt="${name} image">
            <figcaption>${description} <br> <span class="link-title">Link:</span> <br> <a href="${link}" target="_blank">${link}</a> <br> <span class="link-title">Source Code:</span> <br> <a href="${sourceCode}" target="_blank"> ${sourceCode}</a></figcaption>
        </figure>
    `)
