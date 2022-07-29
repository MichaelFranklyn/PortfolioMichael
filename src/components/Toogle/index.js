import './style.css';
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

function Toogle() {
    return (
        <div className="contentToogle">
            <Moon className='toogleIcon' />
            <Sun className='toogleIcon' />

            <div
                className='toogleCircle'>
                    a
            </div>
        </div>
    );
}

export default Toogle;