import React, { useState } from "react";

export const ContactContainer = () => {
  return (
    <div className="bottom-div">
      <div className="container is-narrow">
        <div className="box">
          <div className="field">
            <label className="label">Your Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Your Email</label>
            <div className="control has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value=""
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Your Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
