import Contacts from '../../components/C_Contacts';
import Header from '../../components/C_Header';
import InfoContacts from '../../components/C_InfoContacts';
import './style.css';

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