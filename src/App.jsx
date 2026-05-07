import './styles/global.scss'
import {About} from './components/About/About.jsx'
import {Header} from "./components/Header/Header.jsx";
import {Hero} from "./components/Hero/Hero.jsx";

export const App = () => {
    return (
        <>
            <Header />
            <Hero/>
            <About/>
        </>
    )
}