import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import './style.css';

function Contacts() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_79ac93h', e.target, '7UFfUohz2llIIk4Aa')

            .then((result) => {
                toast.success('Mensagem enviada com sucesso! 👍', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }, (error) => {
                toast.error('Que pena! Ocorreu um erro. Tente Novamente ❌', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        e.target.reset()
    }

    return (
        <div className="contentContacts">
            <div className='titleContentContacts'>
                <h1>Entre em contato</h1>
            </div>
            <form className='InputsContentContacts' onSubmit={sendEmail}>
                <label>Nome</label>
                <input type="text" className="form-control" required placeholder="Digite seu nome" name="name"></input>

                <label>E-mail</label>
                <input type="email" className="form-control" required placeholder="Digite seu email" name="email"></input>

                <label >Mensagem</label>
                <textarea
                    placeholder='Escreva algo'
                    required
                    name="message"
                />

                <div>
                    <button
                        className='buttonGreen'
                        type="submit"
                        value="Enviar mensagem"
                    >Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Contacts;