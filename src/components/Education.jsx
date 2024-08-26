// styles 
import "../scss/components/_education.scss"

//images 
import Shecodes_certificate from '../assets/about-page/sertificates/shecodes.png'
import Freecodepen_certificate from '../assets/about-page/sertificates/freeCodePen.jpg'

export default function Education() {
    return (
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
    );
}