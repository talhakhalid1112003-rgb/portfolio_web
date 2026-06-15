import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "./Icon";

function Messaging() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);

    // Send email using EmailJS
    emailjs
      .send(
        "service_xl52gj8", // e.g. "service_xxx"
        "template_eizbn6i", // e.g. "template_xxx"
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "MxauIF_EE8LrOnBtg" // e.g. "abc123DEF"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="mb-20 ml-[20px] rounded-[15px] border border-[#3f3d3d] shadow-lg shadow-black/40 bg-[#1a1a1a]/20 h-auto text-white p-6">
      <h1 className="text-[#8852e0] font-[500] text-[20px] mb-6">
        Send a Message
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First + Last Name side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="bg-[#080808] border border-[#3f3d3d] w-full h-[40px] pl-2 rounded-[5px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3f3d3d]"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            className="bg-[#080808] border border-[#3f3d3d] w-full h-[40px] pl-2 rounded-[5px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3f3d3d]"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>

        <input
          className="bg-[#080808] border border-[#3f3d3d] w-full h-[40px] pl-3 rounded-[5px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3f3d3d]"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          className="bg-[#080808] border border-[#3f3d3d] w-full h-[40px] pl-3 rounded-[5px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3f3d3d]"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          className="bg-[#080808] border border-[#3f3d3d] w-full h-[120px] pl-3 pt-2 rounded-[5px] text-[14px] resize-none focus:outline-none focus:ring-2 focus:ring-[#3f3d3d]"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 text-[#FAFAFA] font-[600] text-[14px] h-[40px] w-full cursor-pointer justify-center rounded-[10px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8852e0 0%, #8852e0 50%, #8852e0 80%)",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p className="text-center text-sm mt-2 text-[#8852e0]">{status}</p>
        )}
      </form>
    </section>
  );
}

export default Messaging;
