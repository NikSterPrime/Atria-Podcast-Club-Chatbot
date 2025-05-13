import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/ContactUs.css";
import ParticlesAnimation from "../components/ParticleAnimation";

function ContactUs() {
  return (
    <div className="contactus">
      <div className="headerdiv">
        <Header />
        </div>
        <div className="contentdiv">
            <ContactForm />
        </div>
        <Footer />
    </div>
  );
}

export default ContactUs;
