import {Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutMePage from "./pages/AboutMe";
import ProjectsPage from "./pages/Projects";
import ContactsPage from "./pages/Contacts";

function RotasPrincipais() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutMe" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
    );
}

export default RotasPrincipais;
