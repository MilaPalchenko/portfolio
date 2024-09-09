// styles 
import '../scss/globals/_contact.scss'

// components
import ContactLinks from '../components/ContactLinks';

// images
import Clouds from "../assets/contact-page/clouds-top.png"
import Cat_meme from "../assets/contact-page/cat-meme.png"
import Nav from '../components/Nav';


export default function Contact() {
    return (<>
        <Nav />
        <img className='background'
            src={Clouds}
            alt="clouds-background" />

        <div className="container">
            <div className="contacts">
                <ContactLinks />
                <h1 className='contacts__hire-text'>Currently open for job offers. Feel free to contact me.</h1>
                <div className="contacts contacts__wrap">
                    <span className='contacts__work-types--title'>Prefered work types:</span>
                    <ul className="contacts__work-types">
                        <li className="contacts__work-types--item">Hybrid</li>
                        <li className="contacts__work-types--item">Office</li>
                        <li className="contacts__work-types--item">Remote</li>
                    </ul>
                </div>

                <img src={Cat_meme} alt="" className="cat-meme" />
                <h2 className="cat-meme-text">Please contact me and let me work for you</h2>
            </div>
        </div>
    </>);
}