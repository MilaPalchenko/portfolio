// styles
import "../scss/components/_parallax-page.scss"


import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// images
// !! fix names
import background from '../assets/layers/background.png'
import cloudsTop from '../assets/layers/clouds-top.png'
import cloudsBottom from '../assets/layers/clouds-bottom-full.png'
import rightCloudWithSun from '../assets/layers/right-cloud-with-sun.png'
import leftCloud from '../assets/layers/left-cloud-mid.png'

export default function ParallaxSunset() {

    return (<div id="wrapper">
        <section className='wrap-section'>
            <Parallax pages={2} >
                <ParallaxLayer>

                </ParallaxLayer>
                <ParallaxLayer>
                    <img id="background" src={background} />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={-1}>
                    <h1 id="title">Front-end Developer</h1>
                </ParallaxLayer>

                <ParallaxLayer
                    speed={0.6}>
                    <img id="clouds-top" src={cloudsTop} />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={-0.45}>
                    <img id="clouds-mid" src={rightCloudWithSun} />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={-0.45}>
                    <img id="clouds-mid" src={leftCloud} />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={-0.48}>
                    <img id="clouds-bottom" src={cloudsBottom} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={1}>
                        
                    <div className="intro-info">
                        <div className="skill-box-wrapper">
                            <div className="skill-box">
                                <h2 className="skill-box__title underline-animation">Soft skills:</h2>
                                <ul className="skill-box__list">
                                    <li className="skill-box__list--item underline-animation">
                                        Dedicated
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        Commited
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        Hardworking
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        Communicative
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        Adaptive
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        Open-minded
                                    </li> <br />
                                </ul>
                            </div>

                            <div className="skill-box">
                                <h2 className="skill-box__title underline-animation">Tech skills:</h2>
                                <ul className="skill-box__list">
                                    <li className="skill-box__list--item underline-animation">
                                        React
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        JavaScript
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        SASS
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        HTML
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        English B2
                                    </li> <br />
                                    <li className="skill-box__list--item underline-animation">
                                        Adobe Photoshop
                                    </li> <br />
                                </ul>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

            </Parallax>
        </section>
    </div>
    );
}
