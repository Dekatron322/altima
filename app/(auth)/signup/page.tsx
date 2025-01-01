"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { signUp, SignUpPayload } from "services/authService"

const Page: React.FC = () => {
  const [formData, setFormData] = useState<SignUpPayload>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setSuccessMessage(null)

    try {
      const response = await signUp(formData)
      setSuccessMessage("Signup successful!")
      setLoading(false)
      router.push("/signin")
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to sign up. Please try again.")
      setLoading(false)
    }
  }

  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage(null)
        setError(null)
      }, 3000) // Notifications will disappear after 5 seconds

      return () => clearTimeout(timer) // Clean up the timeout if component unmounts
    }
  }, [successMessage, error])

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#000000] max-md:bg-[#000000]">
        <motion.div
          className=" flex  justify-center rounded-3xl bg-[#151515] max-sm:w-[95%] max-sm:rounded-lg xl:min-w-[600px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="w-full justify-center   ">
            <div className="w-full items-center py-6 max-md:px-3 md:px-6 ">
              <p className="text-center text-lg text-[#FFFFFF99] max-sm:text-sm">Create Account</p>
              <p className="my-5 text-center text-4xl text-[#FFFFFF] max-sm:text-[28px]">Sign Up</p>
            </div>

            <div className="flex w-full justify-center md:mt-5">
              <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((field) => (
                  <div
                    key={field}
                    className="search-bg mb-2  h-[54.37px] items-center justify-between rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3 py-4 hover:border-[#1B5EED4D] focus:border-[#1B5EED4D] focus:bg-[#FBFAFC] max-sm:mb-2 max-sm:w-[320px] xl:w-[536px]"
                  >
                    <div className="flex">
                      <input
                        type={field === "password" ? "password" : "text"}
                        name={field}
                        placeholder={field.replace("_", " ").toUpperCase()}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                        style={{ width: "100%", height: "24px" }}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-5 flex w-full justify-center gap-6 md:px-6">
                  <button className="font-regular flex w-[60%] items-center justify-center gap-2  rounded-lg border  bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:w-full ">
                    {loading ? "Signing Up..." : "Sign Up"}
                  </button>
                </div>
              </form>
            </div>

            <div className="my-4 flex justify-center gap-1 px-6">
              <p className="text-xs text-[#4F4F4F]">Already Have an Account?</p>
              <Link href="/signin" className="text-xs text-[#FF3B30]">
                Log in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {successMessage && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#000000]">{successMessage}</span>
          <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
      {error && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#D14343] bg-[#FEE5E5] text-[#D14343] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#D14343]">{error}</span>
          <Image src="/AuthImages/failed.png" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
    </>
  )
}

export default Page
