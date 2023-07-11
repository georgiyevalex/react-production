import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense} from "react";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    return (
        <div className={classNames('app', {selected: true}, ['cls2', 'cls3'])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
