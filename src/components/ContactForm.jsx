import React, { useState } from "react";
import hero1 from "../assets/images/hero_1.jpg";
import axios from "axios";
const sendEmailURL = "<YOUR_FUNCTION_URL>";

export default function Form() {
  const [state, setState] = useState({
    message: "",
    firstName: "",
    subject: "",
    email: "",
  });

  const { message, firstName, lastName, email } = state;

  const handleState = ({ target: { id, value } }) =>
    setState({ ...state, [id]: value });

  const sendEmail = (e) => {
    debugger;
    e.preventDefault();
    axios.post(sendEmailURL, {
      params: {
        message,
        firstName,
        lastName,
        email,
      },
    });
  };

  return (
    <form onSubmit={(e) => sendEmail(e)}>
      <div className="form-group row">
        <div className="col-md-6 mb-4 mb-lg-0">
          <input
            required
            type="text"
            className="form-control"
            placeholder="First name"
            id="firstName"
            onChange={handleState}
            value={firstName}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id="lastName"
            onChange={handleState}
            value={lastName}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-12">
          <input
            required
            type="text"
            className="form-control"
            placeholder="Email address"
            id="email"
            onChange={handleState}
            value={email}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-12">
          <textarea
            required
            id="message"
            onChange={handleState}
            value={message}
            name=""
            className="form-control"
            placeholder="Write your message."
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-6 mr-auto">
          <input
            type="submit"
            className="btn btn-block btn-primary text-white py-3 px-5"
            value="Send Message"
          />
        </div>
      </div>
    </form>
  );
}
