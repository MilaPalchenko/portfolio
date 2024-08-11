import Header from "../components/Header";
import ProfilePic from '../assets/profile-pic.jpg'
import './styles/aboutNew.css'
import ScrollToTop from "../components/ScrollToTop";
import Clouds_background from '../assets/layers/left-cloud-mid.png'

export default function About() {

    return (<>
        <Header />

        {/* <h2>About page</h2> */}
        {/* <ul>
            <li>
                <Link to="/home">Return</Link>
            </li>
        </ul> */}
        <ScrollToTop />
        <main>
            <div className="wrapper">
                <article>
                    <div className="first-page-wrap">
                        <img className="clouds-background"
                            src={Clouds_background} alt="" />
                        <div className="about-container">

                            {/* <div className="style-test"></div>
                            <div className="style-test-two"></div> */}
                            <section className="about-container__long-version">
                                <img className="about-container__profile-img" src={ProfilePic} />
                                <h1 className="about-container__name-title">Hi, I'm Liudmyla! </h1>
                                <article className="about-container__about-text">
                                    <p className="about-container__text"> 27 years old. Based in Kyiv. </p>

                                    <p className="about-container__text">Curios personality. Know how to google. Cat person. Into aesthetics.
                                        Learned English by binge-watching tv-shows. And passionate about things I like.
                                        Leading to currently learning coding, which is being front-end, to be exact.</p>

                                    <p className="about-container__text">Gained some Adobe Photoshop and Adobe ImageReady skills during 2008, working in CS2 version.
                                        Such as photo-editing, frame-by-frame animations, seamless images, creating blog-type site-pages designs from scratch. </p>

                                    <p className="about-container__text">First came across anything remotely close to coding in 2010, seeing totally
                                        different and personalised Tumblr pages, leading to wanting to create page of my own, simply for the sake of
                                        just having it. Yet failing due to not knowing English at all and finding it a bit too complicated, which were
                                        just HTML and CSS at the times.

                                    </p>
                                    <p className="about-container__text">Later on coming back to the idea of coding in the end of 2021 after getting to see what
                                        friend was doing as one of his projects and asking them for basic explanation about what the field itself is. Which led to
                                        curiosity in the coding itself on top of the wish to creating something myself and explanation of the basics of loops
                                        and data types and being able to make simple app such as student's grade calculator in React, using only syntax explanations,
                                        excluding any other possible sources of learning.
                                    </p>
                                    <p className="about-container__text">Stopped the coding learning in 2022 due to full scaled invasion and coming back to it
                                        in 2024, creating multiple projects listed down.
                                    </p>

                                </article>
                            </section>

                            <section className="about-container__short-version">
                                <h1 className="about-container__short-version--title">Short Version:</h1>
                                <aside className="about-container__short-version__wrap">
                                    <p className="about-container__short-version--text">27y.o. Kyiv.</p>
                                    <h1 className="about-container__short-version--text-title">Learned:</h1>
                                    <ul className="list"> 
                                        <li className="list--title">Adobe Photoshop in 2008:
                                            <li className="list--item">photo-editing</li>
                                            <li className="list--item">frame-by-frame animations;</li>
                                            <li className="list--item">seamless images;</li>
                                            <li className="list--item">blog site-pages design.</li>
                                        </li>
                                        <li className="list--title">Very basic Java in 2021.</li>
                                        <li className="list--title">Very basic C++ in 2023.</li>
                                        <li className="list--title">HTML, CSS, JavaScript, React in the end of 2023-current time.</li>
                                        <li className="list--title">Basic knowledge of GitHub.</li>
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
                        </div>


                        <div className="about-container__projects-center">
                            <div className="about-container__projects">
                                <h2 className="about-container__projects--title">Newer projects:</h2>
                                <ul>
                                    <li><a href="https://recipe-site-mpal.netlify.app/" target="_blank">Recipe Site</a></li>
                                    <li><a href="https://to-do-list-react-test.netlify.app/" target="_blank">Todo-List</a></li>
                                    <li><a href="https://darina-photographer.netlify.app/" target="_blank">Business Card Site</a></li>
                                    <li><a href="https://random-quotes-mpal.netlify.app/" target="_blank">Random Quotes</a></li>
                                </ul>
                            </div>
                            <div className="about-container__projects">
                                <h2 className="about-container__projects--title">Older projects:</h2>
                                <ul>
                                    <li><a href="https://resume-palchenko-l.netlify.app/" target="_blank">Resume Card Site</a></li>
                                    <li><a href="https://weather-app-any-city.netlify.app/" target="_blank">Weather Site</a></li>
                                    <li><a href="https://codepen.io/milapiu" target="_blank">CodePen gallery</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </article>
            </div>
        </main>

    </>);
}