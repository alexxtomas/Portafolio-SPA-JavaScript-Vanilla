import { template as practicesCards } from "../components/PracticeCard"
import { template as projectsCards } from "../components/ProjectCards"

export const template = () => `
    <section class="projects">
        <h2>Deployed</h2>
            <div class="projects-container">
                ${projectsCards().toString()
                                  .replace(/,/g, '')}
            </div>
        <h2>Practices</h2>
            <div class="practices-container">
                    ${practicesCards().toString()
                                     .replace(/,/g, '')}
            </div>
    </section>
`