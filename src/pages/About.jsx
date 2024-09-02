// style
import '../scss/globals/_about.scss'

// components
import Header from "../components/Header.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import ExpandedText from '../components/ExpandedText.jsx';
import ShortTextVers from '../components/ShortTextVers.jsx';
import Projects from '../components/Projects.jsx';
import WorkExp from '../components/WorkExp.jsx';
import Education from '../components/Education.jsx'
import Nav from '../components/Nav.jsx';

// images
import Clouds_background from '../assets/about-page/left-cloud-mid.png'
import Time_curve from '../assets/about-page/time-curve.png'

export default function About() {
    return (<>
        <Nav />
        <ScrollToTop />
        <main>
            <div className="wrapper">
                <article className="first-page">
                    <img className="clouds-background"
                        src={Clouds_background} alt="clouds background" />
                    <div className="about-container">
                        <ExpandedText />
                        <ShortTextVers />
                    </div>
                    <Projects />
                    <article className="second-page">
                        <WorkExp />
                        <img src={Time_curve} alt="time curve" className="time-curve" />
                        <Education />
                    </article>
                </article>
            </div>
        </main>
    </>);
}