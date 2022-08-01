import { Route, Routes } from "react-router-dom";
import AboutMePage from "./pages/AboutMe";
import ContactsPage from "./pages/Contacts";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";

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