import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    message: "",
  });
  const [error, seterror] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
    seterror({ ...error, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formdata.firstname.trim())
      newErrors.firstname = "firstname is required";
    if (!formdata.lastname.trim()) newErrors.lastname = "lastname is required";
    if (!/^\d{10}$/.test(formdata.phonenumber))
      newErrors.phonenumber = "Enter a valid 10-digit phone number";
    seterror(newErrors);

    if (!/\S+@\S+\.\S+/.test(formdata.email))
      newErrors.email = "Enter a valid email address";

    if (!formdata.message.trim())
      newErrors.message = "Please enter a valid message";

    seterror(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleformsubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const serviceId = "service_17qjbhc";
    const templateId = "template_fvzkftj";
    const userId = "HgAx1RQ4wA1eFGqRu";

    const templateParams = {
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      phonenumber: formdata.phonenumber,
      email: formdata.email,
      message: formdata.message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then((res) => {
      alert("Message sent successfully");
      console.log("contact form succesfully", res);
      setformdata({
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        message: "",
      });
    });
  };
  return (
    <>
      <form onSubmit={handleformsubmit}>
        <div>
          firstName:
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={formdata.firstname}
              onChange={handlechange}
            />
            <span style={{ color: "red" }}>{error.firstname}</span>
          </div>
          lastName:
          <div>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={formdata.lastname}
              onChange={handlechange}
            />
            <span style={{ color: "red" }}>{error.lastname}</span>
          </div>
        </div>
        phoneNumber:
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            name="phonenumber"
            value={formdata.phonenumber}
            onChange={handlechange}
          />
          <span style={{ color: "red" }}>{error.phonenumber}</span>
        </div>
        Email:
        <div>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={formdata.email}
            onChange={handlechange}
          />
          <span style={{ color: "red" }}>{error.email}</span>
        </div>
        Message:
        <div>
          <textarea
            placeholder="Message"
            name="message"
            value={formdata.message}
            onChange={handlechange}
          ></textarea>
          <span style={{ color: "red" }}>{error.message}</span>
        </div>
        <button type="submit">Submit Message</button>
      </form>
    </>
  );
};

export default ContactForm;
