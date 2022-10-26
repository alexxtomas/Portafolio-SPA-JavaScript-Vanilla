import data from "../data/data"
const {practices} = data

export const template = () => 
    practices.map(({name, description, sourceCode, tecnologies}) => `
        <div class="practice-card">
            <h3 class="${name}">${name}</h3>
            <p>${description}</p>
            <p class="source-code">Source Code: <a href="${sourceCode}" target="_blank">${sourceCode}</a></p>
            <p class="tecnologies">Tecnologies: ${tecnologies.map(t => `<span>${t} </span>`)}</p>
        </div>
    `

    )
