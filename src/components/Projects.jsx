// styles 
import "../scss/components/_projects.scss"

// images 
import Recipe_site from '../assets/about-page/site-preview/recipe-preview.png'
import Todo_site from '../assets/about-page/site-preview/todo-preview.png'
import Quotes_site from '../assets/about-page/site-preview/quotes-preview.png'
import Business_card_site from '../assets/about-page/site-preview/business-card-preview.png'

export default function Projects() { 
    return(
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
                                    src={Todo_site} alt="toDo list-site" />
                                <h2 className="project__title">{"< Todo-List >"}</h2>
                            </a>
                        </div>
                        <div className="project">
                            <a className="project__link" target="_blank"
                                href="https://random-quotes-mpal.netlify.app/">
                                <img className="project__img-preview"
                                    src={Quotes_site} alt="random quotes-site" />
                                <h2 className="project__title">{"< Random Quotes >"}</h2>
                            </a>
                        </div>
                        <div className="project">
                            <a className="project__link" target="_blank"
                                href="https://darina-photographer.netlify.app/">
                                <img className="project__img-preview"
                                    src={Business_card_site} alt="business card-site" />
                                <h2 className="project__title">{"< Business Card Site >"}</h2>
                            </a>
                        </div>
                    </div>
    );
}