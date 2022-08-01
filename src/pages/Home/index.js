import Header from '../../components/Header';
import Home from '../../components/Home';
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