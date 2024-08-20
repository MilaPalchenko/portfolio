// style
import '../scss/globals/_about.scss'

// components
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

// images
import ProfilePic from '../assets/profile-pic.jpg'
import Clouds_background from '../assets/layers/left-cloud-mid.png'
import Recipe_site from '../assets/site-preview/recipe-preview.png'
import Todo_site from '../assets/site-preview/todo-preview.png'
import Quotes_site from '../assets/site-preview/quotes-preview.png'
import Business_card_site from '../assets/site-preview/business-card-preview.png'
import Time_curve from '../assets/time-curve.png'
import Shecodes_certificate from '../assets/sertificates/shecodes.png'
import Freecodepen_certificate from '../assets/sertificates/freeCodePen.jpg'

export default function About() {

    return (<>
        <Header />
        <ScrollToTop />
        <main>
            <div className="wrapper">
                <article className="first-page">
                    <img className="clouds-background"
                        src={Clouds_background} alt="" />
                    <div className="about-container">
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
                    </div>
                    <div className="projects">
                        <div className="project">
                            <a className="project__link" target="_blank"
                                href="https://recipe-site-mpal.netlify.app/">
                                <img className="project__img-preview"
                                    src={Recipe_site} alt="recipe-site" />
                                <h2 className="project__title">{"< Recipe Site >"}</h2>
                            </a>
                        </div>
                        <div className="project">
                            <a className="project__link" target="_blank"
                                href="https://to-do-list-react-test.netlify.app/">
                                <img className="project__img-preview"
                                    src={Todo_site} alt="recipe-site" />
                                <h2 className="project__title">{"< Todo-List >"}</h2>
                            </a>
                        </div>
                        <div className="project">
                            <a className="project__link" target="_blank"
                                href="https://random-quotes-mpal.netlify.app/">
                                <img className="project__img-preview"
                                    src={Quotes_site} alt="recipe-site" />
                                <h2 className="project__title">{"< Random Quotes >"}</h2>
                            </a>
                        </div>
                        <div className="project">
                            <a className="project__link" target="_blank"
                                href="https://darina-photographer.netlify.app/">
                                <img className="project__img-preview"
                                    src={Business_card_site} alt="recipe-site" />
                                <h2 className="project__title">{"< Business Card Site >"}</h2>
                            </a>
                        </div>
                    </div>
                    <article className="second-page">
                        <div className="work-experience">
                            <h1 className="work-experience__title">
                                Work Experience
                            </h1>
                            <div className="job">
                                <h1 className="job__title">Nail technician <span className="job__place">Self-employed</span></h1>
                                <p className="job__time-period">March 2019 - Current time; March 2016 - May 2018 <span className="job__separator">|</span> Ukraine, Kyiv</p>
                                <ul className="job__skills">
                                    <li className="job__skill">
                                    Optimized workflow process; including inventory restocking.
                                    </li>
                                    <li className="job__skill">
                                    Analyzing and sorting out information.
                                    </li>
                                    <li className="job__skill">
                                    Constant skill maintenance and impovement.
                                    </li>
                                    <li className="job__skill">
                                    Photography and photo editing; including photoshop.
                                    </li>
                                    <li className="job__skill">
                                    Appointment coordination.
                                    </li>
                                    <li className="job__skill">
                                    Social-media account managment.
                                    </li>
                                    <li className="job__skill">
                                    Self-advertisement and building personal brand.
                                    </li>
                                    <li className="job__skill">
                                    Writing educationally themed texts.
                                    </li>
                                </ul>
                            </div>
                            <div className="job">
                            <h1 className="job__title">Nail technician <span className="job__place">"Wonderful life" salon</span></h1>
                                <p className="job__time-period">May 2018 - March 2019 <span className="job__separator">|</span> Ukraine, Kyiv</p>
                                <ul className="job__skills">
                                    <li className="job__skill">
                                    Provided procedure within according time for it.
                                    </li>
                                    <li className="job__skill">
                                    Maintained small talk with clients.
                                    </li>
                                    <li className="job__skill">
                                    Light restock managment.
                                    </li>
                                    <li className="job__skill">
                                    Resolved conflicts.
                                    </li>
                                </ul>
                            </div>
                            <div className="job">
                                <h1 className="job__title">Merchandiser <span className="job__place">Merchandising agency</span></h1>
                                <p className="job__time-period">October 2015 - December 2015 <span className="job__separator">|</span> Ukraine, Kyiv</p>
                                <ul className="job__skills">
                                    <li className="job__skill">
                                    Wrote price reports.
                                    </li>
                                    <li className="job__skill">
                                    Organized products according to demands.
                                    </li>
                                    <li className="job__skill">
                                    Worked with product displays.
                                    </li>
                                </ul>
                            </div>
                            <div className="job">
                                <h1 className="job__title">Assistance <span className="job__place">Fkisit Dvnz "KNEU Im. V. Hetʹmana"</span></h1>
                                <p className="job__time-period">April 2015 - June 2015 <span className="job__separator">|</span> Ukraine, Kyiv</p>
                                <ul className="job__skills">
                                    <li className="job__skill">
                                    Organizing information.
                                    </li>
                                    <li className="job__skill">
                                    Managed and maintained documentation.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img src={Time_curve} alt="" className="time-curve" />
                        <div className="education">
                            <h1 className="education__title">Education</h1>
                            <div className="university">
                                <h1 className="university__title">Kyiv National University of Technology and Design</h1>
                                <p className="university__time-period">September 2015 - January 2018 <span className="university__separator">|</span> Ukraine, Kyiv</p>
                                <p className="university__course">Marketing</p>
                            </div>
                            <div className="university">
                                <h1 className="university__title">Fkisit Dvnz "KNEU Im. V. Hetʹmana"</h1>
                                <p className="university__time-period">September 2012 - June 2015 <span className="university__separator">|</span> Ukraine, Kyiv</p>
                                <p className="university__course">Commerce</p>
                            </div>
                            <div className="certificates">
                            <h1 className="certificates__header">Certificates</h1>
                                <h1 className="certificates__title">FreeCodeCamp</h1>
                                <p className="certificates__time-period">December 2022</p>
                                <p className="certificates__course">Responsive Web Design</p>
                                <a href="https://www.freecodecamp.org/certification/fccfd017023-bb6d-4f25-a126-987b16bee5d1/responsive-web-design" target="__blank">
                                <img src={Freecodepen_certificate} alt="" className="certificates__img" />
                                </a>
                            </div>
                            <div className="certificates">
                                <h1 className="certificates__title">SheCodes</h1>
                                <p className="certificates__time-period">October 2023</p>
                                <p className="certificates__course">Introducing to Coding</p>
                                <a href="https://www.shecodes.io/certificates/8576dbb0e2e51405b2b795b85087ec22" target="__blank">
                                <img src={Shecodes_certificate} alt="" className="certificates__img" />
                                </a>
                                
                            </div>
                        </div>
                    </article>
                </article>
            </div>
        </main>

    </>);
}