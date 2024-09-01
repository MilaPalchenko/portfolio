import Header from "../components/Header";
import Nav from "../components/Nav";
import ParallaxPage from "../components/ParallaxPage";

export default function Home() {

    return (<>
        <Nav/>
        <main>
            <ParallaxPage />
        </main>

    </>);
}