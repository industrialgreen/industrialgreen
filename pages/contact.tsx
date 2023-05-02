import PageWrapper from "@/components/PageWrapper";
import { MdAlternateEmail } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';

const Contact = () => {
  return (
    <PageWrapper>
      <div className="contact-container">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.6667582195589!2d19.14218333058862!3d50.808059850663646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b5b0b75791b7%3A0xc2fc349a12dc3776!2sMichaela%20Faradaya%2054%2C%2042-202%20Cz%C4%99stochowa!5e0!3m2!1spl!2spl!4v1682770521887!5m2!1spl!2spl"
          width="100%"
          height="450"
          loading="lazy"
          style={{ border: "none" }}
        ></iframe>
        <div>
          <h5 className='green'>Industrial Green</h5>
          <p>ul. Michaela Faradaya 54</p>
          <p>42-202 Częstochowa</p>
          <a className="icon-button" href="mailto:biuro@msarchitekci.pl"><MdAlternateEmail />industrialgreen@gmail.com</a>
          <a className="icon-button" href="tel:+48607867999"><ImPhone />607-867-999</a>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
