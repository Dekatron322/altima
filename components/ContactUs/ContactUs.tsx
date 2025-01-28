"use client"

import Image from "next/image"
import { useState } from "react"

export default function NewContact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    setResponseMessage("")

    try {
      const response = await fetch("https://altima.fyber.site/contact/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setResponseMessage("Message sent successfully!")
        setFormData({ full_name: "", email: "", message: "" })
      } else {
        // Define the shape of the error response
        type ErrorResponse = {
          message?: string
        }

        const errorData = (await response.json()) as ErrorResponse
        setResponseMessage(`Error: ${errorData.message || "Failed to send message."}`)
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="paddings w-full  max-sm:px-0" id="contact">
      <div className="w-full xl:py-2">
        <div className="flex flex-col items-center justify-center">
          <div className="input-field-two ">
            <input
              type="text"
              id="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              className="bg-transparent text-xs text-white outline-none focus:outline-none"
              style={{ width: "100%" }}
            />
          </div>

          <div className="input-field-two my-7">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-xs text-white outline-none focus:outline-none"
              style={{ width: "100%" }}
            />
          </div>

          <div className="text-area-two">
            <textarea
              id="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[200px] bg-transparent text-xs text-white outline-none focus:outline-none"
              style={{ width: "100%" }}
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`font-regular mt-7 flex items-center justify-center gap-2 rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-4 uppercase text-[#FFFFFF] max-sm:w-full md:w-[682px] ${
              loading ? "opacity-50" : ""
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
      {responseMessage && (
        <div className="animation-fade-in fixed bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#000000]">{responseMessage}</span>
          <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="" />
        </div>
      )}
    </section>
  )
}
