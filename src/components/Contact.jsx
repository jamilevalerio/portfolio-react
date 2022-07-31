import '../styles/contact.scss';
import {AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai';


const contactInfo = [
  {name: "whatsapp", icon: <AiOutlineWhatsApp />, link: "https://wa.me/message/4EYABFBQRLNLG1", title: "Whatsapp", content: "(22) 99841-5529"},
  {name: "email", icon: <AiOutlineMail />, link: "mailto:jamilevalerio.code@gmail.com", title: "E-mail", content: "jamilevalerio.code@gmail.com"},
];

const Contact = () => {
  return (
    <section className="contact">
      {contactInfo.map((info) => 
      <div className='contact-info' key={info.name}>
        <a href={info.link}>{info.icon}</a>
        <div>
          <h3>{info.title}</h3>
          <p>{info.content}</p>
        </div>
      </div>
      )}
    </section>
  )
}

export default Contact
