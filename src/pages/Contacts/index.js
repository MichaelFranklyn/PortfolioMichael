import './style.css';
import Header from '../../components/Header';
import Contacts from '../../components/Contacts';
import InfoContacts from '../../components/InfoContacts'


function ContactsPage() {
    return (
        <div className="contentContactsPage">
            <Header />

            <div className='divContentContactsPage'>
                <InfoContacts />
                <Contacts />
            </div>
        </div>
    );
}

export default ContactsPage;