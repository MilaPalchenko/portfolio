// styles 
import "../scss/components/_home-skills-block.scss"

export default function SkillsBlock() {
    return (<div className="skill-box-wrapper">
        <div className="skill-box">
            <h2 className="skill-box__title underline-animation">Soft skills:</h2>

            <div className="skill-box__block--soft">
                <button className="skill-box__block--btn">Dedicated</button>
                <button className="skill-box__block--btn">Commited</button>
                <button className="skill-box__block--btn">Hardworking</button>
                <button className="skill-box__block--btn">Communicative</button>
                <button className="skill-box__block--btn">Adaptive</button>
                <button className="skill-box__block--btn">Open-minded</button>
                <button className="skill-box__block--btn">Curious</button>
                <button className="skill-box__block--btn">Organizational</button>
                <button className="skill-box__block--btn">Attention to detail</button>
            </div>
        </div>

        <div className="skill-box">
            <h2 className="skill-box__title underline-animation">Tech skills:</h2>

            <div className="skill-box__block--tech">
                <button className="skill-box__block--btn">React</button>
                <button className="skill-box__block--btn">JavaScript</button>
                <button className="skill-box__block--btn">SASS</button>
                <button className="skill-box__block--btn">CSS</button>
                <button className="skill-box__block--btn">HTML</button>
                <button className="skill-box__block--btn">Git</button>
                <button className="skill-box__block--btn">English B2</button>
                <button className="skill-box__block--btn">Figma</button>
                <button className="skill-box__block--btn">Adobe Photoshop</button>
                <button className="skill-box__block--btn">GitHub</button>
                <button className="skill-box__block--btn">Chrome DevTools</button>
            </div>
        </div>
    </div>);
}