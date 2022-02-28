import React from "react";

export const ContactForm = () => {
  return (
    <div className="contact-form-home-container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          // rows="5"
        ></textarea>
      </div>

      <div>
        <input type="submit" value="Send Message" />
      </div>
    </div>
  );
};
