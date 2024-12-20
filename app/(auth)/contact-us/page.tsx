"use client";

import ContactUs from "components/ContactUs/Contact";
import Footer from "components/Footer/Footer";
import MainFooter from "components/Footer/MainFooter";
import NewNav from "components/Navbar/NewNav";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponseMessage("");
  
    try {
      const response = await fetch("https://altima.fyber.site/contact/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ full_name: "", email: "", message: "" });
      } else {
        // Define the shape of the error response
        type ErrorResponse = {
          message?: string;
        };
  
        const errorData = (await response.json()) as ErrorResponse;
        setResponseMessage(`Error: ${errorData.message || "Failed to send message."}`);
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="bg-black">
      <NewNav />

      <ContactUs />

      <MainFooter />
      <Footer />
    </section>
  );
}
