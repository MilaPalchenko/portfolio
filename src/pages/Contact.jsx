// styles 
import '../scss/globals/_contact.scss'

// components
import Header from "../components/Header";

// images

//fix coulds file 
import Clouds from "../assets/clouds-top.png" 
import Cat_meme from "../assets/cat-meme.png"

import Github from "../assets/contact-icons/github.png"
import LinkedIn from "../assets/contact-icons/linkedin.png"
import Telegram from "../assets/contact-icons/telegram.png"
import Email from "../assets/contact-icons/email.png"
import Phone from "../assets/contact-icons/phone-call.png"

export default function Contact() {
    return (<>
        <Header />

        <img className='background'
            src={Clouds}
            alt="clouds-background" />

        <div className="container">
            <div className="contacts">
                <h1 className="contacts__header">Contacts</h1>
                <div className="contacts__items">
                        <a href="https://github.com/MilaPalchenko"
                        target='_blank'
                            className='contacts__items--link'>
                            <img src={Github}
                                className='contacts__items--img'
                                alt="github-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/liudmyla-palchenko-0a0709254/"
                        target='_blank'
                            className='contacts__items--link'>
                            <img src={LinkedIn}
                                className='contacts__items--img'
                                alt="linkedIn-icon" />
                        </a>
                        <a href="https://t.me/Markelowa"
                        target='_blank'
                            className='contacts__items--link'>
                            <img src={Telegram}
                                className='contacts__items--img'
                                alt="telegram-icon" />
                        </a>
                        <a href="mailto:liuda.palchenko@gmail.com"
                            className='contacts__items--link'>
                            <img src={Email}
                                className='contacts__items--img'
                                alt="email-icon" />
                        </a>
                        <a href="tel:+380930186637"
                            className='contacts__items--link'>
                            <img src={Phone}
                                className='contacts__items--img'
                                alt="phone-icon" />
                        </a>
                </div>
                <h1 className='contacts__hire-text'>Currently open for job offers. Feel free to contact me.</h1>
                <img src={Cat_meme} alt="" className="cat-meme" />
                <h2 className="cat-meme-text">Please contact me and let me work for you</h2>
            </div>
        </div>
    </>);
}