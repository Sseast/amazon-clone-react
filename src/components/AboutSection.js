import React from "react";

const AboutSection = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="AboutSection">
      <img
        class="float-right ..."
        src="https://www.letrot.com/photos/personnes/guy-merlino_Ymd5bAEFaw.jpg"
      />

      <div className="nine columns main-col">
        <h2 className="text-xl font-bold">About</h2>
        <p></p>
        <p className="">{bio}</p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{name}</span>
              <br />
              <span>
                {street}
                <br />
                {city} {state}, {zip}
              </span>
              <br />
              <span>{phone}</span>
              <br />
              <span>{email}</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a
                rel="noreferrer"
                target="_blank"
                href={resumeDownload}
                className="button"
              >
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
