import './style.css';
import Header from '../../components/Header';
import Home from '../../components/Home';

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