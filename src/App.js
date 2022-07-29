import './style.css';
import Header from './components/Header/index'
import Home from './components/Home/index'
import Services from './components/Services/index'

function App() {
    return (
        <div className="contentApp">
            <Header />
            <Home />
            <Services/>
        </div>
    );
}

export default App;