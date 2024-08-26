import "../scss/components/_contact-links.scss"

// images
import Github from "../assets/contact-page/contact-icons/github.png"
import LinkedIn from "../assets/contact-page/contact-icons/linkedin.png"
import Telegram from "../assets/contact-page/contact-icons/telegram.png"
import Email from "../assets/contact-page/contact-icons/email.png"
import Phone from "../assets/contact-page/contact-icons/phone-call.png"

export default function ContactLinks() {
    return (<>
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
        </>
    );
}