import { template as skills } from "../components/Skills"
export const template = () => `
    <section class="home">
        <div class="presentation">
            <div>
                <h2>I'm Alex Tomas</h2>
                <p>Junior Full Stack Developer </p>
            </div>
            <div>
                <img src="../../public/images/good-personal-photo.jpg" alt="Personal Photo">
            </div>
        </div>
        <div class="about-me">
            <h3>About Me</h3>
            <div>
            <p>
            <span>What do I think you should know about me?<br></span>
            Well, I am currently 18 years old, I am passionate about technology, fitness and learning.🏋🏻<br>
            I have been totally self-taught for a long time, even though I am currently attending a bootcamp to get to the next level.🔥<br>
            I am passionate about what I do and that is reflected in the fact that my focus is constantly on being a better developer.<br>
            I am currently looking for my first job opportunity, I would appreciate the opportunity to demonstrate what I have learned in all this time.</p>
            </div>
             
        </div>
        <div class="skills">
            <h3>Skills 🧑🏻‍💻</h3>
            <div>
                ${skills()}
            </div>
        </div>
        
    </section>

`

