import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, MenuItem, Button, FormControl, InputLabel, Select } from "@mui/material";
import contact2 from "../assets/contactus2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        `${import.meta.env.your_service_id}`,  // Replace with your EmailJS Service ID
        `${import.meta.env.your_template_id}`, // Replace with your EmailJS Template ID
        formData,
        `${import.meta.env.your_public_key}`   // Replace with your EmailJS Public Key
      )
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", service: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-gray-100 py-12 mt-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img src={contact2} alt="Contact" className="w-full md:w-3/4 lg:w-1/2 h-auto object-cover" />
        </div>

        <div className="w-full md:w-1/2 lg:mr-20 p-4">
          <div className="bg-white p-8 shadow-lg rounded-lg w-full">
            <h2 className="text-3xl font-semibold text-center mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <TextField 
                  label="Your Name" 
                  variant="outlined" 
                  fullWidth 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <TextField 
                  label="Phone Number" 
                  variant="outlined" 
                  fullWidth 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <FormControl fullWidth>
                  <InputLabel>Select Service</InputLabel>
                  <Select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    label="Select Service"
                  >
                    <MenuItem value="vrBusinessCard">VR Business Card</MenuItem>
                    <MenuItem value="WebDevelopment">Web Development</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="mb-4">
                <TextField 
                  label="Email" 
                  type="email" 
                  variant="outlined" 
                  fullWidth 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <TextField 
                  label="Message" 
                  variant="outlined" 
                  multiline 
                  rows={4} 
                  fullWidth 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                size="large"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "SEND"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
