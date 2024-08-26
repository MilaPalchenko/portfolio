// styles
import "../scss/components/_parallax-page.scss"


import { Parallax, ParallaxLayer } from '@react-spring/parallax'

//components
import SkillsBlock from "./SkillsBlock"

// images
import Background from '../assets/home-page/layers/background.png'
import Clouds_top from '../assets/home-page/layers/clouds-top.png'
import Right_cloud_with_sun from '../assets/home-page/layers/right-cloud-with-sun.png'
import Left_cloud from '../assets/home-page/layers/left-cloud-mid.png'
import Clouds_bottom from '../assets/home-page/layers/clouds-bottom-full.png'

export default function ParallaxSunset() {

    return (<div id="wrapper">
        <section className='wrap-section'>
            <Parallax pages={2} >
                <ParallaxLayer>
                    <img id="background" src={Background} />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={-1}>
                    <h1 id="title">Front-end Developer</h1>
                </ParallaxLayer>

                <ParallaxLayer
                    speed={0.6}>
                    <img id="clouds-top" src={Clouds_top} />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={-0.45}>
                    <img id="clouds-mid" src={Right_cloud_with_sun} />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={-0.45}>
                    <img id="clouds-mid" src={Left_cloud} />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={-0.48}>
                    <img id="clouds-bottom" src={Clouds_bottom} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={1}>
                        <SkillsBlock />
                </ParallaxLayer>
            </Parallax>
        </section>
    </div>
    );
}
