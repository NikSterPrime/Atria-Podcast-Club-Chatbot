import React from "react";

function ContactForm(){
    return(
        <div className="contact-form-section">
        <h2>🎤 Want to Share a Story or Get in Touch?</h2>
        <p>We're always excited to hear from students, storytellers, and guests. Fill out the form below and we'll reach out!</p>

        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" placeholder="Your full name" required />
          </label>

          <label>
            Contact Number:
            <input type="tel" name="contact" placeholder="10-digit mobile number" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            Address:
            <textarea name="address" rows="3" placeholder="Your address or college block" required></textarea>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default ContactForm;