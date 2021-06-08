import React from "react";
import {
  ContactContainer,
  Title,
  SubTitle,
  ContactArea,
  Form,
  Info,
} from "../../styles/Compoments/Contact";
function Contact() {
  return (
    <ContactContainer>
      <Title>
        <h1>CONTACT</h1>
      </Title>
      <SubTitle>
        <h1>Please Contact Us</h1>
        <p>don't be shy if you want write message</p>
      </SubTitle>
      <ContactArea>
        <Form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input className="message" type="text" placeholder="Your Message" />
          <input className="check" type="text" placeholder="Code" />
          <br />
          <button>SEND</button>
        </Form>
        <Info>
          <div className="ınfo-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>Universel State New York City / United State</p>
          </div>
          <div className="ınfo-item">
            <i class="fas fa-phone-square-alt"></i>
            <p>+1 154 651 45 84</p>
          </div>
          <div className="ınfo-item">
            <i class="fas fa-envelope"></i>
            <p>fashion@fashion.com</p>
          </div>
        </Info>
      </ContactArea>
    </ContactContainer>
  );
}

export default Contact;
