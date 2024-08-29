// styles 
import "../scss/components/_expanded-text.scss"


// images 
import Profile_picture from '../assets/about-page/profile-pic.jpg'

export default function ExpandedText() {
    return (
        <section className="about-container__long-version">
            <img className="about-container__profile-img" src={Profile_picture} />
            <h1 className="about-container__name-title">Hi, I'm Liudmyla! </h1>
            <article className="about-container__about-text">
                <p className="about-container__text"> 27 years old. Based in Kyiv. </p>

                <p className="about-container__text">Curious personality. Knows how to google. Cat person. Into aesthetics.
                    Learned English by binge-watching TV-shows. And passionate about things I like.
                    Leading to currently learning coding, which is being front-end, to be exact.</p>

                <p className="about-container__text">Gained some Adobe Photoshop and Adobe ImageReady skills in 2008, working in CS2 version.
                    These skills include photo-editing, frame-by-frame animations, seamless images, and creating blog-type site designs from scratch.
                </p>
                <p className="about-container__text">First encountered anything remotely close to coding in 2010, seeing totally
                    different and personalised Tumblr pages, leading to wanting to create page of my own, simply for the sake of
                    just having it. However failed due to not knowing English at all and found it a bit too complicated, even tho
                    it was just HTML and CSS at the times.
                </p>
                <p className="about-container__text">Later, I revisited the idea of coding at the end of 2021 after observing a
                    friend working on one of his projects. I asked him for a basic explanation of what the field entails. This
                    sparked my curiosity about coding itself, along with a desire to create something on my own. I learned the
                    basics of loops and data types and managed to build a simple app, like a student’s grade calculator in React,
                    using only syntax explanations without relying on any other learning resources.
                </p>
                <p className="about-container__text">Stopped learning to code in 2022 due to the full-scale invasion and recently
                    resumed in 2024, working on multiple projects listed below.
                </p>
            </article>
        </section>
    );
}

