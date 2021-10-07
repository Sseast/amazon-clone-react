import React, { useState } from "react";

function ContactForm({ data }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage =
      "For all pricing and booking inquiries , please fill out the form below. Please include as much relevant information as possible, for example, the location of the project, amount of images needed, intended usage of the images, and timeframe for project completion. I look forward to hearing from you.";
  }

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };
  return (
    <div className="flex p-4 bg-white ">
      <div className="four columns footer-widgets">
        <h2 className="font-semibold text-md">Get in Touch</h2>
        <div className="widget widget_contact">
          <h4>Address and Phone</h4>
          <p className="text-xs">
            {contactName}
            <br />
            {contactEmail}
            <br />
            <br />
            {street} <br />
            {city}, {state} {zip}
            <br />
            <span>{phone}</span>
          </p>
        </div>
      </div>

      <div className="pl-4" id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1 className="mb-5 text-2xl font-bold">
              <span>Contact.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{contactMessage}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form onSubmit={submitForm}>
              <fieldset>
                <div>
                  <label className="flex" htmlFor="contactName">
                    Name<span className="required">*</span>
                  </label>
                  <div className="flex justify-items-center">
                    <input
                      placeholder="First Name"
                      className="input"
                      type="text"
                      defaultValue=""
                      value={firstName}
                      id="contactFirstName"
                      name="contactFirstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      placeholder="Last Name"
                      className="input"
                      className="bg-gray-100 border rounded-sm"
                      type="text"
                      defaultValue=""
                      value={lastName}
                      id="contactLastName"
                      name="contactLastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="flex" htmlFor="contactEmail">
                    Email<span className="required">*</span>
                  </label>
                  <input
                    className="flex-grow input"
                    type="text"
                    defaultValue=""
                    value={email}
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex" htmlFor="contactSubject">
                    Subject
                  </label>
                  <input
                    className="input"
                    type="text"
                    defaultValue=""
                    value={subject}
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex" htmlFor="contactMessage">
                    Message<span className="required">*</span>
                  </label>
                  <textarea
                    className="h-40 input"
                    cols="50"
                    rows="15"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  <button onClick={submitForm} type="submit" className="button">
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
