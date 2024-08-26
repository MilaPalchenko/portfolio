// styles 
import "../scss/components/_short-text-vers.scss"

export default function ShortTextVers () { 
    return(
        <section className="about-container__short-version">
                            <h1 className="about-container__short-version--title">Short Version:</h1>
                            <aside className="about-container__short-version__wrap">
                                <p className="about-container__short-version--text">27y.o. Kyiv.</p>
                                <h1 className="about-container__short-version--text-title">Learned:</h1>
                                <ul className="list">
                                    <ul className="list--title">
                                        <li className="list--nested-title">Adobe Photoshop in 2008:</li>
                                        <li className="list--item">photo-editing</li>
                                        <li className="list--item">frame-by-frame animations;</li>
                                        <li className="list--item">seamless images;</li>
                                        <li className="list--item">blog site-pages design.</li>
                                    </ul>
                                    <li className="list--title">English B2.</li>
                                    <li className="list--title">Very basic Java in 2021.</li>
                                    <li className="list--title">Very basic C++ in 2023.</li>
                                    <li className="list--title">HTML, CSS, SASS, JavaScript, React in the end of 2023-current time.</li>
                                    <li className="list--title">Basic knowledge of GitHub.</li>
                                    <li className="list--title">Simple web-page design in Figma.</li>
                                </ul>
                                <h1 className="about-container__short-version--text-title">Project Links:</h1>
                                <ul className="list">
                                    <li className="list--item">
                                        <a href="">Recipe Site</a>
                                    </li>
                                    <li className="list--item">
                                        <a href="">Todo-List</a>
                                    </li>
                                    <li className="list--item">
                                        <a href="">Business Card Site</a>
                                    </li>
                                    <li className="list--item">
                                        <a href="">Random Quotes</a>
                                    </li>
                                    <li className="list--item">
                                        <a href="">Resume Card Site</a>
                                    </li>
                                    <li className="list--item">
                                        <a href="">Weather Site</a>
                                    </li>
                                    <li className="list--item">
                                        <a href="">CodePen Gallery</a>
                                    </li>
                                </ul>
                            </aside>
                        </section>
    ); 
}