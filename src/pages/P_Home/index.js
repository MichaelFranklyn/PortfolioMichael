import Header from '../../components/C_Header';
import Home from '../../components/C_Home';
import './style.css';

function HomePage() {
    return (
        <div className="contentHomePage">
            <Header
                pagina="home"
            />
            <Home />
        </div>
    );
}

export default HomePage;