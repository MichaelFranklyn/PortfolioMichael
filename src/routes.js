import { Route, Routes } from "react-router-dom";
import AboutMePage from "./pages/P_AboutMe";
import ContactsPage from "./pages/P_Contacts";
import HomePage from "./pages/P_Home";
import ProjectsPage from "./pages/P_Projects";

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